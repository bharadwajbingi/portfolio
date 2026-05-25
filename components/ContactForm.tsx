"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Copy,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { toast } from "sonner";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function ContactForm() {
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`, {
        icon: '📋',
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
      });
    } catch {
      toast.error("Failed to copy");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">
              <MessageSquare className="w-3 h-3 mr-2" /> Connect
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <Card className="p-8 sm:p-10 bg-card/60 backdrop-blur-xl border-white/5 dark:border-white/10 shadow-2xl rounded-3xl relative overflow-hidden group">
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Get In Touch
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300 gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-emerald-500/10 rounded-xl">
                        <Mail className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-0.5">Email</p>
                        <a
                          href={`mailto:${profile.personal.email}`}
                          className="text-sm text-muted-foreground font-medium hover:text-emerald-500 transition-colors duration-200"
                        >
                          {profile.personal.email}
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(profile.personal.email, 'Email')}
                      className="bg-background/50 hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/30 transition-colors sm:w-auto w-full"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300 gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <Phone className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-0.5">Phone</p>
                        <a
                          href={`tel:${profile.personal.phone}`}
                          className="text-sm text-muted-foreground font-medium hover:text-purple-500 transition-colors duration-200"
                        >
                          {profile.personal.phone}
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(profile.personal.phone, 'Phone number')}
                      className="bg-background/50 hover:bg-purple-500/10 hover:text-purple-500 hover:border-purple-500/30 transition-colors sm:w-auto w-full"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/50 transition-all duration-300">
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <MapPin className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-0.5">Location</p>
                      <p className="text-sm text-muted-foreground font-medium">
                        {profile.personal.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-border/40">
                  <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Social Profiles</p>
                  <div className="flex flex-wrap gap-3">
                    {profile.social.map((social) => {
                      const IconComponent =
                        socialIcons[social.icon as keyof typeof socialIcons];
                      return (
                        <Button
                          key={social.platform}
                          asChild
                          variant="outline"
                          size="default"
                          className="rounded-xl bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {IconComponent && (
                              <IconComponent className="h-4 w-4 mr-2" />
                            )}
                            {social.platform}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
