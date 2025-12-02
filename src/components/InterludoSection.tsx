import interludioBadge from "@/assets/interludio-badge.png";
import logoIddo from "@/assets/logo-iddo.png";
import logoArgeninja from "@/assets/logo-argeninja.png";
import logoTeachhouse from "@/assets/logo-teachhouse.png";

const InterludoSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side */}
          <div className="flex flex-col items-start gap-6">
            {/* Red badge image */}
            <img 
              src={interludioBadge} 
              alt="Interludio: Proyectos" 
              className="w-40 h-auto"
            />

            {/* Explanation box */}
            <div className="bg-card p-4 rounded-lg max-w-xs border border-border">
              <p className="font-mono text-xs leading-relaxed">
                Esta parte lo
                considero
                <span className="font-bold"> interludio </span>porque
                son trabajos que
                realicé en el
                colegio. Son
                proyectos en los
                cuales me
                involucré con su
                diseño y estetica
                de los mismo.
              </p>
            </div>
          </div>

          {/* Right side - Projects */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-6 mb-8">
              {/* IDDO */}
              <img src={logoIddo} alt="IDDO" className="w-24 h-auto" />

              {/* ArgenNinja */}
              <img src={logoArgeninja} alt="ArgenNinja" className="h-14 w-auto rounded-lg" />

              {/* TeachHouse */}
              <img src={logoTeachhouse} alt="TeachHouse" className="h-16 w-auto" />
            </div>

            {/* Project descriptions */}
            <div className="space-y-4 font-mono text-xs leading-relaxed">
              <p>
                <span className="font-bold text-green-400">TEACH HOUSE</span> - 3er año escolar: Diversos juegos realizados con la
                finalidad de que los niñxs aprendan y memoricen conceptos clave a
                la vez que se divierten. Enfocado en niñxs con movilidad reducida
                o estando hospitalizados
              </p>
              <p>
                <span className="font-bold text-cyan-400">ARGENINJA</span> - 4to año escolar: Juego aplicado a la realidad virtual
                inspirado en el famoso juego "Fruit Ninja"
              </p>
              <p>
                <span className="font-bold text-purple-400">IDDO</span> - 5to año escolar: Una App especializada en la educación y
                gestión financiera para chicxs de 10 a 13 años
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterludoSection;
