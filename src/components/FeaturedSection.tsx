"use client";

import Link from "next/link";
import Image from "next/image";
import servicesData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedSection() {
  const featuredServices = servicesData.services.filter(
    (service: Service) => service.isFeatured
  );

  return (
    <section id="featured" className="py-20 bg-black/[0.96] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-teal-500 mb-3">
            Featured Courses
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Learn With the Best
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-base">
            Hand-picked courses from our top instructors — start learning today
            and take your musical skills to the next level.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service: Service, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden hover:border-neutral-600 transition-colors duration-300"
            >
              {/* Card image */}
              <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={`${service.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-neutral-700">
                  ₹{service.price.toLocaleString()}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Instructor row */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {service.instructor.charAt(0)}
                  </div>
                  <span className="text-neutral-400 text-xs">{service.instructor}</span>
                </div>

                {/* CTA */}
                <Link href={`/services/${service.slug}`} className="mt-2 block w-full">
                  <Button
                    borderRadius="0.85rem"
                    containerClassName="w-full h-11"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm font-medium"
                  >
                    Learn More →
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-14">
          <Link href="/services">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
