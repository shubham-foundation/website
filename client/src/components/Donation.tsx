import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  
  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
  };
  
  const donationPoints = [
    "Provide education for 1 child for a year: ₹15,000",
    "Fund a medical camp for 100 children: ₹25,000",
    "Sponsor meals for 50 children for a month: ₹10,000"
  ];
  
  const donationAmounts = ["₹500", "₹1,000", "₹2,500", "₹5,000", "₹10,000", "Custom"];
  
  return (
    <section id="donate" className="py-16 md:py-24 bg-primary-700 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24" fill="white">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="md:flex">
            <div className="md:flex-1 bg-primary p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
              <p className="mb-6">
                Your generous donation will directly impact the lives of underprivileged children, providing them with education, healthcare, and a chance for a brighter future.
              </p>
              <div className="space-y-4">
                {donationPoints.map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-primary-200" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex-1 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Donate Now</h3>
              <p className="text-gray-600 mb-6">
                Your donation is tax-deductible. Choose the amount you wish to contribute:
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount, index) => (
                  <Button
                    key={index}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={`border-2 ${
                      selectedAmount === amount 
                        ? "bg-primary border-primary text-white" 
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                    } font-medium py-2`}
                    onClick={() => handleAmountClick(amount)}
                  >
                    {amount}
                  </Button>
                ))}
              </div>
              
              <Button 
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-5 px-4 mb-4"
                // Link to donation gateway will be added here
              >
                Donate Securely
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                All transactions are secure and encrypted. You will receive a receipt via email.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
