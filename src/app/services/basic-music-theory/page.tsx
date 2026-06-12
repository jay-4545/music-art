import ServicePageLayout from "@/components/ServicePageLayout";
import courseData from "@/data/music_courses.json";

const relevantIds = [1, 6, 9];

export default function BasicMusicTheoryPage() {
  const courses = courseData.services.filter((s) =>
    relevantIds.includes(s.id)
  );

  return (
    <ServicePageLayout
      title="Basic Music Theory"
      subtitle="Build a strong foundation in music theory. Understand scales, chords, rhythm, and harmony — the building blocks every musician needs."
      courses={courses}
    />
  );
}
