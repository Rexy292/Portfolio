import { motion } from "framer-motion";
import QACard from "@/components/ui/qa-card";
import { fadeIn } from "@/lib/animations";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 section">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">#</span> Education Path
        </motion.h2>
        
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="bg-surface rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:w-1/2 mb-6 md:mb-0 md:pr-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="PCTI - Passaic County Technical Institute" 
                className="rounded-lg shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Upcoming Education</h3>
              
              <QACard
                question="What school would you like to attend after leaving JATS?"
                answer={
                  <>
                    <p>I plan to attend Passaic County Technical Institute (PCTI) after completing my education at JATS. They offer technical programs that combine theoretical knowledge with practical application through projects.</p>
                    <p className="mt-2">PCTI provides good computer laboratory facilities and emphasizes STEM education. It would be an appropriate environment for me to develop my computer science skills in preparation for a career in software engineering.</p>
                  </>
                }
                isDefaultOpen={true}
                className="bg-background/40"
              />
              
              <QACard
                question="What do you want to do after your education is complete?"
                answer="Following my education, I'm interested in establishing a technology company. I would like to develop applications or websites that address practical problems. The technology sector interests me, as does the autonomy of entrepreneurship. My goal is to create useful products that have a positive impact and serve real user needs."
                className="mt-4 bg-background/40"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
