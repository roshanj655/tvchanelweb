'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CircleCheck as CheckCircle, Radio } from 'lucide-react';
import { createClient } from '@/lib/supabase';

const contactInfo = [
  { icon: MapPin, label: 'Our Address', value: '123 Broadcast Avenue, Media City, CA 90001', subvalue: 'United States' },
  { icon: Phone, label: 'Phone Number', value: '+1 (800) 555-STREAM', subvalue: 'Mon-Fri, 9AM - 8PM EST' },
  { icon: Mail, label: 'Email Address', value: 'info@streamtv.com', subvalue: 'We reply within 24 hours' },
  { icon: Clock, label: 'Working Hours', value: '24/7 Live Support', subvalue: 'Technical help always available' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      const supabase = createClient();
      const { error } = await (supabase as any).from('contact_messages').insert([
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
      ]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-950 pt-16 min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-950 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-5">
            <Radio className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-300 text-xs font-semibold uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have a question or feedback? Our team is ready to help you get the best streaming experience.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, subvalue }) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-red-500/20 transition-colors"
              >
                <div className="w-11 h-11 bg-red-600/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{subvalue}</div>
                </div>
              </div>
            ))}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office Location"
                className="w-full h-44 object-cover opacity-60"
              />
              <div className="p-4">
                <div className="text-white font-medium text-sm">StreamTV Headquarters</div>
                <div className="text-slate-500 text-xs mt-0.5">Media City, Los Angeles, CA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-500/15 rounded-2xl flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. Our team will respond to your message within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 transition-colors appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Channel Request">Channel Request</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Billing">Billing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30 transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-600/15 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
