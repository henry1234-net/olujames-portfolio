import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Olujames Taiwo Henry</h1>
          <p className="text-lg mt-4">Computer Scientist | Fullstack Developer</p>
          <p className="mt-8">Welcome to my portfolio website!</p>
          <Image src="/path-to-your-image.jpg" alt="Profile Image" width={150} height={150} className="rounded-full mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;