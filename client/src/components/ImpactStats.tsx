import { motion } from "framer-motion";

interface StatItemProps {
  count: string;
  label: string;
}

function StatItem({ count, label }: StatItemProps) {
  return (
    <motion.div 
      className="text-center px-4 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{count}</div>
      <div className="text-base sm:text-lg text-primary-100">{label}</div>
    </motion.div>
  );
}

export function ImpactStats() {
  const stats = [
    { count: "1000+", label: "Children Educated" },
    { count: "50+", label: "Medical Camps" },
    { count: "12", label: "Education Centers" },
    { count: "200+", label: "Volunteers" }
  ];

  return (
    <section className="bg-primary text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
