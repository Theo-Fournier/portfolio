import { useTheme } from "next-themes";
import Image from "next/image";
import githubDark from "../../../public/githubDark.png";
import githubLight from "../../../public/githubLight.png";
import linkedinDark from "../../../public/linkedinDark.png";
import linkedinLight from "../../../public/linkedinLight.png";

const Footer = ({}) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const github = () => {
    if (currentTheme === "dark") {
      return (
        <button className="dark:text-white mx-5 rounded-full hover:bg-gray-200 duration-300 p-2 dark:hover:bg-gray-600">
          <Image
            src={githubLight}
            alt="github"
            width={25}
            height={25}
            className=""
          />
        </button>
      );
    } else {
      return (
        <button className="dark:text-white mx-5 rounded-full hover:bg-gray-200 duration-300 p-2 dark:hover:bg-gray-600">
          <Image
            src={githubDark}
            alt="github"
            width={25}
            height={25}
            className=""
          />
        </button>
      );
    }
  };
  const linkedin = () => {
    if (currentTheme === "dark") {
      return (
        <button className="mx-5 rounded-full hover:bg-gray-200 duration-300 p-2 dark:hover:bg-gray-600">
          <Image
            src={linkedinLight}
            alt="linkedin"
            width={25}
            height={25}
            className=""
          />
        </button>
      );
    } else {
      return (
        <button className="mx-5 rounded-full hover:bg-gray-200 duration-300 p-2 dark:hover:bg-gray-600">
          <Image
            src={linkedinDark}
            alt="linkedin"
            width={25}
            height={25}
            className=""
          />
        </button>
      );
    }
  };
  const renderThemeChanger = () => {
    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="text-black mx-5 rounded-full hover:bg-gray-200 duration-300 p-2 dark:text-white dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="text-black mx-5 rounded-full hover:bg-gray-200 duration-300 p-2 dark:text-white dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    }
  };
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="flex justify-center py-5">
        {github()}
        {linkedin()}
        {renderThemeChanger()}
      </div>
    </footer>
  );
};

export default Footer;
