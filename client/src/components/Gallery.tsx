import { motion } from "framer-motion";

interface GalleryItemProps {
  image: string;
  caption: string;
  index: number;
}

function GalleryItem({ image, caption, index }: GalleryItemProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img 
        src={image}
        alt={caption}
        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <p className="text-white text-center px-4 font-medium">{caption}</p>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1588075592446-265bad1d861c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Education center at Gurgaon"
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Health camp in New Delhi"
    },
    {
      image: "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Activity day at our center"
    },
    {
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Digital literacy program"
    },
    {
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Nutrition program in action"
    },
    {
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Art therapy session"
    },
    {
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "School supplies distribution"
    },
    {
      image: "https://images.unsplash.com/photo-1564429097439-ebd0080e6d61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      caption: "Community outreach event"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Foundation Gallery</h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto"></div>
          <p className="mt-6 text-gray-700">
            A glimpse into our work and the joy it brings to children's lives. These moments capture the essence of our mission.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryItem 
              key={index}
              image={image.image}
              caption={image.caption}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
