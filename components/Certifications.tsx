"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { profile } from "@/data/profile";

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Certifications <span className="text-primary">& Courses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous learning and professional development achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.certifications.map((cert, index) => (
              <motion.div key={cert.name} variants={itemVariants}>
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-200 group">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary group-hover:text-primary/80 transition-colors duration-200 mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      {cert.url && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-xs"
                        >
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            View Certificate
                            <ExternalLink className="ml-1 h-3 w-3" />
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
