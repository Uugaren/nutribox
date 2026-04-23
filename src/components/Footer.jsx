import { InstagramLogo} from "@phosphor-icons/react";
import MagneticButton from "./MagneticButton";
import logo from "../../images/logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-nutribox-dark text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 flex flex-col items-start">
            <img src={logo} alt="Nutribox Logo" className="w-32 mb-6 rounded-lg shadow-lg bg-white p-2" />
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Elevando o padrão da marmita fitness. Saudável, prática e incrivelmente saborosa.
            </p>
            <div className="flex items-center gap-4">
              <MagneticButton as="a" href="https://www.instagram.com/nutriboxfit_/" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                <InstagramLogo className="w-6 h-6" />
              </MagneticButton>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-bold mb-6">Menu</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Cardápio</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Grande Vitória, ES</li>
              <li>(27)99641-5109</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Nutribox. Todos os direitos reservados. <span className="hidden md:inline">|</span><br className="md:hidden" /> Criado por <a href="mailto:arthur.devrocha@gmail.com" className="hover:text-white transition-colors underline decoration-white/30">arthur.devrocha@gmail.com</a>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
