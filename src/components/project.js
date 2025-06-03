import { useState } from "react";
import { motion } from "framer-motion";
import portfolio from "../assets/project_pic/protflio.png";
import inscription from "../assets/project_pic/inscription.png";
import bank1 from "../assets/project_pic/bank1.png";
import bank2 from "../assets/project_pic/bank2.png";
import bank4 from "../assets/project_pic/bank4.png";

import a1 from "../assets/project_pic/assistant1.png";
import a2 from "../assets/project_pic/assistant2.png";
import a3 from "../assets/project_pic/assistant3.png";
import a4 from "../assets/project_pic/assistant4.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { a } from "framer-motion/client";

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const allProjects = [
    // {
    //   title: "Site E-commerce",
    //   category: "HTML/CSS",
    //   img: ["https://via.placeholder.com/300"],
    //   github: "",
    //   demo: "",
    //   description:
    //     "Une boutique en ligne simple pour la présentation de produits.",
    //   technologies: "HTML, CSS, JavaScript",
    // },
    {
      title: "Assistant IA",
      category: "React Native",
      img: [a1, a2, a3, a4],
      github: "https://github.com/Lovasoa3691/AssistantEtudiant",
      demo: "",
      status: "En cours de développement",
      description:
        "Application mobile permettant aux étudiants de gérer leur planning de cours, avec un module de révision et un chatbot pour poser des questions.",
      technologies: "React Native, Flask, MySQL",
    },
    {
      title: "Compte Bancaire",
      category: "React",
      img: [bank1, bank2, bank4],
      github: "https://github.com/Lovasoa3691/banking-app",
      demo: "",
      description:
        "Application web permettant de gérer des comptes bancaires, notamment la création de nouveaux comptes et la gestion des demandes de prêt (Admin). " +
        "Pour les clients : consultation du solde, virements, retraits, demandes de prêt et consultation de l’historique des transactions.",
      technologies: "React, CSS, Node, Express, MySQL",
    },
    {
      title: "Système d'inscription",
      category: "React",
      img: [inscription],
      github: "https://github.com/Lovasoa3691/inscription",
      demo: "",
      description:
        "Application web permettant aux étudiants de s'inscrire facilement aux examens au sein de leur établissement. (Dashboard Admin, Dashboard Étudiant)",
      technologies: "MongoDB, Express, React, Node.js, Bootstrap",
    },
    // {
    //   title: "Emploi du Temps",
    //   category: "React",
    //   img: ["https://via.placeholder.com/300"],
    //   github: "https://github.com/Lovasoa3691/EmploiDuTemps",
    //   demo: "",
    //   status: "En cours d'amélioration",
    //   description: "Application web permettant de gérer les emplois du temps.",
    //   technologies: "React, CSS, Flask, MySQL",
    // },
    {
      title: "Portfolio",
      category: "React",
      img: [portfolio],
      github: "https://github.com/Lovasoa3691/portfolio3691",
      demo: "https://julianot-julianot.vercel.app",
      description:
        "Un portfolio personnel réalisé avec React, intégrant des animations et une interface responsive.",
      technologies: "React.js, Tailwind CSS, Framer Motion",
    },
  ];

  const categories = ["Tous", "React", "React Native"];

  const filteredProjects =
    filter === "Tous"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
            Voici quelques-uns des projets sur lesquels j’ai travaillé, mettant
            en œuvre mes compétences en développement frontend, backend et
            conception UI/UX. Ces réalisations reflètent mon approche centrée
            sur la performance, l’esthétique et l’expérience utilisateur.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-500 border-green-600"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <Carousel showThumbs={false} infiniteLoop autoPlay>
                {project.img.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`${project.title} - image ${index + 1}`}
                      className="w-full h-72"
                    />
                  </div>
                ))}
              </Carousel>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.category}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.status ? (
                      <span className="text-yellow-500">{project.status}</span>
                    ) : (
                      "Statut non spécifié"
                    )}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-bold">
                    <strong>Technologies: </strong>
                    {project.technologies}
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 border border-green-600 px-3 py-1 rounded hover:bg-green-600 hover:text-white transition text-sm"
                    >
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 border border-gray-500 px-3 py-1 rounded hover:bg-gray-700 hover:text-white transition text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
