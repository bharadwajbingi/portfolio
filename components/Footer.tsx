'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { profile } from '@/data/profile';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Copyright */}
          <div>
            <Link 
              href="/" 
              className="font-bold text-xl text-primary hover:text-primary/80 transition-colors duration-200"
            >
              {profile.personal.name}
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              {profile.personal.title}
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              © {currentYear} {profile.personal.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </Link>
              <Link 
                href="#experience" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience
              </Link>
              <Link 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Connect</h3>
            <div className="flex space-x-3 mb-4">
              {profile.social.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-accent/50 rounded-md"
                    aria-label={`Visit ${social.platform} profile`}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>Built with Next.js & Tailwind CSS</p>
              <p>Optimized for performance & accessibility</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            This portfolio is built with modern web technologies and follows best practices for performance, 
            accessibility, and SEO. View the{' '}
            <a 
              href="https://github.com/bharadwajbingi/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              source code
            </a>
            {' '}on GitHub.
          </p>
        </div>
      </div>
    </footer>
  );
}