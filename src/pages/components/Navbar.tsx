import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import TF from "../../../public/TF.png";

const Navbar = ({}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={isNavOpen ? "md:bg-white bg-gray-800" : "bg-white"}>
      {/* Mobile */}
      <div
        className={
          isNavOpen ? "md:hidden sticky" : "md:hidden sticky text-black"
        }
      >
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className={
            isNavOpen
              ? "rounded-full p-2 m-2 hover:bg-gray-600"
              : "rounded-full p-2 m-2 hover:bg-gray-200"
          }
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
      </div>
      <div className={isNavOpen ? "bg-gray-800 text-white" : "hidden"}>
        <Link href="/">
          <div className={router.pathname == "/" ? "bg-gray-700" : ""}>
            <div className="flex py-4 px-4 hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Accueil
            </div>
          </div>
        </Link>
        <Link href="/projets">
          <div className={router.pathname == "/projets" ? "bg-gray-700" : ""}>
            <div className="flex py-4 px-4 hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
              Projets
            </div>
          </div>
        </Link>
        <Link href="/skills">
          <div className={router.pathname == "/skills" ? "bg-gray-700" : ""}>
            <div className="flex py-4 px-4 hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              Compétences
            </div>
          </div>
        </Link>
        <Link href="/contact">
          <div className={router.pathname == "/contact" ? "bg-gray-700" : ""}>
            <div className="flex py-4 px-4 hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Contact
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop */}
      <Image
        src={TF}
        alt="Logo"
        width={120}
        height={120}
        className="hidden absolute md:block"
      />
      <div className="text-black hidden pt-4 mr-8 justify-end md:flex">
        <Link href="/">
          <div className={router.pathname == "/" ? "p-2 mx-2" : "p-2 mx-2"}>
            Accueil
          </div>
        </Link>
        <Link href="/projets">
          <div className="p-2 mx-2">Projets</div>
        </Link>
        <Link href="/skills">
          <div className="p-2 mx-2">Compétences</div>
        </Link>
        <Link href="/contact">
          <div className="p-2 mx-2">Contact</div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
