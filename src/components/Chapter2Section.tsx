import recreacion1 from "@/assets/recreacion-1.png";
import recreacion2 from "@/assets/recreacion-2.png";
import recreacion3 from "@/assets/recreacion-3.png";

const Chapter2Section = () => {
  return (
    <section className="relative py-20 px-6">
      {/* Wavy line separator */}
      <svg
        className="w-full h-16 mb-12"
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
      >
        <path
          d="M0,25 Q150,0 300,25 T600,25 T900,25 T1200,25"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Images */}
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="w-32 h-44 rounded-2xl overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-transform">
            <img src={recreacion1} alt="Recreación disfraces" className="w-full h-full object-cover" />
          </div>
          <div className="w-32 h-44 rounded-2xl overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
            <img src={recreacion2} alt="Grupo en parque" className="w-full h-full object-cover" />
          </div>
          <div className="w-32 h-44 rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
            <img src={recreacion3} alt="Trabajo en proyecto" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Blue card */}
        <div 
          className="bg-blue-card p-6 max-w-sm relative"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)"
          }}
        >
          <h3 className="font-mono text-lg font-bold mb-2">Capítulo 2.</h3>
          <h4 className="font-mono text-lg font-bold mb-4">Recreación</h4>
          
          <p className="font-mono text-xs leading-relaxed">
            Actualmente soy líder
            en la institución
            SHOLEM.
          </p>
          <p className="font-mono text-xs leading-relaxed mt-2">
            Con un equipo de la
            institución realizamos
            actividades
            recreativas para
            niños, esto fomenta el
            trabajo en equipo, el
            desarrollo de la
            creatividad aplicada y
            el manejo de grupos
            sociales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chapter2Section;
