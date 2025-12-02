import montana1 from "@/assets/montana-1.png";
import montana2 from "@/assets/montana-2.png";
import campfireCollage from "@/assets/campfire-collage.png";
import tent from "@/assets/tent.png";
import woodLog from "@/assets/wood-log.png";

const Chapter3Section = () => {
  return (
    <section className="relative bg-[#111111] py-24 overflow-hidden">

      {/* Cinta azul superior inclinada */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-[#133b63] origin-top -skew-y-3"
      />

      {/* ISLA VERDE PRINCIPAL */}
      <div className="relative max-w-6xl mx-auto px-8 mt-10">
        <div className="relative bg-[#296a3b] rounded-[70px] px-10 py-16 shadow-xl overflow-visible">

          {/* Curva inferior verde */}
          <div className="absolute -bottom-24 left-0 w-full h-40 bg-[#245c34] rounded-[100%]" />

          {/* TRONCOS ARRIBA A LA DERECHA */}
          <div className="absolute -top-10 right-14 flex gap-3 pointer-events-none">
            <img src={woodLog} className="w-16 h-16 object-contain" />
            <img src={woodLog} className="w-14 h-14 object-contain mt-2" />
            <img src={woodLog} className="w-12 h-12 object-contain -mt-2" />
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="relative grid lg:grid-cols-[1fr,1fr,1fr] gap-10 items-start">

            {/* Texto izquierda */}
            <div className="max-w-xs text-white font-mono leading-relaxed lg:mt-10">
              Me considero un acampante experimentado. En repetidas ocasiones
              realicé, en grupalidad, viajes de campamento con fines recreativos
              y de supervivencia.
            </div>

            {/* Centro: título */}
            <div className="text-center flex flex-col items-center text-white">
              <img src={tent} className="w-28 h-28 object-contain mb-4" />

              <h3 className="text-xl font-bold font-mono tracking-wide">
                Capítulo 3.
              </h3>

              <h4 className="text-xl font-bold font-mono mb-6">
                Un Gran Acampante
              </h4>

              <p className="font-mono text-sm max-w-md leading-relaxed">
                Estos transcursos me formaron como un experimentado en la
                naturaleza y en la supervivencia, adquiriendo todos los
                conocimientos básicos e importantes de cómo manejarse en
                espacios Outdoor.
              </p>

              {/* Fogata centrada */}
              <img
                src={campfireCollage}
                className="w-48 h-48 object-contain mt-10"
              />
            </div>

            {/* Derecha — fotos estilo collage */}
            <div className="flex flex-col gap-6 lg:mt-10">
              <div className="bg-white p-2 shadow-xl rotate-3 hover:rotate-0 transition-transform">
                <img src={montana1} className="w-44 h-32 object-cover" />
              </div>

              <div className="bg-white p-2 shadow-xl -rotate-3 hover:rotate-0 transition-transform ml-4">
                <img src={montana2} className="w-48 h-32 object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter3Section;
