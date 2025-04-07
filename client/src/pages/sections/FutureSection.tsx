import { motion } from "framer-motion";
import { Briefcase, Home } from "lucide-react";
import QACard from "@/components/ui/qa-card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const FutureSection = () => {
  return (
    <section id="future" className="py-16 bg-background/50 section">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">#</span> Future Aspirations
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Career & Financial Goals */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="text-primary mr-3" />
              Career & Financial Goals
            </h3>
            
            <div className="space-y-6">
              <QACard
                question="What would you like to become once you complete your schooling?"
                answer="I aspire to become a software engineer after completing my education. I'm interested in developing applications and computer programs. Problem-solving is an aspect of software engineering that appeals to me. I want to create technology solutions that address user needs and improve efficiency. The continuous learning required in this field is something I find appealing about this career path."
                className="bg-background/30"
              />
              
              <QACard
                question="How much money would you need as an adult?"
                answer="As an adult, I estimate needing approximately $75,000 annually for a comfortable lifestyle. This amount would cover necessary expenses such as housing, food, transportation, and other essential costs. I would allocate a portion of this income for savings, including emergency funds and retirement planning. This income level would provide financial stability without excessive financial stress."
                className="bg-background/30"
              />
              
              <QACard
                question="If you won several million dollars, what would you spend it on?"
                answer="If I received several million dollars, I would approach it with a financial strategy. I would invest a significant portion in diversified market instruments to generate long-term growth. I would purchase a primary residence and possibly investment properties to create passive income streams. I would allocate funds to establish a technology company, which could potentially yield additional returns. My approach would prioritize sustainable wealth management rather than consumption."
                className="bg-background/30"
              />
            </div>
          </motion.div>
          
          {/* Personal Life & Family */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Home className="text-primary mr-3" />
              Personal Life & Family
            </h3>
            
            <div className="space-y-6">
              <QACard
                question="Would you like to adopt or have your own children?"
                answer="I would prefer having biological children. I'm interested in seeing genetic resemblance and personality traits passed through generations. However, I recognize adoption as a valuable option that provides children with supportive homes. While I have a personal preference for biological children, I respect the choice others make to adopt and understand its societal importance."
                className="bg-background/30"
              />
              
              <QACard
                question="Name 3 things that you need if you had your own house"
                answer={
                  <>
                    <p>For my own residence, these three elements would be essential:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><span className="font-medium">Reliable utilities</span> - Consistent electricity and water service are fundamental for comfortable living conditions.</li>
                      <li><span className="font-medium">High-speed internet</span> - As someone interested in software engineering, robust internet connectivity is necessary for both professional development and maintaining social connections.</li>
                      <li><span className="font-medium">Well-equipped kitchen</span> - A kitchen with quality appliances and storage for nutritious food would support healthy eating habits and reduce the need for dining out.</li>
                    </ul>
                  </>
                }
                className="bg-background/30"
              />
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-white">My Dream Home</h4>
                <div className="bg-background/30 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-3">
                    <motion.span
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(139, 92, 246, 0.2)" }}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      Modern Architecture
                    </motion.span>
                    
                    <motion.span
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)" }}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                    >
                      Smart Home Tech
                    </motion.span>
                    
                    <motion.span
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)" }}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                    >
                      Energy Efficient
                    </motion.span>
                    
                    <motion.span
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(139, 92, 246, 0.2)" }}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      Home Office
                    </motion.span>
                    
                    <motion.span
                      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)" }}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                    >
                      Open Concept
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
