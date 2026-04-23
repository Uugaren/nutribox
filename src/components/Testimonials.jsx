import { motion } from "framer-motion";
import { Star, Medal } from "@phosphor-icons/react";
import esquivaImg from "../../images/esquiva-falcao.png";

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Crossfit",
    text: "A Parmegiana da Nutribox salvou minha dieta. Sabor absurdo e os macros batem certinho com o que minha nutri passou.",
    avatar: "https://picsum.photos/seed/user4/150/150",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Empresário",
    text: "Praticidade é tudo pra mim. Chego em casa, coloco no microondas e em 5 minutos tenho uma refeição nível de restaurante.",
    avatar: "https://picsum.photos/seed/user5/150/150",
  },
  {
    id: 3,
    name: "Luiza Costa",
    role: "Corredora",
    text: "O purê de abóbora com carne desfiada é de outro mundo. Qualidade dos ingredientes é notável logo na primeira mordida.",
    avatar: "https://picsum.photos/seed/user6/150/150",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-[#f9fafb] relative">
      <div className="container mx-auto max-w-[1400px]">
        
        {/* Esquiva Falcão Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 bg-nutribox-dark rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative shadow-2xl"
        >
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-nutribox-gold/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-nutribox-red to-nutribox-gold p-1">
                  <div className="w-full h-full bg-black rounded-full overflow-hidden border-4 border-nutribox-dark">
                    <img src={esquivaImg} alt="Esquiva Falcão" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-nutribox-dark p-3 rounded-full shadow-xl">
                  <Medal weight="fill" className="w-8 h-8 text-nutribox-gold" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-nutribox-gold text-sm font-bold tracking-widest uppercase mb-6">
                Parceria Oficial
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                A Escolha dos <span className="text-nutribox-red">Campeões.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-light italic">
                "A Nutribox é fundamental na minha preparação. A qualidade dos ingredientes e a precisão das porções me garantem a energia necessária para lutar em nível mundial."
              </p>
              <h4 className="mt-6 text-white font-bold text-lg">Esquiva Falcão</h4>
              <p className="text-sm text-gray-400">Medalhista Olímpico de Boxe</p>
            </div>
          </div>
        </motion.div>

        {/* Regular Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-nutribox-dark mb-4">
            Quem prova, não troca.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mais de 5.000 clientes na Grande Vitória já transformaram sua rotina alimentar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] border border-slate-200 bg-white relative group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 text-nutribox-gold mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} weight="fill" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="font-bold text-nutribox-dark">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
