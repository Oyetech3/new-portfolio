
import { Metadata } from 'next'
import HomePage from './components/Home'


export const metadata: Metadata = {
  title: 'Home – OYE TECH',
  description: 'Welcome to the portfolio of Abdulqobid Oyekola — Fullstack Web Developer',
}

export default function Home() {
  return (
    <>
    <HomePage />
    </>
  )
}
