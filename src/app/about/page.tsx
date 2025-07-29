
import { Metadata } from 'next'
import AboutPage from '../components/About'

export const metadata: Metadata = {
    title: 'Contact – OYE TECH',
    description: 'Learn about Abdulqobid Oyekola, a passionate fullstack web developer.',
}

export default function About() {
  return (
    <>
    <AboutPage />
    </>
  )
}
