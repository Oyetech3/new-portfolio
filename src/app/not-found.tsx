import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center gap-4">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 px-6 py-3 bg-[#f04770] text-white rounded hover:bg-[#d03a64] transition">
        Go back home
      </Link>
    </section>
  )
}
