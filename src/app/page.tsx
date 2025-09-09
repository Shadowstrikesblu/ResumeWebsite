import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Project data - you can add more projects here
  const projects = [
    {
      id: 1,
      title: "Système de Gestion Lycée",
      description: "Application web pour la gestion administrative d'un établissement scolaire avec interface moderne et fonctionnalités avancées.",
      image: "/Lycee.png",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      description: "Site web personnel moderne développé avec Next.js, showcasing mes compétences et projets.",
      image: "/vc.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      category: "Portfolio"
    },
    {
      id: 3,
      title: "Application E-commerce",
      description: "Plateforme de commerce électronique complète avec gestion des commandes et paiements sécurisés.",
      image: "/profile.jpg", // Placeholder - add your actual project image
      technologies: ["React", "Express", "PostgreSQL"],
      link: "#",
      category: "E-commerce"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bienvenue sur mon{" "}
              <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Je suis Harvey Mouloundou, développeur Full Stack passionné par la création 
              d'applications web modernes et d'expériences utilisateur exceptionnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Resume"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Voir mon CV
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Projets
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets récents qui démontrent mes compétences 
              en développement web et ma passion pour l'innovation technologique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Voir le projet
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mes Compétences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Tailwind CSS"].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              En savoir plus sur moi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
