'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Map } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PublicLayout from '@/components/shared/PublicLayout';
import SectionHeading from '@/components/shared/SectionHeading';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { BRAND, WHATSAPP_LINK } from '@/lib/constants';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: BRAND.phone, href: WHATSAPP_LINK },
    { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: MapPin, label: 'Address', value: BRAND.address },
    { icon: Clock, label: 'Hours', value: BRAND.hours },
  ];

  return (
    <PublicLayout>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We're here 24/7 to help with your bookings and questions"
      />

      {/* Contact content */}
      <section className="section-padding bg-white">
        <div className="container-brand grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact Information"
                title="Reach"
                highlight="Out to Us"
                center={false}
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Whether you have a question about our services, need help with a booking, or want to
                discuss a custom arrangement, our team is ready to assist you any time.
              </p>

              <div className="mt-6 space-y-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-lg border border-brand-green-200 bg-white p-4 transition-colors hover:border-brand-gold-400"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-brand-gold-100">
                      <item.icon className="h-5 w-5 text-brand-gold-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-600">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-brand-green-700 hover:text-brand-gold-600">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-brand-green-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 overflow-hidden rounded-lg border border-brand-green-200">
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-brand-green-50 to-brand-gold-50/30">
                  <Map className="h-12 w-12 text-brand-green-300" />
                  <span className="absolute bottom-3 text-xs font-medium text-brand-green-600">{BRAND.address}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={150}>
            <div className="rounded-lg border border-brand-green-200 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-brand-green-700">Send a Message</h3>
              <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we&apos;ll get back to you shortly.</p>

              {submitted && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">
                  Your message has been sent. We&apos;ll contact you soon!
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-brand-green-700">Full Name</Label>
                    <Input
                      required
                      placeholder="Your name"
                      className="border-brand-green-200 focus-visible:ring-brand-gold-500/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-brand-green-700">Phone</Label>
                    <Input
                      required
                      type="tel"
                      placeholder="+966 5X XXX XXXX"
                      className="border-brand-green-200 focus-visible:ring-brand-gold-500/40"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-brand-green-700">Email</Label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="border-brand-green-200 focus-visible:ring-brand-gold-500/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-brand-green-700">Subject</Label>
                  <Input
                    placeholder="What can we help with?"
                    className="border-brand-green-200 focus-visible:ring-brand-gold-500/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-brand-green-700">Message</Label>
                  <Textarea
                    required
                    placeholder="Tell us more..."
                    className="min-h-[120px] resize-none border-brand-green-200 focus-visible:ring-brand-gold-500/40"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-green-900 transition-colors hover:bg-brand-gold-400"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
