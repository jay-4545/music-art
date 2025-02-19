"use client";

import Link from "next/link";
import servicesData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedSection() {
  const featuredServices = servicesData.services.filter(
    (service: Service) => service.isFeatured
  );
  return (
    <div className="py-14 bg-black/[0.96]">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED SERVICES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-8 justify-center
        "
        >
          {featuredServices.map((service: Service) => (
            <div key={service.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white bg-black/[0.96] overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col gap-6 items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {service.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-200 flex-grow">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link href={"/services"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
