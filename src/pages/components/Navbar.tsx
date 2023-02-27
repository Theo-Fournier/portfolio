import { useState } from 'react'
import Link from 'next/link'

const Navbar = ({}) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="md:hidden sticky text-black">
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="active:bg-gray-300 rounded-full duration-300 p-2 m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className={isNavOpen ? '' : 'hideMenuNav'}>
          <div className="pl-4">
            <h1 className="py-4">
              <Link href="/">Accueil</Link>
            </h1>
            <h1 className="py-4">
              <Link href="/projets">Projets</Link>
            </h1>
            <h1 className="py-4">
              <Link href="/skills">Compétences</Link>
            </h1>
            <h1 className="py-4">
              <Link href="/contact">Contact</Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center text-black justify-center py-5 hidden md:flex">
        <h1 className="mx-12">
          <Link href="/">Accueil</Link>
        </h1>
        <h1 className="mx-12">
          <Link href="/projets">Projets</Link>
        </h1>
        <h1 className="mx-12">
          <Link href="/skills">Compétences</Link>
        </h1>
        <h1 className="mx-12">
          <Link href="/contact">Contact</Link>
        </h1>
      </div>
    </header>
  )
}

export default Navbar
