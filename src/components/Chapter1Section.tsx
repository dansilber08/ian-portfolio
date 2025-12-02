import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import beachSpirals from "@/assets/beach-spirals.png";
import towerMuseum from "@/assets/tower-museum.png";
import selfie from "@/assets/selfie.png";

const Chapter1Section = () => {
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("chapter1");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const chapterTitle = "Capítulo 1.\nSobre Mi, Futuro\ncreativo";

  return (
    <section id="chapter1" className="relative py-20 px-6">
      {/* Decorative line */}
      <svg
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        viewBox="0 0 200 600"
        preserveAspectRatio="none"
      >
        <path
          d="M200,0 Q100,100 180,200 T100,400 T200,600"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-6xl mx-auto">
        {/* Yellow/Green Card */}
        <div className="relative max-w-lg mb-12" style={{ transform: "rotate(-2deg)" }}>
          {/* Yellow part */}
          <div className="bg-yellow-card p-6 rounded-tl-lg">
            <div className="font-mono text-black text-sm">
              {isVisible ? (
                <TypewriterText
                  text={chapterTitle}
                  delay={80}
                  className="whitespace-pre-line font-bold"
                  onComplete={() => setShowContent(true)}
                />
              ) : (
                <span className="opacity-0">{chapterTitle}</span>
              )}
            </div>
            
            <div className={`mt-4 transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
              <p className="font-mono text-black text-xs leading-relaxed">
                Soy una persona activa con las
                distintas gamas de diseño que
                existen, me gusta mucho el arte y
                futuramente pienso estudiar Diseño
                Industrial en la Facultad de
                Arquitectura, Diseño y Urbanismo
                (FADU).
              </p>
            </div>
          </div>
          
          {/* Green part */}
          <div className="bg-green-card p-6 rounded-br-lg ml-12 -mt-2">
            <div className={`transition-opacity duration-500 delay-300 ${showContent ? "opacity-100" : "opacity-0"}`}>
              <p className="font-mono text-white text-xs leading-relaxed text-right">
                Me considero diletante ya que
                frecuentemente visito museos con el
                fin de aprender de culturas y de
                artistas. A su vez disfruto de sacar
                fotos y luego intervenirlas como
                parte de un proceso creativo que
                realizo muy gustosamente.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Images */}
        <div className={`flex flex-wrap justify-center gap-4 mt-12 transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-left text-xs font-mono text-muted-foreground mr-4">
            <p>Imagenes</p>
            <p>publicadas en</p>
            <p>Instagram</p>
            <p className="font-bold text-foreground">@iann_baronn</p>
          </div>
          
          <div className="w-40 h-56 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
            <img src={beachSpirals} alt="Arte playa" className="w-full h-full object-cover" />
          </div>
          
          <div className="w-40 h-56 rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
            <img src={towerMuseum} alt="Museo torre" className="w-full h-full object-cover" />
          </div>
          
          <div className="w-40 h-56 rounded-2xl overflow-hidden shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
            <img src={selfie} alt="Selfie Ian" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter1Section;
