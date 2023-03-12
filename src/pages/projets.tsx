import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Projet() {
  return (
    <>
      <Navbar />
      <div className="bg-white md:pt-20 xs:pt-8 min-h-screen dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          <div className="bg-emerald-300 drop-shadow-md rounded-lg p-4 dark:bg-emerald-800">
            <h2 className="text-2xl font-bold mb-2">Card 1</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptas quas voluptates quae voluptate
              doloremque quibusdam quidem quos. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae.
            </p>
          </div>
          <div className="bg-emerald-300 drop-shadow-md rounded-lg p-4 dark:bg-emerald-800">
            <h2 className="text-2xl font-bold mb-2">Card 2</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptas quas voluptates quae voluptate
              doloremque quibusdam quidem quos. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae.
            </p>
          </div>
          <div className="bg-emerald-300 drop-shadow-md rounded-lg p-4 dark:bg-emerald-800">
            <h2 className="text-2xl font-bold mb-2">Card 3</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptas quas voluptates quae voluptate
              doloremque quibusdam quidem quos. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
