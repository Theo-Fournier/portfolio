import Link from 'next/link'

const Header = ({}) => {
  return (
    <header className="bg-white">
      <div className="grid md:grid-cols-5 sm:grid-cols-1 text-center text-black py-5">
        <h1>
          <Link href="/">Accueil</Link>
        </h1>
        <h1>
          <Link href="/projets">Projets</Link>
        </h1>
        <h1>
          <Link href="/skills">Compétences</Link>
        </h1>
        <h1>
          <Link href="/services">Services</Link>
        </h1>
        <h1>
          <Link href="/contact">Contact</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
