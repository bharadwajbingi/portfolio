"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Bookmark } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
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
              <Bookmark className="w-3 h-3 mr-2" /> Achievements
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              Certifications <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">& Courses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Continuous learning and professional development achievements that validate my technical expertise.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {profile.certifications.map((cert, index) => (
              <motion.div key={cert.name} variants={itemVariants} className="h-full w-full sm:w-[400px]">
                <Card className="p-8 h-full bg-card/40 backdrop-blur-xl border-white/5 dark:border-white/10 hover:bg-card/60 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 rounded-3xl relative overflow-hidden flex flex-col">
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col relative z-10">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-tight">
                      {cert.name}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground font-medium">
                        <span className="truncate pr-2">{cert.issuer}</span>
                        <span className="flex-shrink-0 px-2 py-1 bg-secondary/50 rounded-md text-xs">{cert.date}</span>
                      </div>
                      
                      {cert.url && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between hover:bg-primary/10 hover:text-primary mt-2 group/btn"
                        >
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Credential
                            <ExternalLink className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
