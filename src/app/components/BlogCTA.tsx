import Link from 'next/link'

export default function CTASection() {
  return (
    <div className="gradient-red rounded-lg p-12 text-center my-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Ready to Work Together?
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Let's build something amazing. I'm available for freelance projects and consultations.
      </p>
      <Link href="#contact" className="btn-secondary">
        Get In Touch
      </Link>
    </div>
  )
}