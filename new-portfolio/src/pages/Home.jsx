// Home Page
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <motion.h1 
        className="text-5xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Prapti!
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        
        I am a <strong>BSc Computer Science and Mathematics</strong> graduate from the <strong>University of Edinburgh</strong>. 
        I am looking to contribute to meaningful organisations and companies. My interests apart from software engineering include <strong>financial technology, robotics, and computer security</strong>.
      </motion.p>
      <div className="mt-6 space-x-4">
        <a href="/projects" className="px-6 py-3 bg-gray-500 dark:bg-gray-600 rounded-lg text-white font-bold hover:bg-gray-600 dark:hover:bg-gray-700 transition duration-300">
          View Projects
        </a>
        <a href="/prapti_maitra_resume.pdf" download className="px-6 py-3 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition duration-300">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Home;