"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Spotlight } from "@/components/ui/Spotlight";

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
};

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  courses: Course[];
};

export default function ServicePageLayout({
  title,
  subtitle,
  courses,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Page header */}
      <div className="relative z-10 pt-32 pb-12 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {title}
        </h1>
        <p className="mt-4 text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
        <p className="mt-2 text-neutral-500 text-sm">
          {courses.length} course{courses.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* Course grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 px-4 pb-20">
        {courses.map((service) => (
          <CardContainer key={service.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] sm:w-[22rem] min-h-[460px] rounded-xl p-6 border flex flex-col justify-between">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {service.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                >
                  {service.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={service.image}
                    height={200}
                    width={400}
                    className="h-[180px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={service.title}
                  />
                </CardItem>
              </div>

              <div>
                <div className="flex items-center justify-between mt-4">
                  <CardItem
                    translateZ={20}
                    className="text-xs text-neutral-400 dark:text-neutral-400"
                  >
                    By {service.instructor}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className="text-sm font-bold text-white"
                  >
                    ₹{service.price}
                  </CardItem>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:opacity-80 transition"
                  >
                    Preview →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="/contact"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-90 transition"
                  >
                    Enroll Now
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Back link */}
      <div className="relative z-10 text-center pb-12">
        <Link
          href="/services"
          className="text-neutral-400 hover:text-white text-sm transition underline underline-offset-4"
        >
          ← Browse all services
        </Link>
      </div>
    </div>
  );
}
