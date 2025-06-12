const skills = [
  { name: 'Python', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React.js', level: 'Advanced' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Laravel', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-8 grid grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;