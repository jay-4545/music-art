import ServicePageLayout from "@/components/ServicePageLayout";
import courseData from "@/data/music_courses.json";

const relevantIds = [2, 4, 7];

export default function SongWritingPage() {
  const courses = courseData.services.filter((s) =>
    relevantIds.includes(s.id)
  );

  return (
    <ServicePageLayout
      title="Song Writing"
      subtitle="Craft compelling songs from scratch. Learn lyric writing, melody creation, song structure, and how to express your unique artistic voice."
      courses={courses}
    />
  );
}
