import React from 'react'
import { motion } from 'framer-motion'
import { 
  Microscope, 
  Heart, 
  Users, 
  BookOpen, 
  Leaf, 
  TreePine,
  Target,
  ArrowRight,
  Lightbulb,
  Globe,
  Scale,
  UserCheck
} from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import Badge from './ui/Badge'

const InterdisciplinaryShowcase = ({ language }) => {
  const t = {
    es: {
      title: 'Enfoque Interdisciplinario',
      subtitle: 'Ciencias y Humanidades: Una Sinergia Transformadora',
      description: 'Nuestro proyecto integra metodologías científicas rigurosas con perspectivas humanísticas profundas para crear soluciones que no solo restauran el medio ambiente, sino que también empoderan a las comunidades.',
      coreLogic: 'Lógica Operacional Central',
      coreDescription: 'La interdisciplinariedad no es un complemento - es el principio organizador fundamental que impulsa cada aspecto de nuestro proyecto.',
      science: {
        title: 'Ciencias',
        subtitle: 'Rigor Técnico & Innovación',
        items: [
          'Fitorremediación avanzada',
          'Química ambiental',
          'Microbiología del suelo',
          'Monitoreo de contaminantes',
          'Diseño experimental',
          'Análisis de datos'
        ]
      },
      humanities: {
        title: 'Humanidades',
        subtitle: 'Justicia Social & Empoderamiento',
        items: [
          'Justicia ambiental',
          'Narrativas comunitarias',
          'Conocimiento tradicional',
          'Participación ciudadana',
          'Comunicación intercultural',
          'Preservación cultural'
        ]
      },
      integration: {
        title: 'Integración Transformadora',
        examples: [
          {
            title: 'Co-creación de Conocimiento',
            description: 'Combinamos investigación científica con saberes comunitarios para desarrollar soluciones culturalmente apropiadas',
            icon: Lightbulb
          },
          {
            title: 'Narrativas de la Ciencia',
            description: 'Utilizamos storytelling y testimonios para hacer accesible el conocimiento científico complejo',
            icon: BookOpen
          },
          {
            title: 'Justicia Ambiental Aplicada',
            description: 'Priorizamos comunidades vulnerables usando criterios tanto científicos como de equidad social',
            icon: Scale
          },
          {
            title: 'Educación Participativa',
            description: 'Diseñamos programas educativos que respetan tanto el rigor científico como las formas de aprendizaje comunitarias',
            icon: Users
          }
        ]
      },
      outcomes: {
        title: 'Resultados Esperados',
        items: [
          'Soluciones técnicamente robustas y culturalmente apropiadas',
          'Empoderamiento comunitario sostenible',
          'Puentes entre academia y comunidad',
          'Modelo replicable de colaboración interdisciplinaria'
        ]
      }
    },
    en: {
      title: 'Interdisciplinary Approach',
      subtitle: 'Science and Humanities: A Transformative Synergy',
      description: 'Our project integrates rigorous scientific methodologies with deep humanistic perspectives to create solutions that not only restore the environment but also empower communities.',
      coreLogic: 'Core Operational Logic',
      coreDescription: 'Interdisciplinarity is not an add-on - it is the fundamental organizing principle that drives every aspect of our project.',
      science: {
        title: 'Sciences',
        subtitle: 'Technical Rigor & Innovation',
        items: [
          'Advanced phytoremediation',
          'Environmental chemistry',
          'Soil microbiology',
          'Contaminant monitoring',
          'Experimental design',
          'Data analysis'
        ]
      },
      humanities: {
        title: 'Humanities',
        subtitle: 'Social Justice & Empowerment',
        items: [
          'Environmental justice',
          'Community narratives',
          'Traditional knowledge',
          'Citizen participation',
          'Intercultural communication',
          'Cultural preservation'
        ]
      },
      integration: {
        title: 'Transformative Integration',
        examples: [
          {
            title: 'Knowledge Co-creation',
            description: 'We combine scientific research with community wisdom to develop culturally appropriate solutions',
            icon: Lightbulb
          },
          {
            title: 'Science Storytelling',
            description: 'We use storytelling and testimonials to make complex scientific knowledge accessible',
            icon: BookOpen
          },
          {
            title: 'Applied Environmental Justice',
            description: 'We prioritize vulnerable communities using both scientific and social equity criteria',
            icon: Scale
          },
          {
            title: 'Participatory Education',
            description: 'We design educational programs that respect both scientific rigor and community learning approaches',
            icon: Users
          }
        ]
      },
      outcomes: {
        title: 'Expected Outcomes',
        items: [
          'Technically robust and culturally appropriate solutions',
          'Sustainable community empowerment',
          'Bridges between academia and community',
          'Replicable model of interdisciplinary collaboration'
        ]
      }
    }
  }

  const currentT = t[language] || t.en

  return (
    <section id="interdisciplinary" className="py-20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {currentT.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
              {currentT.subtitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {currentT.description}
            </p>
            
            {/* Core Logic Highlight */}
            <motion.div 
              className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-purple-300 mb-2 flex items-center justify-center">
                <Target className="h-5 w-5 mr-2" />
                {currentT.coreLogic}
              </h4>
              <p className="text-gray-300 text-center italic">
                {currentT.coreDescription}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Science and Humanities Columns */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Science Column */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Microscope className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  {currentT.science.title}
                </h3>
                <p className="text-gray-300">
                  {currentT.science.subtitle}
                </p>
              </div>
              <div className="space-y-3">
                {currentT.science.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Leaf className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Humanities Column */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-400 mb-2">
                  {currentT.humanities.title}
                </h3>
                <p className="text-gray-300">
                  {currentT.humanities.subtitle}
                </p>
              </div>
              <div className="space-y-3">
                {currentT.humanities.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-red-500/10 rounded-lg p-3 border border-red-500/20"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Users className="h-4 w-4 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Integration Examples */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            {currentT.integration.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentT.integration.examples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-3">
                    <example.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {example.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {example.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            {currentT.outcomes.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {currentT.outcomes.items.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg p-4 border border-purple-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <UserCheck className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Integration Diagram */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Central Integration Circle */}
              <div className="relative z-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                <Target className="h-12 w-12 text-white" />
              </div>
              
              {/* Connecting Elements */}
              <div className="absolute top-16 left-0 right-0 flex justify-between items-center">
                <motion.div 
                  className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <Microscope className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                    {currentT.science.title}
                  </Badge>
                </motion.div>
                
                <motion.div 
                  className="bg-red-500/20 rounded-lg p-4 border border-red-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <Heart className="h-8 w-8 text-red-400 mx-auto mb-2" />
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                    {currentT.humanities.title}
                  </Badge>
                </motion.div>
              </div>
              
              {/* Arrow connections */}
              <ArrowRight className="absolute top-24 left-24 h-6 w-6 text-purple-400 transform rotate-45" />
              <ArrowRight className="absolute top-24 right-24 h-6 w-6 text-purple-400 transform -rotate-45" style={{transform: 'scaleX(-1) rotate(-45deg)'}} />
            </div>
            
            <p className="text-gray-300 text-sm mt-8 italic">
              {language === 'es' 
                ? 'Integración como lógica operacional central' 
                : 'Integration as core operational logic'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InterdisciplinaryShowcase
