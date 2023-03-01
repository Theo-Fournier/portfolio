import Image from "next/image";
import profilePic from "../../public/profilePic.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white md:pt-52 xs:pt-20 min-h-screen">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="space-y-4 lg:mx-44 xs:mx-20">
            <h1 className="text-black text-5xl font-bold">
              Lorem ipsum dolor,
            </h1>
            <h1 className="text-black text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
              praesentium ducimus rerum. Impedit rerum dolorum sunt amet.
            </h1>
          </div>
          <Image
            src={profilePic}
            alt="Profil"
            width={300}
            height={300}
            className="justify-self-center self-center rounded-2xl xs:py-16 md:p-0"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
