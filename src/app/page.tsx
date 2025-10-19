
import { Metadata } from 'next'
import HomePage from './components/Home'
import ViewCounter from './blog/[slug]/ViewCounter'


export const metadata: Metadata = {
  title: 'Home – OYE TECH',
  description: 'Welcome to the portfolio of Abdulqobid Oyekola — Fullstack Web Developer',
}

export default function Home() {
  return (
    <>
    <ViewCounter slug='home' />
    <HomePage />
    </>
  )
}
