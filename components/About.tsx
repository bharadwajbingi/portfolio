"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Mail, Phone, MapPin, User, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">
              <User className="w-3 h-3 mr-2" /> About Me
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Am</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions, writing clean code, and mastering new technologies to build impactful software.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="w-full lg:col-span-2 flex flex-col">
              <Card className="p-6 sm:p-10 h-full bg-card/60 backdrop-blur-xl border-white/5 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-3xl relative overflow-hidden group">
                {/* Subtle gradient shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">My Story</h3>
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground/90 leading-relaxed text-lg">
                    {profile.personal.bio.map((paragraph, index) => (
                      <p key={index} className="relative pl-4 border-l-2 border-primary/20 hover:border-primary/60 transition-colors duration-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Facts Section (Hidden on mobile, shown on desktop with 50/50 layout) */}
            <motion.div variants={itemVariants} className="hidden lg:flex flex-col lg:col-span-1">
              <Card className="p-6 sm:p-8 h-full bg-card/60 backdrop-blur-xl border-white/5 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-3xl relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Facts</h3>
                
                <div className="space-y-5">
                  {/* Education */}
                  <div className="group flex items-start space-x-3.5 p-2.5 rounded-2xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-border/50">
                    <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                      <GraduationCap className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-0.5">Education</p>
                      <p className="text-sm text-muted-foreground font-medium leading-snug">
                        {profile.personal.quickFacts.degree}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-0.5">
                        {profile.personal.quickFacts.education}
                      </p>
                      <Badge variant="secondary" className="mt-1.5 text-[10px] bg-primary/5 text-primary border-primary/20">
                        Class of {profile.personal.quickFacts.gradDate}
                      </Badge>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group flex items-center space-x-3.5 p-2.5 rounded-2xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-border/50">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                      <MapPin className="h-4.5 w-4.5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-0.5">Location</p>
                      <p className="text-sm text-muted-foreground font-medium">{profile.personal.location}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-center space-x-3.5 p-2.5 rounded-2xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-border/50">
                    <div className="p-2.5 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                      <Mail className="h-4.5 w-4.5 text-emerald-500" />
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

                  {/* Phone */}
                  <div className="group flex items-center space-x-3.5 p-2.5 rounded-2xl hover:bg-secondary/40 transition-all duration-300 border border-transparent hover:border-border/50">
                    <div className="p-2.5 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                      <Phone className="h-4.5 w-4.5 text-purple-500" />
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

                  {/* Technical Philosophy (Utilizing empty whitespace beautifully!) */}
                  <div className="pt-5 border-t border-border/40 mt-5 space-y-3.5">
                    <p className="text-sm font-semibold text-foreground">Technical Philosophy</p>
                    <p className="text-sm leading-relaxed text-muted-foreground/90">
                      Specialized in architecting and developing enterprise-grade backend systems. I focus on building high-performance, fault-tolerant architectures featuring chunk-based batch pipelines, secure stateless authentication, and multi-tenant data isolation.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground/90">
                      Committed to writing clean, testable, and self-healing code that processes millions of financial transactions with high observability and zero data loss.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
