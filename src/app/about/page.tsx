import Image from 'next/image';
import MonParcours from './monparcours';
import SectionDeux from './sectiondeux';
import { ABOUT_TEXTS } from '../../data/texts';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">A propos de moi</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salut, je suis Harvey!</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {ABOUT_TEXTS.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {ABOUT_TEXTS.skills}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {ABOUT_TEXTS.hobbies}
                </p>
              </div>
              
              <div className="text-center">
                { 
                <div className="relative w-64 h-64 mx-auto mb-4">
                  <Image
                    src="/profile.jpg"
                    alt="Harvey Mouloundou"
                    fill
                    className="rounded-full object-cover shadow-lg"
                    priority
                  />
                </div>
                }      
                <p className="mt-4 text-gray-600 italic">
                  "{ABOUT_TEXTS.quote}"
                </p>
              </div>
            </div>
            
            {/* Section Mon Parcours */}
            <MonParcours />
            <SectionDeux />
          </div>
        </div>
      </div>
    </div>
  );
}
