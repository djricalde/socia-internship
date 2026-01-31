/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="about"
      className="min-h-screen py-20 px-8 transition-colors
                 bg-[hsl(220_25%_98%)] text-[hsl(222_25%_10%)]
                 dark:bg-[hsl(225_20%_7%)] dark:text-white"
    >
      <motion.div 
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div>
           
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          > 
            Software Dev with Purpose
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-white/70"
          >
            I'm an aspiring Full Stack Developer with a strong foundation in modern web technologies.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
        >
          {/* Left Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="rounded-3xl border p-8 shadow-xl
                       border-gray-200 bg-white
                       dark:border-blue-500/20 dark:bg-[hsl(225_18%_10%)]"
          >
            <motion.p 
              variants={itemVariants}
              className="text-sm mb-6 text-gray-600 dark:text-white/70"
            >
              My development journey is focused on learning how to create real value through code.
              As an aspiring full-stack developer, I’m learning that great applications aren’t just about features, but about thoughtful structure, performance, and reliability working behind the scenes.
            </motion.p>

            <motion.div 
              className="space-y-3"
              variants={containerVariants}
            >
              {["System Architecture", "User-Centric Design", "Clean Codebase"].map((item, index) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center justify-between rounded-2xl border px-4 py-3
                             border-gray-200 bg-gray-50
                             dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-sm font-medium">{item}</div>
                  <div className="text-xs text-gray-500 dark:text-white/60">Learning</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="rounded-3xl border p-8 shadow-xl
                       border-gray-200 bg-white
                       dark:border-blue-500/20 dark:bg-[hsl(225_18%_10%)]"
          >
            <motion.div variants={itemVariants} className="text-sm font-medium mb-2">
              What I value
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-sm mb-6 text-gray-600 dark:text-white/70"
            >
              Efficiency, scalability, and accessibility. I build tools that solve real problems while maintaining a high standard of visual and technical polish.
            </motion.p>

            <motion.div variants={itemVariants}>
              <div className="text-xs mb-3 text-gray-500 dark:text-white/60">Core interests</div>
              <div className="flex flex-wrap gap-2">
                {["Front-End","Back-End", "API Design", "Database Modeling", "Performance Optimization", "Security",].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full px-3 py-1 text-xs font-medium
                               bg-gray-100 text-gray-700
                               dark:bg-white/10 dark:text-white cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}