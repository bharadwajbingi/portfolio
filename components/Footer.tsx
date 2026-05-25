'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { profile } from '@/data/profile';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/10 bg-background/80 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand & Copyright */}
          <div className="md:col-span-2">
            <Link 
              href="/" 
              className="font-extrabold text-2xl tracking-tight text-foreground hover:text-primary transition-colors duration-300 inline-block mb-3"
            >
              {profile.personal.name}
              <span className="text-primary">.</span>
            </Link>
            <p className="text-base text-muted-foreground/80 max-w-sm leading-relaxed mb-6">
              {profile.personal.tagline || "Building enterprise-grade distributed systems and solving complex problems with clean code."}
            </p>
            <div className="flex space-x-4">
              {profile.social.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl hover:-translate-y-1"
                    aria-label={`Visit ${social.platform} profile`}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider mb-6">Explore</h3>
            <div className="space-y-3 text-base">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 w-fit"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Tech */}
          <div>
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider mb-6">Get in touch</h3>
            <div className="space-y-3 text-base">
              <a href={`mailto:${profile.personal.email}`} className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                {profile.personal.email}
              </a>
              <p className="text-muted-foreground">{profile.personal.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/80 flex items-center gap-1.5">
            © {currentYear} {profile.personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/80 flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500/20" /> & Next.js.
            <a 
              href="https://github.com/bharadwajbingi/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline hover:text-primary/80 transition-colors ml-1"
            >
              Source code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}