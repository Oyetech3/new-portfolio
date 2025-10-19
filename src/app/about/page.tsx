
import { Metadata } from 'next'
import AboutPage from '../components/About'
import ViewCounter from '../blog/[slug]/ViewCounter'

export const metadata: Metadata = {
    title: 'Contact – OYE TECH',
    description: 'Learn about Abdulqobid Oyekola, a passionate fullstack web developer.',
}

export default function About() {
  return (
    <>
    <ViewCounter slug='about' />
    <AboutPage />
    </>
  )
}
