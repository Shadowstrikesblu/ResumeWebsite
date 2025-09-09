import Link from "next/link";

interface SkillsBubbleProps {
  skills?: string[];
  showAboutLink?: boolean;
  title?: string;
  description?: string;
}

export default function SkillsBubble({ 
  skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Tailwind CSS"],
  showAboutLink = true,
  title = "Mes Compétences",
  description
}: SkillsBubbleProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            {description}
          </p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {skill}
              </p>
            </div>
          ))}
        </div>
        {showAboutLink && (
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              En savoir plus sur moi
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Alternative individual skill bubble component
export function SkillBubble({ skill, className = "" }: { skill: string; className?: string }) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group ${className}`}>
      <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">
        {skill}
      </p>
    </div>
  );
}