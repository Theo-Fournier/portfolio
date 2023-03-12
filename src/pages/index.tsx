import Image from "next/image";
import profilePic from "../../public/profilePic.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white xs:pt-16 min-h-screen dark:bg-gray-800">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="space-y-4 lg:mx-44 xs:mx-20">
            <h1 className="text-black text-5xl font-bold dark:text-white">
              Lorem ipsum dolor,
            </h1>
            <h1 className="text-black text-xl dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
              praesentium ducimus rerum. Impedit rerum dolorum sunt amet.
            </h1>
          </div>
          <Image
            src={profilePic}
            alt="Profil"
            width={300}
            height={300}
            className="justify-self-center self-center rounded-2xl xs:mt-16 md:m-0 drop-shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
