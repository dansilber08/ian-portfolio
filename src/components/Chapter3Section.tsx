import montana1 from "@/assets/montana-1.png";
import montana2 from "@/assets/montana-2.png";
import campfireCollage from "@/assets/campfire-collage.png";
import tent from "@/assets/tent.png";
import woodLog from "@/assets/wood-log.png";

const Chapter3Section = () => {
  return (
    <section className="relative py-20 px-6 bg-camping-green min-h-[700px]">
      {/* River/water shape at top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-blue-card" style={{
        clipPath: "polygon(0 0, 100% 0, 100% 40%, 85% 80%, 70% 50%, 55% 90%, 40% 60%, 25% 85%, 10% 50%, 0 70%)"
      }} />

      {/* Wood logs at top right */}
      <div className="absolute top-16 right-[20%] flex gap-2">
        <img src={woodLog} alt="Tronco" className="w-16 h-16 object-contain" />
        <img src={woodLog} alt="Tronco" className="w-14 h-14 object-contain -mt-2" />
        <img src={woodLog} alt="Tronco" className="w-12 h-12 object-contain mt-1" />
      </div>

      <div className="max-w-6xl mx-auto pt-16 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left text */}
          <div className="max-w-xs lg:mt-12">
            <p className="font-mono text-sm leading-relaxed text-white">
              Me considero un acampante
              experimentado. en
              repetidas ocasiones
              realicé, en grupalidad,
              viajes de campamento con
              fines recreativos y de
              supervivencia.
            </p>
          </div>

          {/* Center content */}
          <div className="text-center flex flex-col items-center">
            {/* Tent icon */}
            <img src={tent} alt="Carpa" className="w-28 h-24 object-contain mb-4" />

            <h3 className="font-mono text-xl font-bold text-white">Capítulo 3.</h3>
            <h4 className="font-mono text-xl font-bold text-white mb-6">Un Gran Acampante</h4>

            <p className="font-mono text-sm leading-relaxed text-white max-w-md">
              Estos transcursos me formaron
              como un experimentado en la
              naturaleza y en la
              supervivencia, adquiriendo
              todos los conocimientos básicos
              e importantes de como manejarse
              en espacios Outdoor.
            </p>

            {/* Campfire collage below text */}
            <img 
              src={campfireCollage} 
              alt="Fogata de campamento" 
              className="w-48 h-48 object-contain mt-8"
            />
          </div>

          {/* Right - images with white frames */}
          <div className="flex flex-col gap-6 lg:mt-8">
            <div className="bg-white p-2 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
              <img src={montana1} alt="Montaña Fitz Roy" className="w-40 h-28 object-cover" />
            </div>
            <div className="bg-white p-2 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform ml-4">
              <img src={montana2} alt="Montañas estilizadas" className="w-44 h-28 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter3Section;
