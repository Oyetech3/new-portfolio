import { Metadata } from 'next'
import SkillsPage from '../components/Skills'
import ViewCounter from '../blog/[slug]/ViewCounter'

export const metadata: Metadata = {
    title: 'Skills – OYE TECH',
    description: 'Discover the technical skills and tools Abdulqobid Oyekola specializes in.',
}

export default function Skills() {

  return (
    <>
    <ViewCounter slug='skills' />
     <SkillsPage /> 
    </>
  )
}
