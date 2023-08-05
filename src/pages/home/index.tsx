import {delay, motion} from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom'

export default function Home({}) {

  const {state} = useLocation()
  const navigate = useNavigate()

  const animate = !state?.freeze

  // console.log(window.history.length);
  
  
  return (
    <div className="flex flex-col h-[calc(100%-40px)] min-h-[600px] overflow-x-hidden overflow-y-auto py-6 gap-y-10 md:py-10">
      <div className="bg-primary h-3/6 flex flex-col items-center justify-center p-4">
        <motion.p 
          animate={{opacity: 1}} transition={{delay: 0.2}} initial={{opacity: animate ? 0 : 1}} exit={{opacity: 0}}
          className="mb-5 text-center text-sm md:text-base"><span className="hi">Hi</span>, my name is <motion.span layoutId='name' className="name">Temitayo Salaudeen</motion.span></motion.p>
        <motion.p 
          animate={{opacity: 1}} transition={{delay: 0.6}} initial={{opacity: animate ? 0 : 1}} exit={{opacity: 0}}
          className="mb-5 text-center text-sm md:text-base">I am a <span className="role">Software Developer,</span></motion.p>
        <motion.p 
          animate={{opacity: 1}} transition={{delay: 1.0}} initial={{opacity: animate ? 0 : 1}} exit={{opacity: 0}}
          className="mb-5 text-center text-sm md:text-base">and I love building intuitive and engaging internet experiences while solving business problems</motion.p>
      </div>
      <div className='lg:flex grid grid-cols-2 gap-4 md:gap-10 h-3/6 px-4 md:px-10'>
        {cards.map((card, i) => (
          <motion.div key={card} layoutId={card.toLocaleLowerCase()} layout onClick={() => {
            navigate("/" + card.toLocaleLowerCase())  
          }}  className="w-full rounded-xl relative lg:w-3/12 group h-full bg-tertiary cursor-pointer">
            <div className="w-full h-full bg-tertiary flex flex-col gap-y-[10px] justify-center items-center rounded-xl">
              <motion.h1 animate={{opacity: 1}} transition={{delay: (i * 0.2) + 1.2}} initial={{opacity: animate ? 0 : 1}} exit={{opacity: 0}} className='text-white text-xl sm:text-2xl lg:text-4xl font-bold group-hover:text-accent transition-all'>{card}</motion.h1>
            </div>
            <motion.div className="absolute w-full h-full bg-white top-[2px] left-[2px] rounded-xl z-[-1] group-hover:bg-accent transition-all"></motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const cards = ["Experience", "Projects", "Tools", "Contact"]