import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info } from 'lucide-react'

const BioremedationDiagram = ({ language = 'es' }) => {
  const [selectedHotspot, setSelectedHotspot] = useState(null)

  const hotspots = {
    es: [
      {
        id: 'injection',
        x: 15,
        y: 25,
        title: 'Inyección',
        subtitle: '(microbios)',
        description: 'Los microbios beneficiosos se inyectan en el suelo contaminado para iniciar el proceso de biorremediación.',
        details: [
          'Bacterias especializadas en degradar contaminantes',
          'Hongos que descomponen compuestos tóxicos',
          'Microorganismos nativos adaptados al ambiente local'
        ]
      },
      {
        id: 'microbes',
        x: 35,
        y: 45,
        title: 'Microbios',
        subtitle: 'Oxígeno y nutrientes / Dióxido de carbono',
        description: 'Los microorganismos consumen contaminantes y los transforman en productos menos tóxicos.',
        details: [
          'Proceso aeróbico que requiere oxígeno',
          'Conversión de contaminantes en CO₂ y agua',
          'Liberación de nutrientes para las plantas'
        ]
      },
      {
        id: 'recovery',
        x: 85,
        y: 25,
        title: 'Recuperación',
        subtitle: '',
        description: 'El agua limpia se extrae del sistema, libre de contaminantes y lista para uso seguro.',
        details: [
          'Agua purificada naturalmente',
          'Ecosistema restaurado',
          'Vida acuática saludable'
        ]
      },
      {
        id: 'plants',
        x: 70,
        y: 35,
        title: 'Fitorremediación',
        subtitle: 'Plantas nativas',
        description: 'Las plantas nativas del desierto absorben y estabilizan contaminantes del suelo.',
        details: [
          'Mezquite aterciopelado para metales pesados',
          'Chamizo cuatro alas como hiperacumulador',
          'Gobernadora para estabilización a largo plazo'
        ]
      },
      {
        id: 'soil',
        x: 45,
        y: 65,
        title: 'Suelo Contaminado',
        subtitle: 'Zona de tratamiento',
        description: 'El suelo contaminado se trata mediante procesos biológicos y químicos naturales.',
        details: [
          'Degradación de compuestos orgánicos',
          'Inmovilización de metales pesados',
          'Restauración de la estructura del suelo'
        ]
      }
    ],
    en: [
      {
        id: 'injection',
        x: 15,
        y: 25,
        title: 'Injection',
        subtitle: '(microbes)',
        description: 'Beneficial microbes are injected into contaminated soil to initiate the bioremediation process.',
        details: [
          'Specialized bacteria for degrading contaminants',
          'Fungi that break down toxic compounds',
          'Native microorganisms adapted to local environment'
        ]
      },
      {
        id: 'microbes',
        x: 35,
        y: 45,
        title: 'Microbes',
        subtitle: 'Oxygen & nutrients / Carbon Dioxide',
        description: 'Microorganisms consume contaminants and transform them into less toxic products.',
        details: [
          'Aerobic process requiring oxygen',
          'Conversion of contaminants to CO₂ and water',
          'Release of nutrients for plants'
        ]
      },
      {
        id: 'recovery',
        x: 85,
        y: 25,
        title: 'Recovery',
        subtitle: '',
        description: 'Clean water is extracted from the system, free of contaminants and ready for safe use.',
        details: [
          'Naturally purified water',
          'Restored ecosystem',
          'Healthy aquatic life'
        ]
      },
      {
        id: 'plants',
        x: 70,
        y: 35,
        title: 'Phytoremediation',
        subtitle: 'Native plants',
        description: 'Native desert plants absorb and stabilize contaminants from the soil.',
        details: [
          'Velvet mesquite for heavy metals',
          'Four-wing saltbush as hyperaccumulator',
          'Creosote bush for long-term stabilization'
        ]
      },
      {
        id: 'soil',
        x: 45,
        y: 65,
        title: 'Contaminated Soil',
        subtitle: 'Treatment zone',
        description: 'Contaminated soil is treated through natural biological and chemical processes.',
        details: [
          'Degradation of organic compounds',
          'Immobilization of heavy metals',
          'Restoration of soil structure'
        ]
      }
    ]
  }

  const currentHotspots = hotspots[language]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image */}
      <div className="relative">
        <img 
          src="/bioremediation_process.png" 
          alt={language === 'es' ? 'Proceso de Biorremediación' : 'Bioremediation Process'}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        
        {/* Interactive Hotspots */}
        {currentHotspots.map((hotspot) => (
          <motion.button
            key={hotspot.id}
            className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg hover:bg-blue-600 transition-colors cursor-pointer z-10"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setSelectedHotspot(hotspot)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0.7)',
                '0 0 0 10px rgba(59, 130, 246, 0)',
                '0 0 0 0 rgba(59, 130, 246, 0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          >
            <Info className="w-3 h-3 text-white mx-auto" />
          </motion.button>
        ))}
      </div>

      {/* Information Modal */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHotspot(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedHotspot.title}
                  </h3>
                  {selectedHotspot.subtitle && (
                    <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs font-medium mt-1">
                      {selectedHotspot.subtitle}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedHotspot.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {language === 'es' ? 'Características clave:' : 'Key features:'}
                </h4>
                <ul className="space-y-1">
                  {selectedHotspot.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Instructions */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {language === 'es' 
            ? 'Haz clic en los puntos azules para explorar el proceso de biorremediación'
            : 'Click on the blue dots to explore the bioremediation process'
          }
        </p>
      </div>
    </div>
  )
}

export default BioremedationDiagram

