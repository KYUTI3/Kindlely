import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-r from-cyan-500 to-blue-500">
      <nav className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">Kindlely</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

     
      <main className="flex-grow flex items-center justify-center">
        <h2 className="text-3xl font-bold">Welcome to Kindlely!</h2>
      </main>

      
      <footer className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kindlely. No rights reserved XD
      </footer>
    </div>
  );
}