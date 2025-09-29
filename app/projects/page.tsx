"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(profile.projects.map((p) => p.category))),
  ];

  const allTechTags = Array.from(
    new Set(profile.projects.flatMap((p) => p.tech))
  );

  // Filter projects
  const filteredProjects =
    selectedFilter === "All"
      ? profile.projects
      : profile.projects.filter(
          (p) =>
            p.category === selectedFilter || p.tech.includes(selectedFilter)
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <main className="relative min-h-screen">
      <Navbar />

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-slate-50/30 dark:from-slate-950/30 dark:via-transparent dark:to-slate-950/30" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive showcase of applications I've built, featuring
              modern technologies and innovative solutions
            </p>
            <Button asChild variant="outline">
              <Link href="/">← Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>

            {/* Desktop Filters */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <div className="sm:hidden">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {selectedFilter}
                {isFilterOpen ? <X className="h-4 w-4" /> : null}
              </Button>
            </div>
          </motion.div>

          {/* Mobile Filter Options */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden mb-6"
              >
                <div className="flex flex-wrap gap-2 p-4 bg-muted/20 rounded-lg">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedFilter === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => {
                        setSelectedFilter(category);
                        setIsFilterOpen(false);
                      }}
                      className="transition-all duration-200"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project Count */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {profile.projects.length}{" "}
              projects
              {selectedFilter !== "All" && (
                <span>
                  {" "}
                  in{" "}
                  <Badge variant="secondary" className="ml-1">
                    {selectedFilter}
                  </Badge>
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${selectedFilter}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg mb-4">
                No projects found for "{selectedFilter}"
              </p>
              <Button
                onClick={() => setSelectedFilter("All")}
                variant="outline"
              >
                Show All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
