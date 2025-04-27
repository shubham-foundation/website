import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <section id="home" className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
          alt="Children learning in a classroom" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Empowering Underprivileged Children Through Education & Healthcare
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
            The Shubham Tyagi Foundation is dedicated to creating equal opportunities for every child to thrive and reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => handleClick('donate')} 
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-[#F97316] hover:bg-[#EA580C] text-white text-base sm:text-lg"
            >
              Donate Now
            </Button>
            <Button 
              onClick={() => handleClick('initiatives')} 
              variant="outline" 
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-white hover:bg-gray-100 text-gray-800 text-base sm:text-lg"
            >
              Our Initiatives
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
