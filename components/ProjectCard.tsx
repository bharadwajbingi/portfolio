"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  impact: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
  featured: boolean;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const, // ✅ fix typing issue
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group"
    >
      <Card
        className={cn(
          "overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-200 h-full",
          project.featured && "ring-1 ring-primary/20"
        )}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/project-placeholder.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge
                variant="secondary"
                className="bg-background/90 text-foreground"
              >
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex space-x-2">
              {project.demo && (
                <Button asChild size="sm">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-background/90"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Problem & Impact */}
          <div className="space-y-3 mb-4">
            <div>
              <p className="text-xs font-medium text-primary mb-1">Problem</p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
                Impact
              </p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-muted/50"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs bg-muted/50">
                +{project.tech.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Links */}
          <div className="flex space-x-3">
            {project.demo && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="ghost" size="sm" className="flex-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
