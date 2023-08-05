import { motion } from 'framer-motion'
import Cusmik from "assets/cusmik.png"
import Gamevil from "assets/gamevil.png"
import Spacestagram from "assets/spacestagram.png"
import Quizzer from "assets/quizzer.png"
import Project from "assets/briefcase-white.svg"
import {FaGithubSquare} from "react-icons/fa"
import {RiExternalLinkLine} from "react-icons/ri"

type Props = {}

export default function Projects({}: Props) {


  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-10 gap-8 lg:gap-16 max-w-[1600px]">
      {
        projects.map((project, j) => {
          const hasImage = !!project?.image
          return (
            <motion.div key={project.name} animate={{ y: 0, opacity: 1}} initial={{y: 100, opacity: 0}} transition={{delay: j * 0.1}} exit={{y: 100, opacity: 0}} className="w-full h-[400px] shadow-card bg-primary  rounded-xl flex flex-col overflow-hidden group">
              <div className={`w-full h-[60%] border-b-[1px] border-b-secondary ${hasImage ? "bg-[length:200%] group-hover:bg-[length:220%]" : "bg-[length:20%] group-hover:bg-[length:30%]"} transition-all duration-500 bg-center bg-no-repeat bg-blend-multiply bg-[#00000080]`} style={{backgroundImage: `url(${hasImage ? project.image : Project})`}}>
              </div>
              <div className="flex flex-col justify-between h-[40%] p-4">
                <h2>{project.name.toLocaleUpperCase()}</h2>
                <p className="text-sm">{project.description}</p>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xs">{project.stack.map((s, i, arr) => <span key={s+project.name}>{s + (i === arr.length - 1 ? "" : ", ")}</span>)}</div>
                  <div className="flex gap-4">
                    {project?.url && <a href={project.url}><RiExternalLinkLine size={24} /></a>}
                    {project?.github && <a href={project.github}><FaGithubSquare size={24} /></a>}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })
      }
    </div>
  )
}

const projects = [
  {
    name: "Tic-Tac-Toe",
    description: "A realtime multiplayer tic-tac-toe game (in progress)",
    stack: ["JavaScript", "HTML5 Canvas", "Websockets"],
    url: "",
    github: ""
  },
  {
    name: "Cusmik",
    description: "A music web application with features like playlist, play history and more.",
    stack: ["JavaScript", "SCSS"],
    image: Cusmik,
    url: "https://cusmik.netlify.app",
    github: "https://github.com/iamTMTY/Cusmik"
  },
  {
    name: "Gamevil",
    description: "A game themed headless-commerce platform that utilizes shopify as it's back-end.",
    stack: ["React", "GraphQL", "Shopify"],
    image: Gamevil,
    url: "https://gamevil.netlify.app",
    github: "https://github.com/iamTMTY/gamevil"
  },
  {
    name: "Spacestagram",
    description: "An instagram look alike that loads pictures from the NASA API.",
    stack: ["Nextjs", "TypesScript", "NASA API"],
    image: Spacestagram,
    url: "https://temitayo-spacestagram.netlify.app/",
    github: "https://github.com/iamTMTY/spacestagram"
  },
  {
    name: "Quizzer",
    description: "A quiz web app where you get to take a round of 10 quizzes and get on the leaderboard if you score high enough",
    stack: ["SCSS", "Firebase", "JavaScript"],
    image: Quizzer,
    url: "https://quizzer-pro.netlify.app",
    github: "https://github.com/iamTMTY/Quiz_App"
  },
  {
    name: "URL Shortner",
    description: "A Nodejs URL shortner microservice.",
    stack: ["Nodejs", "MongoDB", "Express"],
    url: "",
    github: "https://github.com/iamTMTY/url-shortner"
  },
  {
    name: "Tic-Tac-Toe Server",
    description: "A Nodejs web server for the tic-tac-toe multiplayer game (In progress)",
    stack: ["Nodejs", "PostgreSQL", "Websockets"],
    url: "",
    github: ""
  },
]