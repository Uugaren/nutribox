import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Leaf, Fire } from "@phosphor-icons/react";
import logo from "../../images/logo-removebg-preview.png";
import parmegianaImg from "../../images/parmegiana.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#f9fafb]">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center z-10 py-24 md:py-0">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, staggerChildren: 0.1 }}
          className="flex flex-col items-start text-left max-w-2xl pt-12 md:pt-0"
        >
          {/* Logo inline */}
          <motion.img 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            src={logo} 
            alt="Nutribox Logo Real" 
            className="w-32 md:w-40 mix-blend-multiply mb-10"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nutribox-red/20 bg-nutribox-red/5 text-nutribox-red text-sm font-medium mb-8"
          >
            <Leaf weight="fill" />
            <span>Ingredientes 100% Naturais</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-nutribox-dark mb-8"
          >
            Nutrição <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nutribox-red to-[#FF4B52]">Sem Esforço.</span>
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[50ch] mb-12">
            Marmitas fitness premium com sabor de restaurante. Congelamento flash para manter 100% dos nutrientes. Entregas em toda a Grande Vitória.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center gap-6">
            <MagneticButton 
              as="a"
              href="https://app.cardapioweb.com/nutribox"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-nutribox-dark text-white rounded-full font-medium tracking-tight overflow-hidden group w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Fazer Pedido <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-nutribox-red translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </MagneticButton>
            
            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-3">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://picsum.photos/seed/user2/100/100" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://picsum.photos/seed/user3/100/100" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <p>+5.000 clientes<br/>satisfeitos</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content / Asymmetric Image */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          className="relative w-full h-[60vh] md:h-[80vh] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(228,30,38,0.15)] group"
        >
          {/* Subtle Parallax on Hover */}
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={parmegianaImg}
            alt="Parmegiana Nutribox" 
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
          
          {/* Liquid Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-white/80 text-sm font-medium mb-1">Destaque do Chef</p>
              <h3 className="text-white font-bold text-xl">Parmegiana Nutribox</h3>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md">
              <Fire weight="fill" className="text-nutribox-gold" />
              <span className="text-sm font-bold">350 kcal</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
