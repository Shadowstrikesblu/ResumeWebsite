import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../../data/project";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.slug === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Retour à la page d'acceuil
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="text-gray-600 hover:text-gray-800">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="text-blue-600 hover:text-blue-800">
                    Voir en ligne
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              {project.fullDescription}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Fonctionnalités principales</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.slug === params.id);
  
  if (!project) {
    return {
      title: 'Projet non trouvé'
    };
  }

  return {
    title: `${project.title} - Harvey Mouloundou`,
    description: project.description,
  };
}