import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/PRAPTIMAITRA@GMAIL.COM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    }

    setLoading(false);
  };

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
        <p className="text-center mb-12">Feel free to reach out for collaborations or just a friendly chat!</p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-lg text-white font-bold transition duration-300 ${
                isSubmitted ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Sending..." : isSubmitted ? "Sent!" : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
