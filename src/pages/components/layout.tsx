import { AnimatePresence, motion } from 'framer-motion'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import CloseIcon from "assets/circle-xmark-solid.svg";
import { useState } from 'react';
import Modal from 'components/Modal';

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export default function Layout({children}: Props) {

  const navigate = useNavigate()
  const location = useLocation()
  const title = location.pathname.split("/")[1]
  const [nav, setNav] = useState(false)

  return (
    <AnimatePresence mode='wait'>
      <motion.div layoutId={title} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} layout className="w-screen h-screen bg-primary flex flex-col items-center py-10 overflow-x-hidden relative">
        <div className='flex justify-between items-center mb-10'>
          <motion.div layoutId='name' layout="preserve-aspect" className='name absolute left-[5%] cursor-pointer' onClick={() => setNav(true)}>TS</motion.div>
          <h1 className="text-2xl lg:text-4xl font-semibold capitalize">{title}</h1>
          <div className="absolute right-[5%] cursor-pointer" onClick={() => navigate("/", {state: {freeze: true}})}><img src={CloseIcon} alt='close' className='w-8 md:w-12 lg:w-16 h-auto' /></div>
        </div>
        <Outlet />
      </motion.div>
      <Modal open={nav} handleClose={() => {setNav(false)}}>
        <div className="max-w-[90vw] flex flex-col justify-center items-center rounded-2xl gap-8 max-h-[90vh] w-[400px] h-[400px] bg-tertiary">
          {
            pages.map((page, i) => (
              <motion.div initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.1*i}}>
                <Link key={page || "Home"} to={"/" + page.toLocaleLowerCase()} className={`${page.toLocaleLowerCase() === title ? "text-accent" : "hover:text-secondary"}`}>{page || "Home"}</Link>
              </motion.div>
            ))
          }
        </div>
      </Modal>
    </AnimatePresence>
  )
}

const pages = ["", "Experience", "Projects", "Tools", "Contact"]