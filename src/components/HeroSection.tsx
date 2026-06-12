"use client";

import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, ChevronDown } from "lucide-react";

const stats = [
  { value: "10K+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Courses" },
  { value: "20+", label: "Pro Instructors" },
  { value: "4.9★", label: "Average Rating" },
];

function HeroSection() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Subtle radial fade on grid edges */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full text-center max-w-5xl mx-auto px-4 pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 text-teal-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          #1 Online Music Education Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Master the Art
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-sky-400">
            of Music
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed"
        >
          Dive into world-class music courses taught by professional musicians.
          Whether you&apos;re a complete beginner or refining advanced skills —
          your musical journey starts here.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/services">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Explore Courses
            </Button>
          </Link>
          <Link href="#featured">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center gap-2"
            >
              <ChevronDown className="w-4 h-4" />
              View Featured
            </Button>
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-800"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-black/80 px-6 py-5 flex flex-col items-center gap-1 hover:bg-neutral-900/60 transition-colors"
            >
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
