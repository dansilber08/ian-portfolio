import signature from "@/assets/signature.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Header Badge */}
      <div className="relative mb-16">
        {/* Starburst shape */}
        <div className="relative">
          <svg viewBox="0 0 200 150" className="w-64 h-48">
            {/* Outer glow spikes */}
            <polygon
              points="100,5 115,45 160,25 130,60 175,70 130,85 160,120 115,100 100,145 85,100 40,120 70,85 25,70 70,60 40,25 85,45"
              fill="none"
              stroke="#7FFF00"
              strokeWidth="3"
            />
            {/* Inner shape with pattern */}
            <polygon
              points="100,20 112,48 150,35 125,62 160,72 125,82 150,110 112,95 100,130 88,95 50,110 75,82 40,72 75,62 50,35 88,48"
              fill="hsl(var(--terracotta))"
              stroke="white"
              strokeWidth="2"
            />
            {/* Text */}
            <text
              x="100"
              y="70"
              textAnchor="middle"
              className="fill-white font-display font-bold text-lg"
              style={{ fontSize: "16px" }}
            >
              PORTFOLIO
            </text>
            <text
              x="100"
              y="90"
              textAnchor="middle"
              className="fill-white font-display font-bold text-lg"
              style={{ fontSize: "16px" }}
            >
              IAN
            </text>
          </svg>
        </div>
      </div>

      {/* Introduction */}
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-2xl mb-8">0.Introducción</h2>
        <p className="font-mono text-sm leading-relaxed mb-4">
          En este portafolio voy a hablar sobre mí.
        </p>
        <p className="font-mono text-sm leading-relaxed mb-8">
          Voy abordando los tópicos de manera segmentada con el uso de
          capítulos que a mí interpretación representan diversas
          cualidades que destaco de mi personalidad.
        </p>
        <p className="font-mono text-lg italic mb-12">Disfruten</p>

        {/* Signature */}
        <div className="flex justify-center">
          <img
            src={signature}
            alt="Firma de Ian"
            className="w-32 h-auto animate-float"
          />
        </div>
      </div>

      {/* Decorative curved line at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 Q150,20 300,60 T600,40 T900,70 T1200,30"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
