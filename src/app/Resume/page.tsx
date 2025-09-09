import React from 'react';
import { Metadata } from 'next';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY, SKILLS, WORK_EXPERIENCE, Education, PROJECTS } from '../../data/resume'

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
              Projets Personnels
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
            Télécharger la version PDF :
            <a href="#" className="text-blue-600 hover:text-blue-800 ml-2 font-medium">
              resume.pdf
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
