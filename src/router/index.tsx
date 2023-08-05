import { Route, Routes } from 'react-router-dom'
import Home from 'pages/home'
import Experience from 'pages/experience'
import Projects from 'pages/projects'
import Contact from 'pages/contact'
import Tools from 'pages/tools'
import Layout from 'pages/components/layout'

type Props = {}

export default function Router({}: Props) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<Layout />}>
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tools' element={<Tools />} />
      </Route>
    </Routes>
  )
}