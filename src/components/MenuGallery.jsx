import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Plus } from "@phosphor-icons/react";

const menuData = {
  "Low Carb": [
    "Carne Moída com Mix de Legumes", "Carne Moída com Purê de Abóbora", "Carne Moída com Purê de Batata",
    "Escondidinho de Carne Moída", "Escondidinho de Frango", "Frango em Cubos com Mix de Legumes",
    "Frango em Cubos com Purê de Abóbora", "Frango em Cubos com Purê de Batata", "Panqueca de Carne Moída", "Panqueca de Frango"
  ],
  "Comida Caseira": [
    "Bife Acebolado, Arroz Branco e Feijão em Caldo", "Carne de Panela, Arroz Branco, Feijão e Legumes",
    "Frango Desfiado com Arroz a Grega", "Frango Grelhado, Arroz Branco, Feijão e Legumes",
    "Macarrão com Molho a Bolonhesa", "Macarrão com Molho Branco e Frango Desfiado",
    "Strogonoff de Carne com Palmito e Arroz Branco", "Strogonoff de Frango com Palmito e Arroz Branco",
    "Omelete de Frango, Arroz Branco e Feijão"
  ],
  "Foco Total": [
    "Frango Desfiado, Banana da Terra Frita e Arroz Branco", "Frango em Cubos com Batata Doce Assada e Brócolis",
    "Frango em Cubos com Purê de Batata Doce", "Tilápia Grelhada com Mix de Legumes",
    "Tilápia Grelhada com Purê de Batata Doce", "Tiras de Carne com Batata Doce Assada e Legumes ao Vapor",
    "Tiras de Carne com Purê de Batata Doce e Brócolis"
  ],
  "Especial": [
    "Parmegiana de Frango com Arroz Branco", "Parmegiana de File-Mignon com Arroz Branco",
    "Salmão Empanado com Banana da Terra Cozida e Arroz Branco", "Salmão Grelhado com Arroz Branco e Legumes",
    "Strogonoff de File-Mignon com Palmito e Arroz Branco"
  ],
  "Vegetariano": [
    "Strogonoff de Grão de Bico com Palmito e Arroz Integral", "Escondidinho de Batata Doce com Lentilha",
    "Lasanha de Berinjela com Creme de Espinafre e Cenoura", "Arroz, Feijão, Lentilha Refogada e Brócolis",
    "Panqueca Integral de Lentilha Refogada", "Arroz, Feijão e Ratatouille",
    "Arroz Branco, Feijão, Purê de Abóbora e Legumes Assados", "Arroz Integral, Banana da Terra Cozida e Lentilha"
  ]
};

export default function MenuGallery() {
  const [activeCategory, setActiveCategory] = useState("Low Carb");
  const categories = Object.keys(menuData);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-white overflow-hidden relative" id="menu">
      <div className="container mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
              O Cardápio Completo.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              39 opções pensadas para diferentes rotinas, gostos e objetivos. 
              Kits semanais ou marmitas únicas feitas na medida certa.
            </p>
          </motion.div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white/5 p-2 rounded-3xl md:rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-nutribox-red text-white shadow-lg" 
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
                {cat === "Especial" && <span className="ml-2 text-xs opacity-70">(+R$8)</span>}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {menuData[activeCategory].map((item, i) => (
              <motion.div
                key={item}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-white/5 border border-white/10 rounded-[1.5rem] p-6 hover:bg-white/10 transition-colors flex flex-col justify-between min-h-[180px]"
              >
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-nutribox-red transition-colors">
                  {item}
                </h3>
                
                <div className="flex justify-start items-center mt-auto pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{activeCategory}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <MagneticButton 
            as="a"
            href="https://app.cardapioweb.com/nutribox"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-nutribox-red text-white rounded-full font-bold tracking-tight shadow-[0_10px_40px_-10px_rgba(228,30,38,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(228,30,38,0.8)] transition-all"
          >
            Fazer Pedido no Cardápio Web
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
