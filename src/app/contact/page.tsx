import { Metadata } from 'next'
import ContactPage from '../components/Contact'

export const metadata: Metadata = {
    title: 'Contact – OYE TECH',
    description: 'Get in touch with Abdulqobid Oyekola for web development projects or collaborations.',
}

export default function Contact() {
  return (
    <>
      <ContactPage />
    </>
  )
}
