import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const allProjects = [
    {
      title: "Portfolio React",
      category: "React",
      img: "https://via.placeholder.com/300",
      github: "https://github.com/tonprofil/portfolio-react",
      demo: "https://tonportfolio.vercel.app",
    },
    {
      title: "Site Vitrine",
      category: "HTML/CSS",
      img: "https://via.placeholder.com/300",
      github: "https://github.com/tonprofil/site-vitrine",
      demo: "", // Pas de démo en ligne
    },
    {
      title: "App Mobile",
      category: "Flutter",
      img: "https://via.placeholder.com/300",
      github: "https://github.com/tonprofil/app-flutter",
      demo: "https://appmobile-demo.netlify.app",
    },
  ];

  const categories = ["Tous", "React", "HTML/CSS", "Flutter"];

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
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.category}
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
