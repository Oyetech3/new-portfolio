import { Metadata } from 'next'
import SkillsPage from '../components/Skills'

export const metadata: Metadata = {
    title: 'Skills – OYE TECH',
    description: 'Discover the technical skills and tools Abdulqobid Oyekola specializes in.',
}

export default function Skills() {

  return (
    <>
     <SkillsPage /> 
    </>
  )
}
