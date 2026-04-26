'use client';

import { useEffect, useState } from 'react';

export type DeviceTier = 'mobile' | 'tablet' | 'desktop' | 'tv';

type DeviceInfo = {
  tier: DeviceTier;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTV: boolean;
  isTouch: boolean;
  hasFinePointer: boolean;
  prefersReducedMotion: boolean;
  width: number;
  height: number;
  pixelRatio: number;
  isLowPower: boolean;
};

/**
 * Runtime device detection — matters for decisions that can't be made
 * in CSS, like: should we even mount the 3D scene? should we reduce
 * particle count? should we disable post-processing?
 */
export function useDevice(): DeviceInfo {
  const [info, setInfo] = useState<DeviceInfo>(() => getInitialInfo());

  useEffect(() => {
    const update = () => setInfo(detectDevice());

    update();

    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);

    // Watch for prefers-reduced-motion change
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', update);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  return info;
}

function getInitialInfo(): DeviceInfo {
  // SSR fallback — assume desktop
  return {
    tier: 'desktop',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTV: false,
    isTouch: false,
    hasFinePointer: true,
    prefersReducedMotion: false,
    width: 1280,
    height: 800,
    pixelRatio: 1,
    isLowPower: false,
  };
}

function detectDevice(): DeviceInfo {
  if (typeof window === 'undefined') return getInitialInfo();

  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;

  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let tier: DeviceTier;
  if (w >= 1920 && isTouch) tier = 'tv';
  else if (w >= 1024) tier = 'desktop';
  else if (w >= 768) tier = 'tablet';
  else tier = 'mobile';

  // Heuristic: low-power if mobile AND low CPU cores AND low memory
  // @ts-ignore — these are experimental but widely supported
  const cores = navigator.hardwareConcurrency ?? 4;
  // @ts-ignore
  const memory = navigator.deviceMemory ?? 4;
  const isLowPower = tier === 'mobile' && (cores <= 4 || memory <= 2);

  return {
    tier,
    isMobile: tier === 'mobile',
    isTablet: tier === 'tablet',
    isDesktop: tier === 'desktop',
    isTV: tier === 'tv',
    isTouch,
    hasFinePointer,
    prefersReducedMotion,
    width: w,
    height: h,
    pixelRatio: dpr,
    isLowPower,
  };
}
