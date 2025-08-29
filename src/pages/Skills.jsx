import GlitchText from '../components/reactbits/glitchtext/GlitchText';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import Render from "../assets/render.svg";
import Hostinger from "../assets/hostinger-logo.png";
import Activecampaign from "../assets/activecampaign-logo.jpeg";
import Gohighlevel from "../assets/gohighlevel-logo.jpeg";
import Microsoft from "../assets/microsoft-logo.jpeg";
import Thrivecart from "../assets/thrivecart-logo.jpeg";
import Zoom from "../assets/zoom-logo.png";
import Discord from "../assets/discord-logo.svg";

import { RiBrushAiFill } from "react-icons/ri";
import { BsFileCodeFill } from "react-icons/bs";
import { FaDatabase, FaTools, FaToolbox ,FaPhone   } from "react-icons/fa";

const items = [
  {
    category: "Frontend",
    icon: <RiBrushAiFill />,
    color: "from-blue-200 to-blue-400",
    skills: [
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    category: "Backend",
    icon: <BsFileCodeFill />,
    color: "from-purple-200 to-purple-400",
    skills: [
      { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PHP (CodeIgniter)", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    color: "from-green-200 to-green-400",
    skills: [
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <FaTools />,
    color: "from-yellow-200 to-yellow-400",
    skills: [
      { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Render", img: Render },
      { name: "Hostinger", img: Hostinger},
    ],
  },
  {
    category: "Non-Programming Tools",
    icon: <FaToolbox />,
    color: "from-pink-200 to-pink-400",
    skills: [
      { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "GoHighLevel", img: Gohighlevel},
      { name: "ThriveCart", img: Thrivecart},
      { name: "ActiveCampaign", img: Activecampaign },
      { name: "Trello", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "MS Office", img: Microsoft},
    ],
  },
  {
    category: "Communication Tools",
    icon: <FaPhone />,
    color: "rgba(0, 229, 255, 1)",
    skills: [
      { name: "Discord", img: Discord },
      { name: "Slack", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
      { name: "Zoom", img: Zoom },
    ],
  },
];

// const transformStyles = [
//   "rotate-1 scale-95 hover:scale-110",
//   "-rotate-2 scale-90 hover:scale-110",
//   "rotate-3 scale-100 hover:scale-115",
//   "-rotate-1 scale-95 hover:scale-120",
//   "rotate-2 scale-90 hover:scale-115",
//   "-rotate-3 scale-100 hover:scale-125",
// ];
// ${transformStyles[index % transformStyles.length]}


const Skills = () => (
  <section id='skills' className='section relative min-h-[100vh] w-full grid grid-cols-[auto_1fr] gap-2 pt-24 '>
    {/* Left line */}
    <div className='h-full w-1 bg-[rgb(15,92,81)] rounded-xs'></div>

    {/* Right content */}
    <div className='grid grid-rows-[auto_1fr] gap-4 p-4'>
      <div className='mx-3'>
        <GlitchText
          speed={2}
          enableShadows={true}
          enableOnHover={true}
        >
          Skills & Tech Stack
        </GlitchText>
      </div>

      {/* Table-like layout */}
      <div className="grid lg:grid-cols-3 grid-rows-2 gap-10 text-center px-10">
        {items.map((item, index) => (
          <SpotlightCard
            key={index}
            className={`
              section-cards custom-spotlight-card grid grid-rows-2 backdrop-blur-lg
              bg-white/10 scale-75 hover:scale-125 hover:z-20 z-10 transition-transform duration-300 ease-in-out
              `}
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h4 className="text:lg lg:text-2xl font-bold flex justify-center items-center gap-2"><span className='text-[rgb(0,189,148)]'>{item.icon}</span>{item.category}</h4>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {item.skills.map((skill, i) => (
                <img
                  key={i}
                  src={skill.img}
                  alt={skill.name}
                  className="xs:size-5 lg:size-16 object-contain hover:scale-125 transition-transform duration-200"
                />
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
