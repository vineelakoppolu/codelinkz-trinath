/** Decorative layers scoped to the home hero shell (extends under the fixed navbar). */
export default function HomeHeroBackground() {
  return (
    <div className="home-hero-background pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="home-hero-background__wash absolute inset-0" />

      <div className="home-hero-dots absolute" />
      <div className="home-hero-dark-glow absolute inset-0" aria-hidden />

      <svg
        className="home-hero-bottom-wave absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Opaque base so stacked wave layers don’t muddy dark mode */}
        <path
          className="home-hero-bottom-wave__base"
          d="M0,200 C180,120 320,240 520,170 C720,100 920,40 1200,90 C1320,115 1380,130 1440,145 L1440,280 L0,280 Z"
        />
        <path
          className="home-hero-bottom-wave__deep"
          d="M0,200 C180,120 320,240 520,170 C720,100 920,40 1200,90 C1320,115 1380,130 1440,145 L1440,280 L0,280 Z"
        />
        <path
          className="home-hero-bottom-wave__fill"
          d="M0,165 C220,95 380,210 580,150 C780,90 980,55 1240,85 C1340,98 1400,110 1440,118 L1440,280 L0,280 Z"
        />
        <path
          className="home-hero-bottom-wave__cyan"
          d="M0,190 C200,130 360,220 560,175 C760,130 960,75 1180,95 C1310,108 1385,118 1440,125 L1440,280 L0,280 Z"
          opacity="0.72"
        />
      </svg>
    </div>
  );
}
