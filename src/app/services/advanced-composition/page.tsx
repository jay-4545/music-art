import ServicePageLayout from "@/components/ServicePageLayout";
import courseData from "@/data/music_courses.json";

const relevantIds = [5, 7, 10];

export default function AdvancedCompositionPage() {
  const courses = courseData.services.filter((s) =>
    relevantIds.includes(s.id)
  );

  return (
    <ServicePageLayout
      title="Advanced Composition"
      subtitle="Take your musical ideas to the next level. Explore advanced techniques in composition, orchestration, and harmonic analysis."
      courses={courses}
    />
  );
}
