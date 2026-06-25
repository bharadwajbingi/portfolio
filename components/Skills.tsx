"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig, useTime, useTransform } from "framer-motion";
import { 
  Brain, ShieldCheck, Key, UserCheck, Layers, CheckCircle, Cloud,
  Database, DatabaseZap, Globe, Map, Rocket, Zap, FileSearch, Terminal,
  Server, Boxes, GitBranch, Smartphone, Lock, Hash, Timer, Ghost, Box, Activity, ListChecks,
  Network, HardDrive, Monitor, Wifi, Component, Layout, RefreshCw, Code2
} from "lucide-react";
import { profile } from "@/data/profile";

// Curated list of core technologies
const coreSkills = [
  { id: "java", name: "Java 17", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", ring: 1 },
  { id: "spring", name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", ring: 1 },
  { id: "postgres", name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", ring: 1 },
  { id: "docker", name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", ring: 1 },
  { id: "redis", name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", ring: 2 },
  { id: "git", name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", ring: 2 },
  { id: "aws", name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", ring: 2 },
  { id: "github", name: "GitHub Actions", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", fallback: Cloud, ring: 2 },
  { id: "maven", name: "Maven", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", ring: 2 },
  { id: "sql", name: "SQL", fallback: Database, ring: 2 },
  { id: "security", name: "Spring Security", fallback: ShieldCheck, ring: 3 },
  { id: "batch", name: "Spring Batch", fallback: Layers, ring: 3 },
  { id: "rest", name: "REST APIs", fallback: Globe, ring: 3 },
  { id: "testcontainers", name: "Testcontainers", fallback: Box, ring: 3 },
  { id: "junit", name: "JUnit 5", fallback: CheckCircle, ring: 3 },
  { id: "mockito", name: "Mockito", fallback: Ghost, ring: 3 },
];

const iconMap: Record<string, { url?: string, icon?: any }> = {
  "java 17": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  "spring boot": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  "postgresql": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  "docker": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  "redis": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  "git": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  "aws": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  "github actions": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
  "maven": { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
  "sql": { icon: Database },
  "spring batch": { icon: Layers },
  "spring security": { icon: ShieldCheck },
  "rest apis": { icon: Globe },
  "microservices": { icon: Server },
  "ci/cd": { icon: RefreshCw },
  "testcontainers": { icon: Box },
  "junit 5": { icon: CheckCircle },
  "mockito": { icon: Ghost },
};

const getSkillDisplay = (skillName: string) => {
  const core = coreSkills.find(s => s.name === skillName);
  const iconUrl = core?.iconUrl || iconMap[skillName.toLowerCase()]?.url;
  const FallbackIcon = core?.fallback || iconMap[skillName.toLowerCase()]?.icon || Code2;
  
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 px-4 group">
      {iconUrl ? (
        <img src={iconUrl} alt={skillName} className="w-8 h-8 object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] pointer-events-none" />
      ) : (
        <FallbackIcon className="w-7 h-7 text-primary/80 drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] pointer-events-none" />
      )}
      <span className="font-medium text-[10px] tracking-wider text-muted-foreground whitespace-nowrap text-center uppercase">
        {skillName}
      </span>
    </div>
  );
};

export function Skills() {
  const [isOrbit, setIsOrbit] = useState(true);

  // Divide CORE skills into 4 rows using column-major distribution (top to down, repeating at row 1)
  const allSkills = coreSkills.map(s => s.name);
  
  const row1: string[] = [];
  const row2: string[] = [];
  const row3: string[] = [];
  const row4: string[] = [];

  allSkills.forEach((skill, index) => {
    if (index % 4 === 0) row1.push(skill);
    else if (index % 4 === 1) row2.push(skill);
    else if (index % 4 === 2) row3.push(skill);
    else row4.push(skill);
  });

  const row1Tripled = [...row1, ...row1, ...row1];
  const row2Tripled = [...row2, ...row2, ...row2];
  const row3Tripled = [...row3, ...row3, ...row3];
  const row4Tripled = [...row4, ...row4, ...row4];

  return (
    <section id="skills" className="py-24 overflow-hidden relative border-y border-border/10 bg-background/50 min-h-[800px] flex items-center">
      {/* Deep space glow effect - Reduced opacity to prevent washing out the sharp stars */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent opacity-40" />
      
      <div className="max-w-[1400px] mx-auto px-4 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Header Area (Left Side - 35%) */}
        <div className="w-full lg:w-[35%] flex flex-col items-start text-left z-20 pointer-events-none">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 block mt-2">Ecosystem</span>
          </h2>
          
          {/* Description Reveal */}
          <div className="mt-6 w-full">
            <p className="text-muted-foreground text-lg sm:text-xl font-medium leading-relaxed">
              A robust arsenal of modern frameworks, cloud architectures, and enterprise tools powering scalable, high-performance applications.
            </p>
          </div>
        </div>

        {/* Main Interactive Area (Right Side - 65%) */}
        <div className="relative w-full lg:w-[65%] h-auto lg:h-[700px] flex items-center justify-center z-10 overflow-visible">
          <MotionConfig transition={{ type: "spring", bounce: 0.15, duration: 1.6 }}>
            
            {/* DESKTOP VIEW (Visible on lg screens and above) */}
            <div className="hidden lg:flex absolute w-[700px] h-[700px] items-center justify-center">
              <AnimatePresence mode="popLayout">
                {isOrbit ? (
                  <OrbitLayout key="orbit" />
                ) : (
                  <ScatteredLayout key="grid" />
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Toggle Button (The Brain) */}
            <button
              onClick={() => setIsOrbit(!isOrbit)}
              className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-card/80 backdrop-blur-xl border-2 border-primary/60 rounded-full w-24 h-24 items-center justify-center shadow-[0_0_60px_rgba(var(--primary),0.6)] group hover:scale-110 transition-transform duration-500 cursor-pointer pointer-events-auto"
            >
              <Brain className="w-12 h-12 text-primary" />
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-30" style={{ animationDuration: '2.5s' }} />
            </button>

            {/* MOBILE VIEW - 4-Row Infinite Zigzag Marquee */}
            <div className="flex lg:hidden flex-col gap-6 w-full max-w-sm mx-auto overflow-hidden py-4">
              
              {/* Row 1: Right */}
              <div className="relative w-full overflow-hidden flex items-center">
                <div className="animate-marquee-right flex gap-8 pr-8 items-center w-max" style={{ animationDuration: "55s" }}>
                  {row1Tripled.map((skillName, index) => (
                    <div
                      key={`r1-${skillName}-${index}`}
                      className="flex items-center justify-center h-12 flex-shrink-0"
                    >
                      {getSkillDisplay(skillName)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Left */}
              <div className="relative w-full overflow-hidden flex items-center">
                <div className="animate-marquee-left flex gap-8 pr-8 items-center w-max" style={{ animationDuration: "55s" }}>
                  {row2Tripled.map((skillName, index) => (
                    <div
                      key={`r2-${skillName}-${index}`}
                      className="flex items-center justify-center h-12 flex-shrink-0"
                    >
                      {getSkillDisplay(skillName)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: Right */}
              <div className="relative w-full overflow-hidden flex items-center">
                <div className="animate-marquee-right flex gap-8 pr-8 items-center w-max" style={{ animationDuration: "55s" }}>
                  {row3Tripled.map((skillName, index) => (
                    <div
                      key={`r3-${skillName}-${index}`}
                      className="flex items-center justify-center h-12 flex-shrink-0"
                    >
                      {getSkillDisplay(skillName)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 4: Left */}
              <div className="relative w-full overflow-hidden flex items-center">
                <div className="animate-marquee-left flex gap-8 pr-8 items-center w-max" style={{ animationDuration: "55s" }}>
                  {row4Tripled.map((skillName, index) => (
                    <div
                      key={`r4-${skillName}-${index}`}
                      className="flex items-center justify-center h-12 flex-shrink-0"
                    >
                      {getSkillDisplay(skillName)}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </MotionConfig>
        </div>

      </div>
    </section>
  );
}

// --- DESKTOP ORBIT LAYOUT (Original, Untouched) ---
function OrbitLayout() {
  const ring1 = coreSkills.filter(s => s.ring === 1);
  const ring2 = coreSkills.filter(s => s.ring === 2);
  const ring3 = coreSkills.filter(s => s.ring === 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-[700px] h-[700px] flex items-center justify-center">
        <OrbitRing radius={115} items={ring1} duration={25} />
        <OrbitRing radius={195} items={ring2} duration={40} reverse />
        <OrbitRing radius={280} items={ring3} duration={55} />
      </div>
    </motion.div>
  );
}

function OrbitRing({ radius, items, duration, reverse = false }: { radius: number; items: any[]; duration: number; reverse?: boolean }) {
  return (
    <>
      <div 
        className="absolute top-1/2 left-1/2 rounded-full border border-primary/20 border-dashed -translate-x-1/2 -translate-y-1/2"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {items.map((skill, index) => (
        <OrbitItem 
          key={skill.id} 
          skill={skill} 
          radius={radius} 
          duration={duration} 
          reverse={reverse} 
          index={index} 
          total={items.length} 
        />
      ))}
    </>
  );
}

function OrbitItem({ skill, radius, duration, reverse, index, total }: any) {
  const time = useTime();
  const initialAngle = (index / total) * Math.PI * 2;
  
  const timeMultiplier = reverse ? -1 : 1;
  const angularSpeed = (Math.PI * 2) / (duration * 1000) * timeMultiplier;

  const x = useTransform(time, (t) => Math.cos(initialAngle + t * angularSpeed) * radius);
  const y = useTransform(time, (t) => Math.sin(initialAngle + t * angularSpeed) * radius);

  return (
    <motion.div 
      className="absolute top-1/2 left-1/2 -ml-7 -mt-7 pointer-events-auto"
      style={{ x, y }}
    >
      <motion.div
        layoutId={`skill-bubble-${skill.id}`}
        className="relative group w-14 h-14 bg-card/95 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] cursor-default z-10"
      >
        <SkillIcon skill={skill} />
      </motion.div>
    </motion.div>
  );
}

// --- DESKTOP SCATTERED CLOUD LAYOUT (Original, Untouched) ---
const SCATTERED_POSITIONS = [
  { x: -280, y: -180 },
  { x: 0, y: -260 },
  { x: 280, y: -180 },
  { x: -380, y: -40 },
  { x: 380, y: -40 },
  { x: -300, y: 120 },
  { x: 300, y: 120 },
  { x: -180, y: 240 },
  { x: 180, y: 240 },
  { x: 0, y: 280 },
  { x: -150, y: -120 },
  { x: 150, y: -120 },
  { x: -220, y: 40 },
  { x: 220, y: 40 },
  { x: -120, y: 140 },
  { x: 120, y: 140 },
];

function ScatteredItem({ skill, index }: any) {
  const pos = SCATTERED_POSITIONS[index % SCATTERED_POSITIONS.length];

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-auto"
      style={{ x: pos.x, y: pos.y }}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 w-28 group">
        <motion.div
          layoutId={`skill-bubble-${skill.id}`}
          className="w-14 h-14 bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-colors duration-300 z-10 cursor-default"
        >
          <SkillIcon skill={skill} />
        </motion.div>
        
        <span className="font-semibold text-xs sm:text-sm text-foreground/90 group-hover:text-primary transition-colors whitespace-nowrap text-center">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

function ScatteredLayout() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="absolute inset-0 w-full max-w-6xl mx-auto flex items-center justify-center pointer-events-none"
    >
      {coreSkills.map((skill, index) => (
        <ScatteredItem 
          key={skill.id} 
          skill={skill} 
          index={index} 
        />
      ))}
    </motion.div>
  );
}

function SkillIcon({ skill }: { skill: any }) {
  return skill.iconUrl ? (
    <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 object-contain filter drop-shadow-md pointer-events-none" />
  ) : (
    skill.fallback && <skill.fallback className="w-7 h-7 text-primary/70 pointer-events-none" />
  );
}
