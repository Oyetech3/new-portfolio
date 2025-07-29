import { Metadata } from 'next'
import ProjectsPage from '../components/Projects'

export const metadata: Metadata = {
    title: 'Projects – OYE TECH',
    description: 'Explore the projects and work experience of Abdulqobid Oyekola.',
}

export default function Projects() {
  
  return (
    <>
      <ProjectsPage />
    </>
  )
}
