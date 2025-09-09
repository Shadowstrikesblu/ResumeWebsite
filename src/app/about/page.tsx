import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">A propos de moi </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Salut, je suis Harvey!</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Je suis un développeur Full Stack passionné, aimant créer des applications web innovantes.
                  Mon parcours dans la technologie a commencé il y a plusieurs années, et j'ai continuellement appris
                  et évolué depuis.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Je me spécialise dans les technologies web modernes, y compris React, Next.js, Node.js et TypeScript.
                  J'aime relever des défis complexes et transformer des idées en réalité grâce à un code propre et efficace.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de lire des livres
                  ou de lire les dernières actualités sur le développement web.
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
                  "L'aimer toujours même s'il n'est plus ici"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
