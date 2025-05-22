import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 px-4">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Lovasoa3691"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-green-400 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/fenonantenaiko-lovasoa-6a6507289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-green-400 transition" />
        </a>
        <a href="mailto:fenonantenaikolovasoa@gmail.com">
          <FaEnvelope className="text-2xl hover:text-green-400 transition" />
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        Passionné par le code propre, les interfaces soignées et l'expérience
        utilisateur de qualité.
      </p>

      <p className="mt-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
