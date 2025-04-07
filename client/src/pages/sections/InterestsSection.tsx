import { motion } from "framer-motion";
import { Utensils, Laptop, Car } from "lucide-react";
import QACard from "@/components/ui/qa-card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const InterestsSection = () => {
  return (
    <section id="interests" className="py-16 bg-background/50 section">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">#</span> My Interests
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Food Preferences */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <div className="text-4xl text-primary mb-4">
              <Utensils />
            </div>
            <h3 className="text-xl font-bold mb-3">Food Preferences</h3>
            
            <QACard
              question="What foods do you like and dislike?"
              answer="I prefer pizza as my favorite food. I like the combination of the crust, cheese, and various toppings. I don't care for corn because I find it too sweet for my taste. In general, I prefer foods with a mix of different flavors rather than primarily sweet foods."
            />
            
            <QACard
              question="Do you have a favorite restaurant or fast food?"
              answer="For fast food, I prefer chicken sandwiches. I like the crispy exterior and the tender chicken inside. I enjoy trying various versions with different toppings. They're widely available at most fast food restaurants and provide a satisfying meal."
              className="mt-2"
            />
          </motion.div>
          
          {/* Skills & Talents */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <div className="text-4xl text-primary mb-4">
              <Laptop />
            </div>
            <h3 className="text-xl font-bold mb-3">Skills & Talents</h3>
            
            <QACard
              question="Do you have any special talents or things you like to do?"
              answer={
                <>
                  <p className="mb-3">I enjoy web development. I find it satisfying to transform ideas into functional websites. I appreciate the combination of problem-solving and design that goes into building websites.</p>
                  <p>There's a sense of accomplishment when completing a website project and seeing all the components working together. I try to continually learn new programming techniques to improve my web development skills.</p>
                </>
              }
            />
            
            {/* Interactive skills showcase */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background/40 rounded-lg p-2 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
                <p className="text-xs mt-1">HTML5</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background/40 rounded-lg p-2 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
                </svg>
                <p className="text-xs mt-1">CSS3</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background/40 rounded-lg p-2 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
                <p className="text-xs mt-1">JavaScript</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Lifestyle Preferences */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <div className="text-4xl text-primary mb-4">
              <Car />
            </div>
            <h3 className="text-xl font-bold mb-3">Lifestyle Preferences</h3>
            
            <QACard
              question="What is your favorite car?"
              answer={
                <>
                  <p>I would choose a McLaren as my ideal car. I appreciate their design and performance capabilities. I've watched videos of their racing performance and found them impressive.</p>
                  <p className="mt-2">Beyond transportation, I see it as an example of engineering excellence. Seeing well-designed vehicles like McLarens increases my interest in automotive technology and engineering principles.</p>
                </>
              }
            />
            
            <QACard
              question="What would your house look like?"
              answer="I would prefer a modern house with large windows for natural light. I like open floor plans where spaces connect without many walls dividing them. I would incorporate smart home technology such as automated lighting and appliances. For the interior design, I would choose a neutral color scheme with some accent colors. Including solar panels would be practical for energy efficiency."
              className="mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
