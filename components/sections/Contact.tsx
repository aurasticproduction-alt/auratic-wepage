'use client';

import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import SectionHead from '@/components/ui/SectionHead';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `Aurastic Contact — ${form.subject || form.name}`,
          from_name: 'Aurastic Website',
          botcheck: '',
          name: form.name,
          email: form.email,
          phone: form.phone,
          inquiry_subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try WhatsApp instead.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try WhatsApp instead.');
    }
  };

  return (
    <section id="contact" className="section-y">
      <div className="wrap">
        <SectionHead
          kicker="Get in touch"
          title={
            <>
              First conversation: thirty minutes.
              {' '}
              <span className="italic-serif text-gradient-magenta">No cost. No commitment.</span>
            </>
          }
          lede="Tell us what you have in mind for your event — the audience, the vision, the moments you want to create. We will tell you, honestly and clearly, what it will take to deliver it at the Aurastic standard."
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1fr_1.15fr]">
          {/* ──────────────── LEFT: Contact info / direct channels ──────────────── */}
          <Reveal>
            <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[28px] border border-white/[0.22] overflow-hidden bg-gradient-to-br from-violet-900/40 via-surface/60 to-deep">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(232,121,249,0.18), transparent 60%)',
                }}
              />

              <div className="relative">
                <h3
                  className="font-display font-bold tracking-[-0.025em] leading-[1]"
                  style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}
                >
                  Let's build
                  <br />
                  your <span className="italic-serif text-violet-300">aura.</span>
                </h3>
                <p
                  className="mt-4 sm:mt-5 text-ink-muted leading-[1.6] max-w-[38ch]"
                  style={{ fontSize: 'clamp(14px, 1vw, 16px)' }}
                >
                  Reach us on any channel below, or send a message using the form. We
                  reply within <strong className="text-violet-300">2 hours</strong> on
                  working days.
                </p>

                <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-3.5">
                  <Channel
                    href="https://wa.me/917845856809"
                    label="WhatsApp · Fastest reply"
                    value="+91 78458 56809"
                    icon={
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.5 14.3c-.3-.2-1.7-.9-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0c-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4Z" />
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3c1.5.8 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3C3.5 15 3 13.5 3 12 3 7.1 7.1 3 12 3s9 4.1 9 9-4.1 8.3-9 8.3Z" opacity={0.9} />
                      </svg>
                    }
                  />
                  <Channel
                    href="mailto:aurasticproduction@gmail.com"
                    label="Email us directly"
                    value="aurasticproduction@gmail.com"
                    icon={
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <rect x={3} y={5} width={18} height={14} rx={2} />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    }
                  />
                  <Channel
                    href="https://instagram.com/aurastic_official"
                    label="Follow on Instagram"
                    value="@aurastic_official"
                    icon={
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <rect x={3} y={3} width={18} height={18} rx={5} />
                        <circle cx={12} cy={12} r={4} />
                        <circle cx={17.5} cy={6.5} r={1} fill="currentColor" />
                      </svg>
                    }
                  />
                  <Channel
                    href="tel:+917845856809"
                    label="Call us"
                    value="+91 78458 56809"
                    icon={
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    }
                  />
                </div>

                {/* Location block */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-white/[0.12]">
                  <div className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-[10px] bg-violet-500/20 grid place-items-center text-violet-200 shrink-0 mt-0.5">
                      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </span>
                    <div>
                      <small className="block text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase text-ink-muted">
                        Registered office
                      </small>
                      <strong className="block text-[14px] sm:text-[15px] font-semibold mt-0.5 text-ink leading-snug">
                        D.2/238‑C, Ground Floor, TSP Camp Road,<br />
                        Veerapuram, Chennai, Tiruvallur Dist.,<br />
                        Tamil Nadu — 600055
                      </strong>
                      <span className="block text-[12px] sm:text-[13px] text-ink-muted mt-2">
                        Headquartered in Chennai. Serving events across South India.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ──────────────── RIGHT: Contact form ──────────────── */}
          <Reveal delay={0.1}>
            <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[28px] border border-white/[0.22] bg-deep/50 overflow-hidden">
              {status === 'success' ? (
                <SuccessState onReset={() => setStatus('idle')} />
              ) : (
                <>
                  <h3
                    className="font-display font-bold tracking-[-0.02em] leading-[1]"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}
                  >
                    Send us a <span className="italic-serif text-violet-300">message</span>
                  </h3>
                  <p
                    className="mt-2 text-ink-muted"
                    style={{ fontSize: 'clamp(13px, 0.95vw, 15px)' }}
                  >
                    Fill the form below and we'll get back to you shortly.
                  </p>

                  <form onSubmit={submit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <Field label="Your name" name="name" value={form.name} onChange={onChange} required placeholder="" />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="" />
                    <Field label="Phone / WhatsApp" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="" />
                    <Field label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="Event enquiry / Collaboration" />

                    <div className="sm:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-violet-300 font-semibold">
                        Your message <span className="text-magenta">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        required
                        rows={5}
                        placeholder="Tell us about your event, ask a question, or share what you need…"
                        className="font-sans py-3 sm:py-3.5 px-4 rounded-xl bg-black/65 border border-white/[0.22] text-ink focus:border-violet-500 focus:bg-black/90 outline-none transition resize-y min-h-[140px]"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="sm:col-span-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                        {errorMsg}
                      </div>
                    )}

                    <div className="sm:col-span-2 mt-1 flex items-center justify-between gap-4 flex-wrap">
                      <p className="text-[12px] sm:text-[13px] text-ink-muted">
                        We'll reply within{' '}
                        <strong className="text-violet-300">2 hours</strong>.
                      </p>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="inline-flex items-center gap-2 min-h-[48px] px-5 sm:px-6 py-3 rounded-full bg-gradient-to-br from-violet-500 to-magenta text-white text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)] mouse:hover:-translate-y-0.5 active:scale-[0.98] transition w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? (
                          <>
                            <Spinner /> Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/* ──────────────── Sub-components ──────────────── */

