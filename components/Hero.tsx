'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { profile } from '@/data/profile';

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <MapPin className="h-3 w-3 mr-1" />
              {profile.personal.location}
            </Badge>
            <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 px-3 py-1 dark:text-green-400">
              <Calendar className="h-3 w-3 mr-1" />
              {profile.personal.availability}
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">
              {profile.personal.name}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
            {profile.personal.title}
          </p>
          
          <p className="text-lg sm:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            {profile.personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="min-w-[200px] shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Link href="#about" onClick={handleSmoothScroll}>
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="lg" className="min-w-[200px] hover:bg-accent/50">
              <Link href="#contact" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-muted-foreground/60"
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}