import Image from 'next/image'
import profilePic from '../../public/profilePic.png'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white pt-52 min-h-screen">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="space-y-4 mx-32">
            <h1 className="text-black text-5xl font-bold">
              Lorem ipsum dolor,
            </h1>
            <h1 className="text-black text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas praesentium ducimus rerum. Impedit rerum dolorum sunt amet, totam repellendus atque minima laborum enim exercitationem aperiam consectetur non. Hic, dicta.
            </h1>
          </div>
            <Image 
              src={profilePic}
              alt="Profil"
              width={200}
              height={200}
              className="justify-self-center"
            />
        </div>
      </div>
      <Footer />
    </>
  )
}
