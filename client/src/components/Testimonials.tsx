import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  content: string;
  stars: number;
}

function Testimonial({ image, name, role, content, stars }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <img className="h-12 w-12 rounded-full object-cover mr-4" src={image} alt={`${name}'s portrait`} />
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-gray-600 text-sm">{role}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            {content}
          </p>
          <div className="flex text-[#F97316]">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-5 w-5" 
                fill={i < stars ? "currentColor" : "none"} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      name: "Riya, 14",
      role: "Student at STF Education Center",
      content: "\"The foundation gave me an opportunity to continue my education when my family couldn't afford it. Today, I'm one of the top students in my class and dream of becoming a doctor to help others.\"",
      stars: 5
    },
    {
      image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      name: "Rahul, 12",
      role: "Healthcare Program Beneficiary",
      content: "\"I had chronic health issues that affected my ability to attend school. The foundation's healthcare program provided the treatment I needed, and now I'm healthy and back in school.\"",
      stars: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Impact Stories</h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                stars={testimonial.stars}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
