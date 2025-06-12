import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Olujames Taiwo Henry</div>
        <div className="space-x-6">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;