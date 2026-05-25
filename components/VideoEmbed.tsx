"use client";

import { motion } from "framer-motion";
import { Play, Video, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { VIDEOS, isVideoConfigured } from "@/data/videos";

interface VideoSectionProps {
  videoKey: "intro" | "projectDemo";
}

function VideoCard({ videoKey }: VideoSectionProps) {
  const video = VIDEOS[videoKey];
  const configured = isVideoConfigured(video.embedUrl);

  return (
    <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-300 group">
      {/* Video Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 rounded-lg bg-primary/10">
            <Video className="h-4 w-4 text-primary" />
          </div>
          <h3 className="font-semibold text-base">{video.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </div>

      {/* Video Player / Placeholder */}
      <div className="px-5 pb-5">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted/30 border border-border/50">
          {configured ? (
            <iframe
              src={video.embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20"
              >
                <Play className="h-7 w-7 text-primary ml-1" />
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">Video coming soon</p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Update in <code className="bg-muted px-1 rounded text-xs">data/videos.ts</code>
              </p>
            </div>
          )}
        </div>

        {/* View on YouTube link */}
        {configured && (
          <div className="mt-3 flex justify-end">
            <Button asChild variant="ghost" size="sm" className="text-xs h-7">
              <a
                href={video.embedUrl.replace("/embed/", "/watch?v=")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View on YouTube
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export function VideoSection() {
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
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                <Video className="h-3 w-3 mr-1" />
                Demos
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Project <span className="text-primary">Walkthroughs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              In-depth technical explanations and demonstrations of my core projects
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <VideoCard videoKey="intro" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <VideoCard videoKey="projectDemo" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
