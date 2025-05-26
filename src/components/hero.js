import { motion } from "framer-motion";
import profilePic from "../assets/profile2.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-4"
    >
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-bold mb-4 text-green-400"
        >
          Bonjour, je suis
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Juliannot
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold mb-6"
        >
          Développeur Full-Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl max-w-xl mx-auto md:mx-0 mb-6"
        >
          Passionné par le développement web, je conçois des interfaces
          modernes, dynamiques et centrées sur l'expérience utilisateur. Mon
          objectif : créer des applications à la fois performantes, esthétiques
          et intuitives.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg max-w-xl mx-auto md:mx-0 mb-6"
        >
          Je maîtrise un large éventail de technologies, notamment{" "}
          <strong>React, Node.js, Express, Flask, MySQL</strong>, et bien
          d'autres. J’aime transformer des idées en solutions concrètes,
          efficaces et évolutives, en alliant rigueur technique et sens du
          détail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white font-semibold py-2 px-6 rounded-full text-white hover:text-teal-300 hover:border-teal-300 transition"
          >
            Contactez-moi
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="md:w-2/2 mt-8 md:mt-0 flex justify-center"
      >
        <img
          src={profilePic}
          alt="Portrait de Julianot, développeur Full-Stack"
          className="w-[500px] h-[500px] object-cover border-4 border-white shadow-2xl rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
