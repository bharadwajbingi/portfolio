"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { ExternalLink, Github, Star, Code2 } from "lucide-react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1], // Premium easing
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group perspective-[1000px] h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        <Card
          className={cn(
            "relative overflow-hidden bg-card/60 backdrop-blur-xl border-white/5 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 h-full flex flex-col rounded-2xl",
            project.featured && "ring-1 ring-primary/30 bg-primary/5"
          )}
        >
          {/* Project Image */}
          <div className="relative h-[280px] w-full overflow-hidden" style={{ transform: "translateZ(30px)" }}>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/project-placeholder.jpg";
              }}
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4" style={{ transform: "translateZ(40px)" }}>
                <Badge
                  variant="secondary"
                  className="bg-primary text-primary-foreground border-none shadow-lg px-3 py-1 font-semibold tracking-wide"
                >
                  <Star className="h-3.5 w-3.5 mr-1.5 fill-current" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Hover Actions */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[2px]">
              {project.demo && (
                <motion.div initial={{ y: 20 }} whileHover={{ scale: 1.05 }} className="group-hover:translate-y-0 transition-transform duration-500">
                  <Button asChild size="default" className="rounded-full shadow-xl bg-white text-black hover:bg-gray-100 font-semibold px-6">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live
                    </a>
                  </Button>
                </motion.div>
              )}
              {project.github && (
                <motion.div initial={{ y: 20 }} whileHover={{ scale: 1.05 }} className="group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <Button asChild variant="secondary" size="default" className="rounded-full shadow-xl px-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-start justify-between mb-4 gap-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <Badge variant="outline" className="text-xs bg-muted/50 whitespace-nowrap">
                {project.category}
              </Badge>
            </div>

            <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-secondary/40 hover:bg-secondary transition-colors py-1 px-3 rounded-md"
                >
                  <Code2 className="h-3 w-3 mr-1.5 text-primary/70" />
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
