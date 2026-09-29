import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';
import { BRAND, NAV_LINKS, WHATSAPP_LINK } from '@/lib/constants';
import services from '@/data/services.json';

export default function Footer() {
  return (
    <footer className="bg-brand-green-900 text-white">
      {/* CTA Banner */}
      <div className="bg-brand-gold-500 text-brand-green-900">
        <div className="container-brand flex flex-col items-center justify-between gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <p className="font-serif text-lg font-bold">Book your ride on WhatsApp</p>
            <p className="text-sm text-brand-green-800">Fast, easy, and direct confirmation</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-brand-green-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-green-800"
          >
            <MessageCircle className="h-4 w-4" />
            {BRAND.phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-brand grid grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        {/* About */}
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm leading-relaxed text-white/70">
            Premium Umrah, Ziyarat, and airport transport services across Saudi Arabia.
            Your trusted partner for a blessed and comfortable journey.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Twitter, href: BRAND.social.twitter },
              { icon: Instagram, href: BRAND.social.instagram },
              { icon: Facebook, href: BRAND.social.facebook },
              { icon: Youtube, href: BRAND.social.youtube },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-brand-gold-500 hover:text-brand-green-700"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-brand-gold-300">Quick Links</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                className="text-sm text-white/70 transition-colors hover:text-brand-gold-300"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-brand-gold-300">Our Services</h4>
          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="text-sm text-white/70 transition-colors hover:text-brand-gold-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-brand-gold-300">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 text-brand-gold-400 flex-shrink-0" />
              {BRAND.phone}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 text-brand-gold-400 flex-shrink-0" />
              {BRAND.email}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-brand-gold-400 flex-shrink-0" />
              {BRAND.address}
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Clock className="h-4 w-4 text-brand-gold-400 flex-shrink-0" />
              {BRAND.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-brand px-4 py-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
