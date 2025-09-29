"use client";

import { motion } from "framer-motion";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { profile } from "@/data/profile";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about creating innovative solutions and learning new
              technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-200">
                <div className="space-y-4">
                  {profile.personal.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Facts */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        {profile.personal.quickFacts.degree}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {profile.personal.quickFacts.education}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Graduating {profile.personal.quickFacts.gradDate}
                      </p>
                      {profile.personal.quickFacts.gpa && (
                        <p className="text-xs text-muted-foreground">
                          GPA: {profile.personal.quickFacts.gpa}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-xs text-muted-foreground">
                        {profile.personal.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href={`mailto:${profile.personal.email}`}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {profile.personal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a
                        href={`tel:${profile.personal.phone}`}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {profile.personal.phone}
                      </a>
                    </div>
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