function Field({
  label, name, type = 'text', required = false, placeholder, value, onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-violet-300 font-semibold">
        {label} {required && <span className="text-magenta">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="font-sans min-h-[48px] py-3 sm:py-3.5 px-4 rounded-xl bg-black/65 border border-white/[0.22] text-ink focus:border-violet-500 focus:bg-black/90 outline-none transition"
      />
    </div>
  );
}

function Channel({
  href, label, value, icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener' : undefined}
      className="group flex items-center gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-[12px] sm:rounded-[14px] border border-white/[0.10] bg-void/40 mouse:hover:border-violet-500 mouse:hover:translate-x-1 active:bg-violet-500/10 transition min-h-[56px]"
    >
      <span className="w-10 h-10 rounded-[10px] bg-violet-500/20 grid place-items-center text-violet-200 shrink-0 group-hover:bg-violet-500/30 transition">
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <small className="block text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase text-ink-muted">
          {label}
        </small>
        <strong className="block text-[14px] sm:text-[15px] font-semibold mt-0.5 text-ink truncate">
          {value}
        </strong>
      </span>
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        className="text-ink-faint group-hover:text-violet-300 group-hover:translate-x-1 transition shrink-0"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width={14} height={14} viewBox="0 0 24 24" fill="none">
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={3} opacity={0.25} />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-16">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-magenta grid place-items-center mb-5 shadow-[0_10px_30px_-5px_rgba(139,92,246,0.6)]">
        <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h3
        className="font-display font-bold tracking-[-0.02em]"
        style={{ fontSize: 'clamp(24px, 2.8vw, 40px)' }}
      >
        Message <span className="italic-serif text-violet-300">sent.</span>
      </h3>
      <p className="mt-3 text-ink-muted max-w-[38ch]" style={{ fontSize: 'clamp(14px, 1vw, 17px)' }}>
        Thanks for reaching out! We've got your message and will reply within 2 hours on
        working days. Check your spam folder just in case.
      </p>
      <button
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.22] text-ink text-sm font-semibold mouse:hover:bg-white/[0.08] transition"
      >
        Send another message
      </button>
    </div>
  );
}
