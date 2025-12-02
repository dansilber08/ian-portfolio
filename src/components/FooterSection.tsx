import flor from "@/assets/flor.png";

const FooterSection = () => {
  return (
    <footer className="bg-dark-blue py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Redes */}
          <div>
            <h4 className="font-mono text-sm mb-4 border-b border-white/30 pb-2">Redes</h4>
            <ul className="font-mono text-xs space-y-1 text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-white cursor-pointer transition-colors">Linkedin</li>
              <li className="hover:text-white cursor-pointer transition-colors">Spotify</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-mono text-sm mb-4 border-b border-white/30 pb-2">Contacto</h4>
            <p className="font-mono text-xs text-white/80">+54 11 2186-6852</p>
            <h4 className="font-mono text-sm mt-4 mb-2">Mail</h4>
            <p className="font-mono text-xs text-white/80">ianezebaron@gmail.com</p>
          </div>

          {/* Flower illustration */}
          <div className="w-32 h-40 bg-white rounded-lg flex items-center justify-center p-2 overflow-hidden">
            <img src={flor} alt="Ilustración flor" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Large name */}
        <div className="mt-16">
          <h2 className="font-display text-5xl lg:text-7xl font-bold tracking-wider">
            IAN BARON.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
