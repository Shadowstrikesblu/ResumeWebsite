import React from 'react';
import { Metadata } from 'next';

// Personal Information Constants
const PERSONAL_INFO = {
  name: 'Harvey Mouloundou',
  title: 'Full Stack Developer',
  email: 'hmoulk8@gmail.com',
  location: 'Paris, France',
  phone: '+33768727043',
};

// Professional Summary
const PROFESSIONAL_SUMMARY = `Détenteur d’un diplôme Master 2 CYBER , je suis à la recherche d’un poste de web développer dans
une entreprise ouverte au développement des outils informatiques en ligne avec ma formation. Je
suis motivé et déterminé à relever des défis complexes à même de produire des résultats dignes
d’intérêt pour l’entreprise.`;

// Skills Data
const SKILLS = {
  frontend: ['Maitrise de Framework JS(React,Vue,Next)', 'Programmation en JavaScript, Python, PHP, C++ et C#',
     'Maitrise des technologies de Base de données avec MySQL',
      'Connaissances en Cloud', 'Développement mobile ', 
      'Analyse de données avec Python ou R', 'Game Developer avec Unity'],
  backend: ['Travail en autonomie', 'A l’aise avec les langues', 
    'Inventif', 'Travail en équipe', 
    'Design Pattern', 'Connaissances en Cybersécurité'],
};
const Education = [{
  degree: 'Master 2 CYBER',
  institution: 'Campus Euratechnologies',
  period: '2023 - 2025',
  content: ['Création d\'applications mobiles avec Expo Go et Android Studio, Développement web avec React et Node.js',
            'Formation en cybersécurité et protection des données',
            'Projet de fin d\'études: Mémoire sur l\'utilisation des données personnelles dans les publicités et jeu vidéo réalisé avec Unity',
            'Expérience en Ethical Hacking à l\'aide des plateformes Cisco et Tryhackme',]
},
{
  degree: 'Licence de sciences du numérique',
  institution: 'Institut Catholique de Lille',
  period: '2019 - 2022',
  content: ['Développement web full-stack avec HTML, CSS, JavaScript, PHP, MySQL',
            'Introduction aux algorithmes et structures de données',
            'Projets pratiques incluant la création de sites web et d\'applications simples',
            'Travail en équipe sur des projets de développement logiciel',
  ]
},
{
  degree: 'Baccalauréat Scientifique',
  institution: 'Lycée Dominique Savio',
  period: '2016 - 2019',
  content: ['Section européenne', 'Mention Assez Bien', 'Spécialité Mathématiques', 'Informatique et Création Numérique',
  ]
}
];
const WORK_EXPERIENCE = [
  {
    title: 'Consultant développeur junior',
    company: 'IPASYS',
    period: 'Du 13 Février 2025 au 22 Juin 2025',
    responsibilities: [
      'Création et maintenance de site web en RUBY grâce à la technologie FAVEOD Designer',
    ],
  },
  {
    title: 'Cybersecurity Data Analyst Intern',
    company: 'Schneider Electric',
    period: 'Du 30 Octobre 2023 au 6 Septembre 2024',
    responsibilities: [
      'Création de scripts de détection de machines Schneider Electric connectées à Internet.',
      'Création et gestion d’espaces de stockage de données',
      'Analyse complexe d’informations',
    ],
  },
  {
    title: 'Développeur Web',
    company: 'Wymee',
    period: 'Du 13 Septembre 2021 au 30 avril 2023',
    responsibilities: [
      'Recherches sur les technologies de parseur de CV, particulièrement en langage Java',
      'Création des sites web offrant des facilités sur l’affichage et la compréhension des fichiers JSON, en utilisant les technologies Vue.js et Adonis avec un Backend Java.',
      'Utilisation de différentes technologies Cloud pour héberger un site tels que les Virtual Private Servers (VPS)',
      'Utilisation d’APIs.',
    ],
  },
];

// Projects Data
const PROJECTS = [
  {
    name: 'Site Portfolio',
    description: 'Site qui présente mes compétences, expériences et projets réalisés',
    technologies: ['React', 'Node.js'],
    link: '#',
  },
  {
    name: 'Personal Github',
    description: 'Mon dépôt GitHub personnel où je partage mes projets et contributions open-source',
    technologies: ['JavaScript', 'Java', 'Vue', 'Expo Go'],
    link: 'https://github.com/Shadowstrikesblu',
  },
];

export const metadata: Metadata = {
  title: `Resume - ${PERSONAL_INFO.name}`,
  description: 'Professional resume of a Full Stack Developer with expertise in React, Node.js, and modern web technologies.',
  keywords: 'resume, full stack developer, react, nodejs, typescript, web development',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">{PERSONAL_INFO.name}</h1>
            <p className="text-xl opacity-90 mb-4">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>
        </div>

        <div className="px-8 py-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Objectif
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {PROFESSIONAL_SUMMARY}
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Compétences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frontend.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.backend.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Expériences professionnelles
            </h2>
            
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                    <span className="text-gray-600 font-medium">{job.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Education
            </h2>
            
            <div className="space-y-6">
              {Education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <span className="text-gray-600 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside">
                    {edu.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-gray-600">
            Download PDF version: 
            <a href="#" className="text-blue-600 hover:text-blue-800 ml-2 font-medium">
              resume.pdf
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
