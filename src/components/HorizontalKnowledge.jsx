import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Users, 
  Microscope, 
  BookOpen, 
  Share2, 
  Target,
  Lightbulb,
  Database,
  TrendingUp,
  UserCheck,
  Beaker,
  Eye,
  MapPin,
  Camera,
  FileText,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Network,
  GraduationCap,
  Search,
  BarChart3,
  Smartphone
} from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import Badge from './ui/Badge'
import Button from './ui/Button'

const HorizontalKnowledge = ({ language }) => {
  const [activeKnowledgeType, setActiveKnowledgeType] = useState(0)

  const t = {
    es: {
      title: 'Producción Horizontal de Conocimiento',
      subtitle: 'Ciencia Ciudadana y Democratización del Saber',
      description: 'Nuestro proyecto transforma a la comunidad de objeto de estudio a sujeto investigador, creando conocimiento colaborativo que beneficia tanto a la ciencia como a la sociedad.',
      horizontalProduction: 'Producción Horizontal',
      horizontalDescription: 'El conocimiento se construye en diálogo entre saberes académicos y comunitarios, creando nuevas formas de entender y resolver problemas ambientales.',
      citizenScience: {
        title: 'Componentes de Ciencia Ciudadana',
        subtitle: 'Convirtiendo vecinos en científicos'
      },
      knowledgeTypes: {
        title: 'Tipos de Conocimiento en Diálogo',
        subtitle: 'Diversas formas de saber en conversación'
      },
      capacity: {
        title: 'Desarrollo de Capacidades Científicas',
        description: 'Formación sistemática para empoderar a la comunidad como investigadores'
      },
      outputs: {
        title: 'Productos de Conocimiento',
        description: 'Generación colaborativa de nuevos saberes'
      },
      democratization: {
        title: 'Democratización de la Ciencia',
        description: 'Hacer la ciencia accesible, relevante y apropiable por las comunidades'
      }
    },
    en: {
      title: 'Horizontal Knowledge Production',
      subtitle: 'Citizen Science and Knowledge Democratization',
      description: 'Our project transforms the community from study object to researcher subject, creating collaborative knowledge that benefits both science and society.',
      horizontalProduction: 'Horizontal Production',
      horizontalDescription: 'Knowledge is built in dialogue between academic and community wisdom, creating new ways to understand and solve environmental problems.',
      citizenScience: {
        title: 'Citizen Science Components',
        subtitle: 'Turning neighbors into scientists'
      },
      knowledgeTypes: {
        title: 'Types of Knowledge in Dialogue',
        subtitle: 'Diverse forms of wisdom in conversation'
      },
      capacity: {
        title: 'Scientific Capacity Development',
        description: 'Systematic training to empower community as researchers'
      },
      outputs: {
        title: 'Knowledge Products',
        description: 'Collaborative generation of new knowledge'
      },
      democratization: {
        title: 'Science Democratization',
        description: 'Making science accessible, relevant and appropriable by communities'
      }
    }
  }

  const currentT = t[language] || t.en

  const citizenScienceComponents = [
    {
      component: language === 'es' ? 'Monitoreo Ambiental Participativo' : 'Participatory Environmental Monitoring',
      description: language === 'es' 
        ? 'Residentes capacitados recolectan datos sobre calidad del agua, aire y suelo usando protocolos científicos adaptados.'
        : 'Trained residents collect data on water, air and soil quality using adapted scientific protocols.',
      tools: [
        language === 'es' ? 'Kits de análisis de agua portátiles' : 'Portable water analysis kits',
        language === 'es' ? 'Medidores de pH y conductividad' : 'pH and conductivity meters',
        language === 'es' ? 'Apps móviles para documentación' : 'Mobile apps for documentation',
        language === 'es' ? 'Protocolos de muestreo simples' : 'Simple sampling protocols'
      ],
      trainingHours: 20,
      participants: 200,
      dataPoints: language === 'es' ? '5,000 puntos de datos/año' : '5,000 data points/year',
      icon: Eye,
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      component: language === 'es' ? 'Investigación Colaborativa de Plantas' : 'Collaborative Plant Research',
      description: language === 'es'
        ? 'Comunidad y científicos co-investigan la efectividad de plantas nativas, combinando observación tradicional con métrica científica.'
        : 'Community and scientists co-research native plant effectiveness, combining traditional observation with scientific metrics.',
      tools: [
        language === 'es' ? 'Cámaras digitales para documentación' : 'Digital cameras for documentation',
        language === 'es' ? 'Cuadernos de campo estructurados' : 'Structured field notebooks',
        language === 'es' ? 'Reglas y cintas métricas' : 'Rulers and measuring tapes',
        language === 'es' ? 'Lupas para observación detallada' : 'Magnifying glasses for detailed observation'
      ],
      trainingHours: 15,
      participants: 150,
      dataPoints: language === 'es' ? '3,000 observaciones/año' : '3,000 observations/year',
      icon: Search,
      color: 'from-green-400 to-emerald-400',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      component: language === 'es' ? 'Mapeo Comunitario Participativo' : 'Participatory Community Mapping',
      description: language === 'es'
        ? 'Residentes mapean colectivamente fuentes de contaminación, recursos locales y cambios ambientales usando tecnología GPS.'
        : 'Residents collectively map pollution sources, local resources and environmental changes using GPS technology.',
      tools: [
        language === 'es' ? 'Aplicaciones GPS en smartphones' : 'GPS apps on smartphones',
        language === 'es' ? 'Mapas base impresos' : 'Printed base maps',
        language === 'es' ? 'Marcadores y materiales de dibujo' : 'Markers and drawing materials',
        language === 'es' ? 'Tablets para entrada de datos' : 'Tablets for data entry'
      ],
      trainingHours: 12,
      participants: 100,
      dataPoints: language === 'es' ? '1,000 ubicaciones mapeadas' : '1,000 mapped locations',
      icon: MapPin,
      color: 'from-purple-400 to-indigo-400',
      bgColor: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      component: language === 'es' ? 'Documentación de Conocimiento Local' : 'Local Knowledge Documentation',
      description: language === 'es'
        ? 'Sistematización de saberes tradicionales sobre plantas medicinales, técnicas agrícolas y observaciones ambientales ancestrales.'
        : 'Systematization of traditional knowledge about medicinal plants, agricultural techniques and ancestral environmental observations.',
      tools: [
        language === 'es' ? 'Grabadoras de audio digitales' : 'Digital audio recorders',
        language === 'es' ? 'Cámaras para video testimonios' : 'Cameras for video testimonials',
        language === 'es' ? 'Formularios de entrevista estructurada' : 'Structured interview forms',
        language === 'es' ? 'Software de transcripción' : 'Transcription software'
      ],
      trainingHours: 25,
      participants: 50,
      dataPoints: language === 'es' ? '200 testimonios documentados' : '200 documented testimonials',
      icon: BookOpen,
      color: 'from-orange-400 to-red-400',
      bgColor: 'from-orange-500/10 to-red-500/10',
      borderColor: 'border-orange-500/20'
    }
  ]

  const knowledgeTypes = [
    {
      type: language === 'es' ? 'Científico Académico' : 'Academic Scientific',
      characteristics: [
        language === 'es' ? 'Metodología rigurosa' : 'Rigorous methodology',
        language === 'es' ? 'Revisión por pares' : 'Peer review',
        language === 'es' ? 'Medición cuantitativa' : 'Quantitative measurement',
        language === 'es' ? 'Generalización estadística' : 'Statistical generalization'
      ],
      contribution: language === 'es' 
        ? 'Protocolos, estándares de medición, análisis de laboratorio'
        : 'Protocols, measurement standards, laboratory analysis',
      icon: Microscope,
      color: 'from-blue-400 to-indigo-400'
    },
    {
      type: language === 'es' ? 'Tradicional Local' : 'Traditional Local',
      characteristics: [
        language === 'es' ? 'Observación multigeneracional' : 'Multigenerational observation',
        language === 'es' ? 'Adaptación contextual' : 'Contextual adaptation',
        language === 'es' ? 'Conocimiento holístico' : 'Holistic knowledge',
        language === 'es' ? 'Sabiduría práctica' : 'Practical wisdom'
      ],
      contribution: language === 'es'
        ? 'Especies efectivas, técnicas ancestrales, patrones ambientales'
        : 'Effective species, ancestral techniques, environmental patterns',
      icon: BookOpen,
      color: 'from-green-400 to-emerald-400'
    },
    {
      type: language === 'es' ? 'Experiencial Comunitario' : 'Community Experiential',
      characteristics: [
        language === 'es' ? 'Vivencia directa' : 'Direct experience',
        language === 'es' ? 'Conocimiento situado' : 'Situated knowledge',
        language === 'es' ? 'Soluciones pragmáticas' : 'Pragmatic solutions',
        language === 'es' ? 'Innovación local' : 'Local innovation'
      ],
      contribution: language === 'es'
        ? 'Problemas reales, soluciones viables, necesidades prioritarias'
        : 'Real problems, viable solutions, priority needs',
      icon: Users,
      color: 'from-purple-400 to-pink-400'
    },
    {
      type: language === 'es' ? 'Híbrido Colaborativo' : 'Collaborative Hybrid',
      characteristics: [
        language === 'es' ? 'Síntesis metodológica' : 'Methodological synthesis',
        language === 'es' ? 'Validación cruzada' : 'Cross-validation',
        language === 'es' ? 'Aplicabilidad local' : 'Local applicability',
        language === 'es' ? 'Innovación contextual' : 'Contextual innovation'
      ],
      contribution: language === 'es'
        ? 'Nuevos protocolos, técnicas adaptadas, modelos replicables'
        : 'New protocols, adapted techniques, replicable models',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-400'
    }
  ]

  const capacityBuilding = [
    {
      level: language === 'es' ? 'Básico' : 'Basic',
      duration: language === 'es' ? '4 semanas' : '4 weeks',
      participants: 300,
      curriculum: [
        language === 'es' ? 'Método científico aplicado' : 'Applied scientific method',
        language === 'es' ? 'Técnicas de observación' : 'Observation techniques',
        language === 'es' ? 'Registro de datos' : 'Data recording',
        language === 'es' ? 'Uso de herramientas básicas' : 'Basic tool use'
      ],
      outcome: language === 'es' ? 'Observadores ciudadanos' : 'Citizen observers',
      certificate: language === 'es' ? 'Certificado de Participación' : 'Participation Certificate'
    },
    {
      level: language === 'es' ? 'Intermedio' : 'Intermediate',
      duration: language === 'es' ? '8 semanas' : '8 weeks',
      participants: 150,
      curriculum: [
        language === 'es' ? 'Diseño de experimentos simples' : 'Simple experiment design',
        language === 'es' ? 'Análisis de datos básico' : 'Basic data analysis',
        language === 'es' ? 'Documentación sistemática' : 'Systematic documentation',
        language === 'es' ? 'Comunicación de resultados' : 'Results communication'
      ],
      outcome: language === 'es' ? 'Monitores ambientales' : 'Environmental monitors',
      certificate: language === 'es' ? 'Certificado de Competencia' : 'Competency Certificate'
    },
    {
      level: language === 'es' ? 'Avanzado' : 'Advanced',
      duration: language === 'es' ? '12 semanas' : '12 weeks',
      participants: 50,
      curriculum: [
        language === 'es' ? 'Co-diseño de investigación' : 'Research co-design',
        language === 'es' ? 'Interpretación de resultados' : 'Results interpretation',
        language === 'es' ? 'Facilitación de talleres' : 'Workshop facilitation',
        language === 'es' ? 'Transferencia de conocimiento' : 'Knowledge transfer'
      ],
      outcome: language === 'es' ? 'Investigadores comunitarios' : 'Community researchers',
      certificate: language === 'es' ? 'Certificado de Liderazgo Científico' : 'Scientific Leadership Certificate'
    }
  ]

  const knowledgeOutputs = [
    {
      output: language === 'es' ? 'Base de Datos Comunitaria' : 'Community Database',
      description: language === 'es' 
        ? 'Plataforma digital abierta con datos ambientales recolectados por la comunidad'
        : 'Open digital platform with environmental data collected by the community',
      features: [
        language === 'es' ? 'Interfaz bilingüe accesible' : 'Accessible bilingual interface',
        language === 'es' ? 'Visualizaciones interactivas' : 'Interactive visualizations',
        language === 'es' ? 'Descarga abierta de datos' : 'Open data download',
        language === 'es' ? 'API para desarrolladores' : 'Developer API'
      ],
      users: language === 'es' ? '2,000+ usuarios esperados' : '2,000+ expected users',
      icon: Database
    },
    {
      output: language === 'es' ? 'Protocolo Híbrido de Monitoreo' : 'Hybrid Monitoring Protocol',
      description: language === 'es'
        ? 'Metodología que combina rigor científico con conocimiento local para monitoreo ambiental'
        : 'Methodology combining scientific rigor with local knowledge for environmental monitoring',
      features: [
        language === 'es' ? 'Validado científicamente' : 'Scientifically validated',
        language === 'es' ? 'Culturalmente apropiado' : 'Culturally appropriate',
        language === 'es' ? 'Económicamente viable' : 'Economically viable',
        language === 'es' ? 'Fácilmente replicable' : 'Easily replicable'
      ],
      users: language === 'es' ? 'Potencial uso en 50+ comunidades' : 'Potential use in 50+ communities',
      icon: FileText
    },
    {
      output: language === 'es' ? 'Atlas de Conocimiento Local' : 'Local Knowledge Atlas',
      description: language === 'es'
        ? 'Compilación multimedia de saberes tradicionales sobre medio ambiente y plantas'
        : 'Multimedia compilation of traditional knowledge about environment and plants',
      features: [
        language === 'es' ? 'Videos testimoniales' : 'Testimonial videos',
        language === 'es' ? 'Mapas interactivos' : 'Interactive maps',
        language === 'es' ? 'Guías ilustradas' : 'Illustrated guides',
        language === 'es' ? 'Archivo sonoro' : 'Audio archive'
      ],
      users: language === 'es' ? 'Recurso educativo regional' : 'Regional educational resource',
      icon: Globe
    },
    {
      output: language === 'es' ? 'Publicaciones Colaborativas' : 'Collaborative Publications',
      description: language === 'es'
        ? 'Artículos científicos y material educativo co-autorado con la comunidad'
        : 'Scientific articles and educational materials co-authored with the community',
      features: [
        language === 'es' ? 'Co-autoría comunitaria' : 'Community co-authorship',
        language === 'es' ? 'Acceso abierto' : 'Open access',
        language === 'es' ? 'Formatos múltiples' : 'Multiple formats',
        language === 'es' ? 'Distribución comunitaria' : 'Community distribution'
      ],
      users: language === 'es' ? 'Academia y comunidades' : 'Academia and communities',
      icon: Award
    }
  ]

  const democratizationStrategies = [
    {
      strategy: language === 'es' ? 'Acceso Abierto' : 'Open Access',
      description: language === 'es' 
        ? 'Todos los datos y resultados disponibles sin restricciones'
        : 'All data and results available without restrictions',
      icon: Share2
    },
    {
      strategy: language === 'es' ? 'Lenguaje Accesible' : 'Accessible Language',
      description: language === 'es'
        ? 'Comunicación científica en español y formatos comprensibles'
        : 'Scientific communication in Spanish and understandable formats',
      icon: Users
    },
    {
      strategy: language === 'es' ? 'Capacitación Permanente' : 'Permanent Training',
      description: language === 'es'
        ? 'Programas continuos de desarrollo de capacidades científicas'
        : 'Continuous programs for scientific capacity development',
      icon: GraduationCap
    },
    {
      strategy: language === 'es' ? 'Apropiación Tecnológica' : 'Technology Appropriation',
      description: language === 'es'
        ? 'Comunidad controla herramientas y metodologías científicas'
        : 'Community controls scientific tools and methodologies',
      icon: Smartphone
    }
  ]

  return (
    <section id="horizontal-knowledge" className="py-20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm">
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
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
              {currentT.subtitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {currentT.description}
            </p>
            
            {/* Horizontal Production Highlight */}
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-cyan-300 mb-2 flex items-center justify-center">
                <Network className="h-5 w-5 mr-2" />
                {currentT.horizontalProduction}
              </h4>
              <p className="text-gray-300 text-center italic">
                {currentT.horizontalDescription}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Citizen Science Components */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.citizenScience.title}
            </h3>
            <p className="text-gray-300">
              {currentT.citizenScience.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {citizenScienceComponents.map((component, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${component.color} rounded-lg p-3`}>
                    <component.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {component.component}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{component.trainingHours}h</div>
                    <div className="text-gray-400 text-xs">{language === 'es' ? 'Capacitación' : 'Training'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{component.participants}</div>
                    <div className="text-gray-400 text-xs">{language === 'es' ? 'Participantes' : 'Participants'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 text-xs">{component.dataPoints}</div>
                    <div className="text-gray-400 text-xs">{language === 'es' ? 'Datos' : 'Data'}</div>
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${component.bgColor} rounded-lg p-4 border ${component.borderColor}`}>
                  <h5 className="text-white font-medium mb-3 flex items-center">
                    <Beaker className="h-4 w-4 mr-2 text-cyan-400" />
                    {language === 'es' ? 'Herramientas Científicas' : 'Scientific Tools'}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {component.tools.map((tool, i) => (
                      <div key={i} className="text-gray-300 text-xs flex items-start">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-400 mt-0.5 flex-shrink-0" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Knowledge Types in Dialogue */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.knowledgeTypes.title}
            </h3>
            <p className="text-gray-300">
              {currentT.knowledgeTypes.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeTypes.map((knowledge, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`bg-gradient-to-r ${knowledge.color} rounded-lg p-3 w-fit mx-auto mb-4`}>
                  <knowledge.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-3 text-sm">
                  {knowledge.type}
                </h4>
                
                <div className="space-y-2 mb-4">
                  {knowledge.characteristics.map((char, i) => (
                    <div key={i} className="text-gray-300 text-xs">
                      • {char}
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded p-3 border border-gray-500/20">
                  <div className="text-gray-400 text-xs font-medium mb-1">
                    {language === 'es' ? 'Contribución:' : 'Contribution:'}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {knowledge.contribution}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capacity Building */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.capacity.title}
            </h3>
            <p className="text-gray-300">
              {currentT.capacity.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capacityBuilding.map((level, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-4">
                    {language === 'es' ? 'Nivel' : 'Level'} {level.level}
                  </Badge>
                  <div className="text-2xl font-bold text-white mb-2">{level.participants}</div>
                  <div className="text-gray-400 text-sm">{language === 'es' ? 'participantes' : 'participants'}</div>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-white font-medium mb-3 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-blue-400" />
                    {language === 'es' ? 'Curriculum' : 'Curriculum'} ({level.duration})
                  </h5>
                  <div className="space-y-2">
                    {level.curriculum.map((item, i) => (
                      <div key={i} className="text-gray-300 text-sm flex items-start">
                        <Zap className="h-3 w-3 mr-1 text-yellow-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded p-4 border border-green-500/20">
                  <div className="text-green-400 text-sm font-medium mb-1">
                    {language === 'es' ? 'Resultado:' : 'Outcome:'}
                  </div>
                  <div className="text-gray-300 text-sm mb-2">{level.outcome}</div>
                  <div className="text-green-300 text-xs">{level.certificate}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Knowledge Outputs */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.outputs.title}
            </h3>
            <p className="text-gray-300">
              {currentT.outputs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeOutputs.map((output, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-4">
                  <output.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    {output.output}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {output.description}
                  </p>
                </div>
                
                <div className="space-y-2 mb-4">
                  {output.features.map((feature, i) => (
                    <div key={i} className="text-gray-300 text-xs flex items-start">
                      <CheckCircle className="h-3 w-3 mr-1 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-500/10 rounded p-3 border border-blue-500/20">
                  <div className="text-blue-400 text-xs font-medium">
                    {output.users}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Science Democratization */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {currentT.democratization.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  {currentT.democratization.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {democratizationStrategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 rounded-lg p-4 border border-white/20 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <strategy.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold text-sm mb-2">
                      {strategy.strategy}
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {strategy.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalKnowledge
