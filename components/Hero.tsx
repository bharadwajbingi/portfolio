'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Calendar, Terminal } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { profile } from '@/data/profile';

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const textVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Status Badges */}
          <motion.div custom={0} variants={textVariants} className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-primary/5 hover:bg-primary/10 text-primary border-primary/20 px-4 py-1.5 transition-colors">
              <MapPin className="h-3.5 w-3.5 mr-2" />
              {profile.personal.location}
            </Badge>
            <Badge variant="secondary" className="bg-green-500/5 hover:bg-green-500/10 text-green-600 border-green-500/20 px-4 py-1.5 dark:text-green-400 transition-colors">
              <Calendar className="h-3.5 w-3.5 mr-2" />
              {profile.personal.availability}
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.div custom={1} variants={textVariants} className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-foreground mb-2">
                Hi, I'm {profile.personal.name}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-primary">
                {profile.personal.title}
              </span>
            </h1>
          </motion.div>
          
          <motion.p custom={2} variants={textVariants} className="text-lg sm:text-xl text-muted-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {profile.personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div custom={3} variants={textVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="group min-w-[200px] shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:shadow-[0_0_60px_-15px_hsl(var(--primary))] transition-all duration-300 rounded-full h-12 text-base">
              <Link href="#projects" onClick={handleSmoothScroll}>
                <Terminal className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="min-w-[200px] rounded-full h-12 text-base border-border/50 hover:bg-secondary/50 backdrop-blur-sm transition-all duration-300">
              <Link href="#contact" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                Get In Touch
              </Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer"
              onClick={handleSmoothScroll}
            >
              <div className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2">
                <motion.div 
                  animate={{ height: ["20%", "60%", "20%"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-1 bg-current rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}