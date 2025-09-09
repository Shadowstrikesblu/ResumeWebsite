import Image from "next/image";
import Link from "next/link";
import { ProjectsSection } from "@/components/Card";
import SkillsBubble from "@/components/Skillsbubble";
import { features } from "process";
import { projects } from "../data/project";

export default function Home() {
  // Project data - you can add more projects here
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
      <ProjectsSection projects={projects} />

      {/* Skills Preview Section */}
      <SkillsBubble />
    </div>
  );
}
