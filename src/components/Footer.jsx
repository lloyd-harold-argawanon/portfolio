import logo from '/Logo3D.png'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const items = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contacts", href: "#contacts" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white min-h-[50vh] w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
      
      {/* Column 1 - About */}
      <div className="flex flex-col justify-center items-center text-center">
        <img src={logo} alt="Portfolio Logo" className="size-10 bg-[#00BD95] rounded-lg" />
        <h2 className="text-2xl font-bold mb-4 text-[#00BD95]">Portfolio</h2>
        <p className="text-gray-400 max-w-xs">
          A showcase of my skills, projects, and experiences in web development.  
          Let's build something amazing together.
        </p>

        <p className="text-gray-500 text-xs mt-6">
          Note: Some components are built with ❤️ using{" "}
          <a
            href="https://reactbits.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00BD95] hover:underline"
          >
            Reactbits
          </a>
        </p>
      </div>
      {/* Column 2 - Contact & Socials */}
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-xl font-semibold mb-4">Connect</h3>
        <div className="flex gap-4">
          {/* Email */}
          <div className="relative group inline-block">
            <a 
              href="mailto:lhpargawanon@gmail.com"
              className="hover:text-[#00BD95]"
            >
              <FaEnvelope size={24} />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              Send me an email through Gmail: lhpargawanon@gmail.com
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group inline-block">
            <a 
              href="https://github.com/lloyd-harold-argawanon" 
              className="hover:text-[#00BD95]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              View my GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group inline-block">
            <a 
              href="https://www.linkedin.com/in/lloyd-harold-argawanon-16337b377/" 
              className="hover:text-[#00BD95]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-max rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
              Connect on LinkedIn
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Lloyd Harold Argawanon. All rights reserved.
        </p>
      </div>

      {/* Column 3 - Quick Links */}
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <nav className="flex flex-col items-center">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="m-1 text-lg text-gray-300 hover:text-[#00BD95] transition-transform duration-300 cursor-pointer hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      

    </footer>
  );
};

export default Footer;
