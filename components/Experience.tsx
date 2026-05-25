"use client";

import { motion } from "framer-motion";
import { Building, Calendar, MapPin, Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.16, 1, 0.3, 1], // Premium easing
      },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-primary bg-primary/5 border-primary/20">
              <Briefcase className="w-3 h-3 mr-2" /> Experience
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Building impactful solutions, designing robust architectures, and leading teams to success in fast-paced environments.
            </p>
          </motion.div>

          <div className="relative">
            {/* Elegant Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

            <div className="space-y-16">
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={cn(
                    "relative flex items-start md:items-center",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-background rounded-full" />
                  </div>

                  {/* Content Card Wrapper */}
                  <div
                    className={cn(
                      "ml-[50px] md:ml-0 md:w-1/2",
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    )}
                  >
                    <Card className="p-6 sm:p-8 bg-card/40 backdrop-blur-xl border-white/5 dark:border-white/10 hover:bg-card/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground font-medium mt-2">
                            <Building className="h-4 w-4 text-primary/70" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <Badge variant="secondary" className="text-xs bg-secondary/50 font-medium py-1">
                          <Calendar className="h-3 w-3 mr-1.5 text-primary/70" />
                          {exp.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-border/50 font-medium py-1">
                          <MapPin className="h-3 w-3 mr-1.5 text-primary/70" />
                          {exp.location}
                        </Badge>
                      </div>

                      {/* Description List */}
                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Section */}
                      <div>
                        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                          Key Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-secondary/40 hover:bg-secondary transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
