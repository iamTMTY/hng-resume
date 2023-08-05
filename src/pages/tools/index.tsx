import { motion } from 'framer-motion'
import {FaReact, FaLaravel, FaSass, FaAws} from "react-icons/fa"
import {FiFramer} from "react-icons/fi"
import {BiLogoJavascript, BiLogoTypescript, BiLogoNodejs, BiLogoMongodb, BiLogoTailwindCss, BiLogoFirebase} from "react-icons/bi"
import {SiPhp, SiGithubactions, SiNestjs, SiMui} from "react-icons/si"
import {TbBrandNextjs, TbBrandCypress, TbBrandReactNative} from "react-icons/tb"
import {DiPostgresql} from "react-icons/di"
type Props = {}

export default function Tools({}: Props) {


  return (
    <div className="px-4 sm:px-10 w-full flex flex-col items-center">
      <p className="text-base lg:text-xl mb-20 text-center">Here are some of the amazing tools I work with</p>
      <div className="w-full grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 gap-y-10 sm:gap-y-14 gap-x-4 sm:gap-x-10 max-w-[1400px]">
        {
          tools.map((tool, i) => {
            const {Icon, title} = tool
            return (
              <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: i*0.1}} className="flex flex-col justify-center items-center gap-2 w-full">
                <Icon className="w-full" size={50} color='white' />
                <p className='text-sm sm:text-base'>{title}</p>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}

const tools = [
  {
    title: "JavaScript",
    Icon: BiLogoJavascript
  },
  {
    title: "TypeScript",
    Icon: BiLogoTypescript
  },
  {
    title: "Nodejs",
    Icon: BiLogoNodejs
  },
  {
    title: "PHP",
    Icon: SiPhp
  },
  {
    title: "Reactjs",
    Icon: FaReact
  },
  {
    title: "React Native",
    Icon: TbBrandReactNative
  },
  {
    title: "Nextjs",
    Icon: TbBrandNextjs
  },
  {
    title: "Nestjs",
    Icon: SiNestjs
  },
  {
    title: "Laravel",
    Icon: FaLaravel
  },
  {
    title: "PostgreSQL",
    Icon: DiPostgresql
  },
  {
    title: "MongoDB",
    Icon: BiLogoMongodb
  },
  // {
  //   title: "TypeORM",
  //   Icon: SiPhp
  // },
  {
    title: "TailwindCSS",
    Icon: BiLogoTailwindCss
  },
  {
    title: "MaterialUI",
    Icon: SiMui
  },
  {
    title: "SCSS",
    Icon: FaSass
  },
  {
    title: "Framer Motion",
    Icon: FiFramer
  },
  {
    title: "AWS",
    Icon: FaAws
  },
  {
    title: "Github Actions",
    Icon: SiGithubactions
  },
  {
    title: "Cypress",
    Icon: TbBrandCypress
  },
  {
    title: "Firebase",
    Icon: BiLogoFirebase
  },
]