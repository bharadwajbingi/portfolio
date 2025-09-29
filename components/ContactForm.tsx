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
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { profile } from "@/data/profile";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function ContactForm() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss opportunities and build something amazing together
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Email</p>
                      <div className="flex items-center space-x-2">
                        <a
                          href={`mailto:${profile.personal.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {profile.personal.email}
                        </a>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(profile.personal.email)
                          }
                          className="h-auto p-1"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Phone</p>
                      <div className="flex items-center space-x-2">
                        <a
                          href={`tel:${profile.personal.phone}`}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {profile.personal.phone}
                        </a>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(profile.personal.phone)
                          }
                          className="h-auto p-1"
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        {profile.personal.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="font-medium mb-3">Connect with me</p>
                  <div className="flex space-x-3">
                    {profile.social.map((social) => {
                      const IconComponent =
                        socialIcons[social.icon as keyof typeof socialIcons];
                      return (
                        <Button
                          key={social.platform}
                          asChild
                          variant="outline"
                          size="sm"
                          className="hover:bg-primary/10 hover:border-primary/20"
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {IconComponent && (
                              <IconComponent className="h-4 w-4" />
                            )}
                            {social.platform}
                          </a>
                        </Button>
                      );
                    })}
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
