import ServicePageLayout from "@/components/ServicePageLayout";
import courseData from "@/data/music_courses.json";

const relevantIds = [3, 8];

export default function MusicProductionPage() {
  const courses = courseData.services.filter((s) =>
    relevantIds.includes(s.id)
  );

  return (
    <ServicePageLayout
      title="Music Production"
      subtitle="Learn to produce professional-quality music using industry-standard DAWs. Master mixing, mastering, synthesis, and sound design."
      courses={courses}
    />
  );
}
