import { motion } from "framer-motion";
import { Book, Tv } from "lucide-react";
import QACard from "@/components/ui/qa-card";
import { staggerContainer, fadeIn } from "@/lib/animations";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-16 section">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">#</span> About Me
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeIn("right", 0.1)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Book className="text-primary mr-3" />
              Literary Journey
            </h3>
            
            <QACard
              question="Have you ever read a book?"
              answer="I enjoy reading different types of books. One of the first books I read was 'Diary of a Wimpy Kid.' I found it funny and could relate to many situations in it. Reading this series got me interested in trying other books from different genres."
              isDefaultOpen={true}
            />
            
            <QACard
              question="Who inspires you and why?"
              answer="I consider Elon Musk to be an inspiring figure. He demonstrates significant knowledge in both technology and business domains. His entrepreneurship and current work on aerospace and electric vehicle projects are notable. His career trajectory illustrates the potential outcomes of perseverance and commitment. I aspire to pursue a comparable professional direction, applying technology to address meaningful challenges."
              className="mt-4"
            />
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.1)}
            className="bg-surface rounded-xl p-6 shadow-lg card"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Tv className="text-primary mr-3" />
              Entertainment & Education
            </h3>
            
            <QACard
              question="What's your favorite TV program?"
              answer="'Cobra Kai' is my favorite TV show. I appreciate the martial arts elements as well as the character development. It's interesting how they continued the story from the Karate Kid movies with the same characters years later. I look forward to each new season."
            />
            
            <QACard
              question="What is your favorite subject at school?"
              answer="Science is my favorite subject in school. I like learning about how things work and understanding the world around us. Science helps me understand the principles behind technology and how things function. I tend to be curious about how things work, so I find science to be an interesting and useful subject."
              className="mt-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
