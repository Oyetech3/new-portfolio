import { Metadata } from 'next'
import ContactPage from '../components/Contact'
import ViewCounter from '../blog/[slug]/ViewCounter'

export const metadata: Metadata = {
    title: 'Contact – OYE TECH',
    description: 'Get in touch with Abdulqobid Oyekola for web development projects or collaborations.',
}

export default function Contact() {
  return (
    <>
      <ViewCounter slug='contact' />
      <ContactPage />
    </>
  )
}
