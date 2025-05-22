import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { label: "Accueil", to: "hero" },
    { label: "À propos", to: "about" },
    { label: "Services", to: "services" },
    { label: "Projets", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-2xl font-bold text-white">JULIANOT</h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className="hidden md:flex justify-center items-center space-x-6">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-green-400 transition"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="julianot-lovasoa.pdf"
            target="_blank"
            download
            className="bg-transparent border-2 border-white font-semibold py-2 px-6 rounded-full text-white hover:text-teal-300 hover:border-teal-300 transition duration-300"
          >
            Télécharger CV
          </a>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 bg-black">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-green-400 py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
