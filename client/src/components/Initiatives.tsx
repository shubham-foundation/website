import { motion } from "framer-motion";
import { BookOpen, Heart, Monitor, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

interface InitiativeProps {
  image: string;
  icon: JSX.Element;
  title: string;
  description: string;
  tags: string[];
}

function Initiative({ image, icon, title, description, tags }: InitiativeProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:shrink-0">
          <img 
            className="h-48 w-full sm:h-full sm:w-48 object-cover" 
            src={image} 
            alt={title} 
            loading="lazy" 
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center mb-2">
            <div className="bg-primary-100 p-2 rounded-full mr-3">
              {icon}
            </div>
            <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
          </div>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Initiatives() {
  const initiatives = [
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Education Centers",
      description: "Our education centers provide quality learning to children who cannot access formal schooling. With trained teachers and interactive methods, we offer comprehensive education covering core subjects.",
      tags: ["12 Centers", "Delhi NCR", "Ages 5-14"]
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "Medical Camps",
      description: "Our regular medical camps bring essential healthcare services to underserved communities. We provide check-ups, vaccinations, nutrition counseling, and treatment for common ailments.",
      tags: ["50+ Camps", "Monthly Schedule", "Free Services"]
    },
    {
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      icon: <Monitor className="h-5 w-5 text-primary" />,
      title: "Digital Literacy",
      description: "Our computer training programs equip children with essential digital skills for the modern world. Classes cover basic computer operations, internet use, and fundamental software applications.",
      tags: ["8 Labs", "Weekly Classes", "Ages 10+"]
    },
    {
      image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      icon: <ShoppingBag className="h-5 w-5 text-primary" />,
      title: "Nutrition Program",
      description: "Our nutrition initiative provides balanced meals to undernourished children. We combine meal distribution with education on nutrition and hygiene to promote long-term health habits.",
      tags: ["Daily Meals", "500+ Children", "Health Monitoring"]
    }
  ];

  return (
    <section id="initiatives" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">Our Initiatives</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#F97316] mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base">
            We implement targeted programs to address the educational and healthcare needs of underprivileged children, creating lasting impact in their lives.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {initiatives.map((initiative, index) => (
            <Initiative 
              key={index}
              image={initiative.image}
              icon={initiative.icon}
              title={initiative.title}
              description={initiative.description}
              tags={initiative.tags}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
          >
            Get Involved With Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
