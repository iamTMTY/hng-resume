import { AnimatePresence, motion } from 'framer-motion'
import {useEffect} from "react"

type Props = {
  className?: string
  children: JSX.Element | JSX.Element[]
  handleClose?: () => void
  open: Boolean
}

export default function Modal({className, children, open, handleClose}: Props) {

  return (
    <AnimatePresence mode='wait'>
      {
        open &&
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={handleClose} className={`fixed top-0 left-0 w-screen h-screen bg-[#00000099] flex justify-center items-center ${className}`}>
          <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}