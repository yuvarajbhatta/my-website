import { SectionHeader } from "@/components/ui/section-header";
import { WaveformVisual } from "@/components/three/waveform-visual";
import { creativeInterests } from "@/lib/data";

export function Creative() {
  return (
    <section id="creative" className="section-wrap creative-section">
      <SectionHeader
        eyebrow="Creative & Personal"
        title="Beyond the job title: music, performance, and Nepalese roots."
        copy="Engineering is the discipline. Music, dance, and cultural connection are where I stay expressive outside of it."
      />

      <div className="waveform-visual-frame reveal-up mt-8">
        <WaveformVisual />
      </div>

      <div className="creative-grid mt-8">
        {creativeInterests.map((item) => (
          <article key={item.title} className="creative-card reveal-up">
            <span className="creative-waveform" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
