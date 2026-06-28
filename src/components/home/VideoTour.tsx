import { VideoModal } from "@/components/common/VideoModal";
import { SectionHeader } from "@/components/common/SectionHeader";

export function VideoTour() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="Video Tour"
          title="Let Buyers Feel the Property Before Visiting"
        />
        <div className="mt-10">
          <VideoModal
            image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
            title="Dream Habitat Luxury Video Tour"
          />
        </div>
      </div>
    </section>
  );
}
