import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Heart, 
  Quote, 
  MapPin, 
  Calendar,
  UserCheck,
  MessageCircle,
  Camera,
  Mic,
  UserCheck as HandshakeIcon,
  ArrowRight,
  Play,
  Volume2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import Badge from './ui/Badge'
import Button from './ui/Button'

const CommunityVoices = ({ language }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeCoDesignStep, setActiveCoDesignStep] = useState(0)

  const t = {
    es: {
      title: 'Voces de la Comunidad',
      subtitle: 'Co-creación y Participación Horizontal',
      description: 'Nuestro proyecto se construye desde y con la comunidad. Estas son las voces reales de los residentes de Mexicali que guían nuestro trabajo.',
      testimonials: {
        title: 'Testimonios Comunitarios',
        subtitle: 'La comunidad como protagonista'
      },
      codesign: {
        title: 'Proceso de Co-diseño',
        subtitle: 'Metodología Participativa',
        description: 'Implementamos un enfoque de Investigación Participativa Basada en la Comunidad (CBPR) que garantiza que las voces locales guíen cada decisión del proyecto.'
      },
      methodology: {
        title: 'Metodología Horizontal',
        principles: [
          'Diálogo de saberes entre conocimiento científico y tradicional',
          'Toma de decisiones compartida en todas las fases',
          'Capacitación mutua: comunidad aprende ciencia, científicos aprenden contexto local',
          'Empoderamiento sostenible a través del desarrollo de capacidades locales'
        ]
      },
      partnership: {
        title: 'Alianzas Comunitarias Establecidas',
        description: 'Colaboraciones formales con organizaciones de base comunitaria'
      }
    },
    en: {
      title: 'Community Voices',
      subtitle: 'Co-creation and Horizontal Participation',
      description: 'Our project is built from and with the community. These are the real voices of Mexicali residents who guide our work.',
      testimonials: {
        title: 'Community Testimonials',
        subtitle: 'The community as protagonist'
      },
      codesign: {
        title: 'Co-design Process',
        subtitle: 'Participatory Methodology',
        description: 'We implement a Community-Based Participatory Research (CBPR) approach that ensures local voices guide every project decision.'
      },
      methodology: {
        title: 'Horizontal Methodology',
        principles: [
          'Dialogue of knowledge between scientific and traditional wisdom',
          'Shared decision-making in all phases',
          'Mutual training: community learns science, scientists learn local context',
          'Sustainable empowerment through local capacity building'
        ]
      },
      partnership: {
        title: 'Established Community Partnerships',
        description: 'Formal collaborations with community-based organizations'
      }
    }
  }

  const currentT = t[language] || t.en

  const testimonials = [
    {
      name: language === 'es' ? 'María Elena Vásquez' : 'María Elena Vásquez',
      role: language === 'es' ? 'Líder Comunitaria, Colonia Solidaridad' : 'Community Leader, Colonia Solidaridad',
      location: 'Mexicali, B.C.',
      quote: language === 'es' 
        ? 'Por años hemos vivido con la contaminación del Río Nuevo afectando a nuestras familias. Este proyecto nos da esperanza porque por primera vez alguien viene a preguntarnos qué necesitamos, no solo a decirnos qué van a hacer.'
        : 'For years we have lived with New River contamination affecting our families. This project gives us hope because for the first time someone comes to ask us what we need, not just tell us what they are going to do.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0ca6ee54a63?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      involvement: language === 'es' ? 'Participante en talleres de co-diseño' : 'Participant in co-design workshops',
      priority: language === 'es' ? 'Salud infantil y calidad del aire' : 'Child health and air quality'
    },
    {
      name: language === 'es' ? 'Carlos Mendoza' : 'Carlos Mendoza',
      role: language === 'es' ? 'Agricultor, Valle de Mexicali' : 'Farmer, Mexicali Valley',
      location: 'Valle de Mexicali',
      quote: language === 'es'
        ? 'Mis abuelos conocían plantas que limpiaban la tierra. Cuando los científicos vinieron a escuchar estos conocimientos ancestrales, supe que este proyecto era diferente. Aquí somos socios, no solo objetos de estudio.'
        : 'My grandparents knew plants that cleaned the land. When the scientists came to listen to this ancestral knowledge, I knew this project was different. Here we are partners, not just study subjects.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      involvement: language === 'es' ? 'Consultor en conocimiento tradicional' : 'Traditional knowledge consultant',
      priority: language === 'es' ? 'Remediación de suelos agrícolas' : 'Agricultural soil remediation'
    },
    {
      name: language === 'es' ? 'Ana Lucía Herrera' : 'Ana Lucía Herrera',
      role: language === 'es' ? 'Enfermera, Centro de Salud Comunitario' : 'Nurse, Community Health Center',
      location: 'Mexicali Centro',
      quote: language === 'es'
        ? 'Veo diariamente cómo la contaminación afecta especialmente a nuestros niños y ancianos. Este proyecto no solo limpia el ambiente - nos enseña a ser científicos ciudadanos, a monitorear nuestra propia salud ambiental.'
        : 'I see daily how pollution especially affects our children and elderly. This project not only cleans the environment - it teaches us to be citizen scientists, to monitor our own environmental health.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      involvement: language === 'es' ? 'Coordinadora de salud comunitaria' : 'Community health coordinator',
      priority: language === 'es' ? 'Monitoreo de salud respiratoria' : 'Respiratory health monitoring'
    },
    {
      name: language === 'es' ? 'Roberto Silva' : 'Roberto Silva',
      role: language === 'es' ? 'Estudiante de Preparatoria' : 'High School Student',
      location: 'Colonia Nueva',
      quote: language === 'es'
        ? 'Antes pensaba que la ciencia era solo para gente rica en universidades. Ahora estoy aprendiendo a usar plantas para limpiar mi propio barrio. Esto me está inspirando a estudiar ingeniería ambiental.'
        : 'I used to think science was only for rich people in universities. Now I am learning to use plants to clean my own neighborhood. This is inspiring me to study environmental engineering.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      involvement: language === 'es' ? 'Participante en programa juvenil' : 'Youth program participant',
      priority: language === 'es' ? 'Educación científica comunitaria' : 'Community science education'
    }
  ]

  const coDesignSteps = [
    {
      step: 1,
      title: language === 'es' ? 'Escucha Comunitaria' : 'Community Listening',
      description: language === 'es' 
        ? 'Reuniones en colonias para identificar prioridades ambientales desde la perspectiva de quienes viven la problemática diariamente'
        : 'Neighborhood meetings to identify environmental priorities from the perspective of those who live the problems daily',
      methods: language === 'es' 
        ? ['Círculos de diálogo', 'Mapeo participativo', 'Entrevistas narrativas', 'Foros abiertos']
        : ['Dialogue circles', 'Participatory mapping', 'Narrative interviews', 'Open forums'],
      outcomes: language === 'es'
        ? 'Agenda comunitaria de prioridades ambientales'
        : 'Community agenda of environmental priorities',
      icon: Mic
    },
    {
      step: 2,
      title: language === 'es' ? 'Co-diseño de Soluciones' : 'Solution Co-design',
      description: language === 'es'
        ? 'Talleres colaborativos donde conocimiento científico y saberes tradicionales se combinan para diseñar intervenciones'
        : 'Collaborative workshops where scientific knowledge and traditional wisdom combine to design interventions',
      methods: language === 'es'
        ? ['Talleres de plantas nativas', 'Diseño participativo', 'Intercambio de saberes', 'Prototipado comunitario']
        : ['Native plant workshops', 'Participatory design', 'Knowledge exchange', 'Community prototyping'],
      outcomes: language === 'es'
        ? 'Planes de intervención co-diseñados'
        : 'Co-designed intervention plans',
      icon: Users
    },
    {
      step: 3,
      title: language === 'es' ? 'Implementación Participativa' : 'Participatory Implementation',
      description: language === 'es'
        ? 'Ejecución conjunta donde la comunidad lidera actividades con apoyo técnico científico'
        : 'Joint execution where the community leads activities with scientific technical support',
      methods: language === 'es'
        ? ['Jardines comunitarios', 'Monitoreo ciudadano', 'Capacitación cruzada', 'Documentación participativa']
        : ['Community gardens', 'Citizen monitoring', 'Cross-training', 'Participatory documentation'],
      outcomes: language === 'es'
        ? 'Capacidades locales fortalecidas'
        : 'Strengthened local capacities',
      icon: HandshakeIcon
    },
    {
      step: 4,
      title: language === 'es' ? 'Evaluación y Adaptación' : 'Evaluation and Adaptation',
      description: language === 'es'
        ? 'Análisis conjunto de resultados y adaptación continua basada en retroalimentación comunitaria'
        : 'Joint analysis of results and continuous adaptation based on community feedback',
      methods: language === 'es'
        ? ['Evaluación participativa', 'Círculos de reflexión', 'Ajustes adaptativos', 'Sistematización de aprendizajes']
        : ['Participatory evaluation', 'Reflection circles', 'Adaptive adjustments', 'Learning systematization'],
      outcomes: language === 'es'
        ? 'Modelo replicable validado comunitariamente'
        : 'Community-validated replicable model',
      icon: UserCheck
    }
  ]

  const partnerships = [
    {
      name: 'Comité Cívico del Valle',
      type: language === 'es' ? 'Organización Binacional' : 'Binational Organization',
      role: language === 'es' ? 'Coordinación de actividades transfronterizas' : 'Cross-border activity coordination',
      established: '2023'
    },
    {
      name: 'Red de Mujeres Activistas',
      type: language === 'es' ? 'Colectivo Feminista Ambiental' : 'Environmental Feminist Collective',
      role: language === 'es' ? 'Liderazgo en justicia ambiental' : 'Environmental justice leadership',
      established: '2023'
    },
    {
      name: 'Cooperativa de Agricultores Orgánicos',
      type: language === 'es' ? 'Organización Productiva' : 'Productive Organization',
      role: language === 'es' ? 'Implementación en campos agrícolas' : 'Agricultural field implementation',
      established: '2024'
    },
    {
      name: 'Colectivo Juventud Verde',
      type: language === 'es' ? 'Organización Estudiantil' : 'Student Organization',
      role: language === 'es' ? 'Educación ambiental en escuelas' : 'Environmental education in schools',
      established: '2024'
    }
  ]

  return (
    <section id="community-voices" className="py-20 bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm">
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
            <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-4">
              {currentT.subtitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {currentT.description}
            </p>
          </div>
        </motion.div>

        {/* Community Testimonials */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.testimonials.title}
            </h3>
            <p className="text-gray-300">
              {currentT.testimonials.subtitle}
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Testimonial Image */}
                  <div className="text-center lg:text-left">
                    <motion.div
                      className="relative inline-block"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <img 
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0 border-4 border-green-400"
                      />
                      <div className="absolute -top-4 -left-4 bg-green-500 rounded-full p-3">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <motion.blockquote
                      key={activeTestimonial}
                      className="text-lg md:text-xl text-gray-300 italic mb-6 leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      "{testimonials[activeTestimonial].quote}"
                    </motion.blockquote>

                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-green-400 font-medium">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonials[activeTestimonial].location}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                          <div className="text-green-300 text-sm font-medium mb-1">
                            {language === 'es' ? 'Participación:' : 'Involvement:'}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {testimonials[activeTestimonial].involvement}
                          </div>
                        </div>
                        <div className="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
                          <div className="text-teal-300 text-sm font-medium mb-1">
                            {language === 'es' ? 'Prioridad:' : 'Priority:'}
                          </div>
                          <div className="text-gray-300 text-sm">
                            {testimonials[activeTestimonial].priority}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setActiveTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-green-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveTestimonial((prev) => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Co-design Process */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.codesign.title}
            </h3>
            <p className="text-gray-300 mb-2">
              {currentT.codesign.subtitle}
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              {currentT.codesign.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coDesignSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setActiveCoDesignStep(index)}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 mb-2">
                    {language === 'es' ? 'Paso' : 'Step'} {step.step}
                  </Badge>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-green-400 text-xs font-medium">
                    {language === 'es' ? 'Métodos:' : 'Methods:'}
                  </div>
                  {step.methods.slice(0, 2).map((method, i) => (
                    <div key={i} className="text-xs text-gray-400">
                      • {method}
                    </div>
                  ))}
                  {step.methods.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{step.methods.length - 2} {language === 'es' ? 'más' : 'more'}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Methodology Principles */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.methodology.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {currentT.methodology.principles.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg p-6 border border-green-500/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                    <HandshakeIcon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {principle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Partnerships */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.partnership.title}
            </h3>
            <p className="text-gray-300">
              {currentT.partnership.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-3 w-fit mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    {partner.name}
                  </h4>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-3 text-xs">
                    {partner.type}
                  </Badge>
                  <p className="text-gray-400 text-xs mb-3">
                    {partner.role}
                  </p>
                  <div className="flex items-center justify-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {partner.established}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityVoices
