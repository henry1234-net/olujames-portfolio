"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <Head>
        <title>Olujames Taiwo Henry Portfolio</title>
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all duration-500">
        <header className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white dark:bg-gray-800 z-50">
          <h1 className="text-xl font-bold">Olujames.dev</h1>
          <button onClick={toggleTheme} className="text-lg">
            {theme === 'light' ? '🌙' : '🌞'}
          </button>
        </header>

        <section className="p-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Hi, I&apos;m Olujames Taiwo Henry
          </motion.h2>

          <h3 className="text-2xl">
            <Typewriter
              words={['Frontend Developer', 'Fullstack Developer', 'React & Laravel Expert']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          <div className="flex justify-center gap-6 mt-6">
            <a href="mailto:taiwoolujames@gmail.com"><Mail className="w-6 h-6 hover:text-blue-500" /></a>
            <a href="https://github.com/henry1234-net" target="_blank"><Github className="w-6 h-6 hover:text-black dark:hover:text-white" /></a>
          </div>
        </section>

        <section className="p-10 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

           <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/images/smhs.jpg"
                    alt="School Website"
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
                </div>
                <p className="mt-2">Samara Montessori & High School Website</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/images/rental.png"
                    alt="Rental Website"
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
                </div>
                <p className="mt-2">Rental Listings Website (React + Tailwind)</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/images/rahab.png"
                    alt="Voting Website"
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
                </div>
                <p className="mt-2">Online Voting Platform (HTML, CSS, JS)</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/images/turfind.png"
                    alt="Real Estate Website"
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
                </div>
                <p className="mt-2">Real Estate Login and Signuo Page [frontend] (HTML, CSS, JS)</p>
              </SwiperSlide>
            </Swiper>
        </section>

        <section className="p-10">
          <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
          <form action="#" className="max-w-md mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" required />
            <input type="email" placeholder="Email" className="p-2 border rounded" required />
            <textarea placeholder="Your message" rows={4} className="p-2 border rounded" required></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Send Message
            </button>
          </form>
        </section>

        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Olujames Taiwo Henry. Built with ❤️ using Next.js.
        </footer>
      </main>
    </>
  );
}