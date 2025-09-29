'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code, ChefHat, Trophy, Terminal, Briefcase } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { profile } from '@/data/profile';

const iconMap = {
  code: Code,
  'chef-hat': ChefHat,
  trophy: Trophy,
  terminal: Terminal,
  briefcase: Briefcase,
};

export function CodingProfiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Coding <span className="text-primary">Profiles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Competitive programming and problem-solving achievements across platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {profile.codingProfiles.map((profile, index) => {
              const IconComponent = iconMap[profile.icon as keyof typeof iconMap] || Code;
              
              return (
                <motion.div key={profile.platform} variants={itemVariants}>
                  <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-200 group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm group-hover:text-primary transition-colors duration-200">
                          {profile.platform}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">@{profile.username}</p>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="h-auto p-1 text-xs">
                        <a 
                          href={profile.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          Visit <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}