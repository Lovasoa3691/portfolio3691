import { motion } from "framer-motion";
import profilePic from "../assets/profile1.jpg";
import { FaMusic, FaPlane, FaFilm, FaFutbol } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profilePic}
            alt="Moi"
            className="w-80 h-80 object-cover border-rounded border-white border-4 rounded-md shadow-md"
          />
        </div>

        <div className="md:w-1/2 text-lg">
          {/* <p className="text-sm uppercase text-gray-500 font-semibold mb-2">
            Mon Intro
          </p> */}
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            À propos de moi
          </h2>
          <p className="mb-6 text-gray-600">
            Je suis <strong>Julianot </strong>, développeur full-stack passionné
            par le design moderne, les interfaces intuitives et les performances
            web. J’accorde une grande importance à l’expérience utilisateur en
            créant des applications fluides, immersives et efficaces. Rigoureux,
            curieux et toujours prêt à relever de nouveaux défis, je mets mes
            compétences techniques au service de projets innovants et bien
            conçus.
          </p>

          <div className="grid grid-rows-1 sm:grid-rows-2 gap-y-3 text-sm ">
            <p>
              <strong>Email:</strong>{" "}
              <span className="text-green-700 font-medium">
                fenonantenaikolovasoa@gmail.com
              </span>
            </p>

            <p>
              <strong>Localisation:</strong>{" "}
              <span className="text-green-700 font-medium">
                Fianarantsoa, Madagascar
              </span>
            </p>
          </div>

          <div className="flex justify-start gap-6 mt-6 text-center text-sm">
            <div className="flex flex-col items-center">
              <FaMusic className="text-green-700 text-2xl mb-1" />
              <span>Musique</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPlane className="text-green-700 text-2xl mb-1" />
              <span>Voyage</span>
            </div>
            <div className="flex flex-col items-center">
              <FaFilm className="text-green-700 text-2xl mb-1" />
              <span>Cuisine</span>
            </div>
            <div className="flex flex-col items-center">
              <FaFutbol className="text-green-700 text-2xl mb-1" />
              <span>Basketball</span>
            </div>
          </div>

          <a
            href="julianot-cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
          >
            Télécharger mon CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
