import { motion } from "framer-motion";
import { Leaf, Snowflake, Timer, Heartbeat } from "@phosphor-icons/react";

const benefits = [
  {
    id: 1,
    title: "100% Natural",
    desc: "Sem conservantes. Sem corantes. Apenas comida de verdade preparada por chefs.",
    icon: <Leaf weight="duotone" className="w-8 h-8 text-nutribox-red" />,
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 2,
    title: "Congelamento Flash",
    desc: "Nossa tecnologia de ultracongelamento mantém os nutrientes e o sabor de prato feito na hora.",
    icon: <Snowflake weight="duotone" className="w-8 h-8 text-[#0ea5e9]" />,
    className: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    id: 3,
    title: "Pronto em 5 Min",
    desc: "Do freezer ao prato em 5 minutos. Sua rotina mais prática e saudável.",
    icon: <Timer weight="duotone" className="w-8 h-8 text-nutribox-gold" />,
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Macros Perfeitos",
    desc: "Porções pesadas na grama, com as quantidades ideais de proteína para o seu objetivo.",
    icon: <Heartbeat weight="duotone" className="w-8 h-8 text-emerald-500" />,
    className: "col-span-1 md:col-span-1 row-span-1",
  }
];

export default function BentoBenefits() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative z-10" id="benefits">
      <div className="container mx-auto max-w-[1400px]">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none text-nutribox-dark mb-6">
              A revolução da <br />marmita fitness.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Esqueça tudo que você sabe sobre comida congelada. Desenvolvemos o sistema perfeito para entregar sabor premium e praticidade.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className={`bg-[#f9fafb] rounded-[2.5rem] p-10 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.02)] flex flex-col justify-between group overflow-hidden relative ${item.className}`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 z-10">
                {item.icon}
              </div>
              <div className="z-10">
                <h3 className="text-2xl font-bold text-nutribox-dark mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              
              {/* Perpetual background subtle animation for Bento 2.0 feel */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-transparent to-nutribox-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
