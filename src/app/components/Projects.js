const projects = [
  {
    title: 'Rental Listings Website',
    description: 'A comprehensive rental listings platform built with React and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'Online Voting Platform',
    description: 'A secure and intuitive online voting platform built with HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    title: 'Incla Catholic Church Website',
    description: 'A modern, responsive website for a Catholic church developed with Next.js.',
    link: '#',
  },
  {
    title: 'AIBEN CRM System',
    description: 'A custom CRM system built with PHP and HTML for managing clients and internal operations.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline mt-4 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;