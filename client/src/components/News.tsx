import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface NewsItemProps {
  image: string;
  date: string;
  title: string;
  content: string;
  index: number;
}

function NewsItem({ image, date, title, content, index }: NewsItemProps) {
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <CardContent className="p-6 flex flex-col flex-grow">
          <span className="text-xs text-gray-500">{formatDate(date)}</span>
          <h3 className="font-bold text-xl mt-2 mb-3">{title}</h3>
          <p className="text-gray-700 mb-4 flex-grow">
            {content}
          </p>
          <a href="#" className="text-primary font-medium flex items-center group">
            Read More
            <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function News() {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      date: "2023-06-15",
      title: "New Education Center Opens in South Delhi",
      content: "We're excited to announce the opening of our newest education center in South Delhi, which will serve over 100 children from underprivileged communities."
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      date: "2023-05-30",
      title: "Annual Health Camp Serves 500+ Children",
      content: "Our largest health camp of the year provided free check-ups, vaccinations, and medical care to over 500 children across three communities in Gurgaon."
    },
    {
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      date: "2023-04-22",
      title: "New Corporate Partnership to Boost Digital Literacy",
      content: "We're partnering with Tech Solutions Inc. to expand our digital literacy program, providing computers and training to 200 more children this year."
    }
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">News & Stories</h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsItem 
              key={index}
              image={item.image}
              date={item.date}
              title={item.title}
              content={item.content}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
