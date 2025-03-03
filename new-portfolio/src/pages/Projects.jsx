import { motion } from "framer-motion";

const projects = [
  {
  title: "Portfolio Website",
  description: "A personal portfolio built with React.",
  link: "https://github.com/pmaitra1/my-website.git"
  },
  {
  title: "Mathematics Assessment Study",
  description: "Analyzing post-COVID mathematics degree assessments.",
  link: "https://github.com/pmaitra1/Maths-Group-Project.git"
  },
  {
  title: "Human Activity Recognition",
  description: "A machine learning IoT system for activity recognition.",
  link: "https://github.com/pmaitra1/human_activity_recognition_app.git"
  },
  {
  title: "OpenDBML Enhancements",
  description: "Enhancements to an in-database ML framework.",
  link: "https://github.com/pmaitra1/OpenDBML-enhancements.git"
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
        Here are some projects I've worked on, showcasing my skills and experience in software development.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-4 inline-block">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
