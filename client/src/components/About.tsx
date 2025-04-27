import { motion } from "framer-motion";
import { BookOpen, Heart, Users, Shield } from "lucide-react";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

function TeamMember({ image, name, role, bio }: TeamMemberProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={`${name} - ${role}`} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
}

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start">
      <div className="bg-primary-100 p-2 rounded-full mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function About() {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Education Programs",
      description: "Quality learning for every child"
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "Healthcare Initiatives",
      description: "Medical care and nutrition"
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Community Engagement",
      description: "Involving local communities"
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Child Protection",
      description: "Ensuring safety and rights"
    }
  ];

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      name: "Shubham Tyagi",
      role: "Founder & President",
      bio: "With over 15 years of experience in social work, Shubham established the foundation with a vision to transform children's lives through education."
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      name: "Priya Sharma",
      role: "Education Director",
      bio: "A former teacher with a masters in education, Priya oversees all our educational programs and curriculum development."
    },
    {
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      name: "Dr. Rajesh Kumar",
      role: "Healthcare Director",
      bio: "With expertise in pediatric healthcare, Dr. Kumar leads our medical initiatives and community health programs."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
              alt="Foundation team working with children" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-6">
              The Shubham Tyagi Foundation was established in 2015 with a mission to create lasting change in the lives of underprivileged children across India. We believe that every child deserves access to quality education and healthcare, regardless of their socioeconomic background.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-6">
              We work holistically to address the interconnected challenges that vulnerable children face. By focusing on both education and healthcare, we provide the fundamental building blocks necessary for children to grow, learn, and thrive.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <Feature 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <button 
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary font-medium flex items-center group"
            >
              Meet Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <div id="team" className="mt-24">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet The Team</h2>
            <div className="w-20 h-1 bg-[#F97316] mx-auto"></div>
            <p className="mt-6 text-gray-700">
              Our passionate team brings diverse expertise to drive our mission forward. Together, we work to create a better future for underprivileged children.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
