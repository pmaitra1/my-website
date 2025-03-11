import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "OpenDBML API (Dissertation)",
    description: "A Python framework for democratising In-Database Machine Learning.",
    link: "https://github.com/pmaitra1/OpenDBML-enhancements.git",
    techStack: ["Python"]
  },
  {
    title: "Human Activity Recognition App (Group Project)",
    description: "An app that uses IoT sensor readings and machine learning to recognise human activities.",
    link: "https://github.com/pmaitra1/human_activity_recognition_app.git",
    techStack: ["Python", "TensorFlow", "IoT", "Machine Learning", "Kotlin"]
  },
  {
    title: "Change in Mathematical Assessment Practices Post-Pandemic (Dissertation).",
    description: "A statistical study exploring the shift in assessment practices in undergraduate mathematics degrees post-pandemic.",
    link: "https://github.com/pmaitra1/Maths-Group-Project.git",
    techStack: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Crypto Portfolio API",
    description: "A Go (Golang) based API for managing cryptocurrency portfolios.",
    link: "https://github.com/pmaitra1/-crypto-portfolio-api.git",
    techStack: ["Go", "GORM", "PostgreSQL", "JWT"]
  }, 

  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React.",
    link: "https://github.com/pmaitra1/my-website.git",
    techStack: ["JavaScript", "React", "Tailwind CSS", "Framer Motion"]
  }
  
];

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <motion.h2 
        className="text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
      </motion.p>
      <div className="grid grid-cols-1 gap-6 mt-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center w-full h-full flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-blue-500">
              <FiExternalLink size={20} />
            </a>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            </div>
            <div className="mt-auto pt-4 text-sm text-gray-500 dark:text-white flex flex-wrap justify-center gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
