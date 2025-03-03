import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-5 flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <p className="text-center mb-12">
          Feel free to reach out for collaborations or just a friendly chat!
        </p>

        <motion.form
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="px-6 py-3 bg-gray-500 dark:bg-gray-600 rounded-lg text-white font-bold hover:bg-gray-600 dark:hover:bg-gray-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
