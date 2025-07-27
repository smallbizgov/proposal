import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Scale, 
  Heart, 
  Shield, 
  Users, 
  Home,
  Baby,
  MapPin,
  AlertTriangle,
  Target,
  Stethoscope,
  GraduationCap,
  Banknote,
  Factory,
  Wind,
  Droplets,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  UserCheck,
  Globe
} from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import Badge from './ui/Badge'
import Button from './ui/Button'

const EnvironmentalJustice = ({ language }) => {
  const [activeVulnerabilityFocus, setActiveVulnerabilityFocus] = useState(0)

  const t = {
    es: {
      title: 'Justicia Ambiental',
      subtitle: 'Priorizando a las Poblaciones Más Vulnerables',
      description: 'Nuestro proyecto pone en el centro a quienes más sufren las consecuencias de la degradación ambiental, abordando las inequidades sistémicas que perpetúan la injusticia ambiental en Mexicali.',
      coreCommitment: 'Compromiso Central',
      coreDescription: 'Contribuir al bienestar integral de poblaciones en condiciones de vulnerabilidad a través de soluciones ambientales que también abordan la justicia social.',
      vulnerablePopulations: {
        title: 'Poblaciones Vulnerables Priorizadas',
        subtitle: 'Quienes más necesitan y merecen nuestra atención'
      },
      framework: {
        title: 'Marco de Justicia Ambiental',
        principles: [
          'Acceso equitativo a un ambiente sano',
          'Participación significativa en decisiones ambientales',
          'Distribución justa de beneficios y cargas ambientales',
          'Reconocimiento de conocimientos y saberes locales'
        ]
      },
      intersectionality: {
        title: 'Interseccionalidad de Vulnerabilidades',
        description: 'Reconocemos que las vulnerabilidades se entrecruzan y amplifican mutuamente'
      },
      transformativeApproach: {
        title: 'Enfoque Transformador',
        description: 'No solo mitigamos daños - transformamos sistemas para prevenir futuras injusticias',
        strategies: [
          'Fortalecimiento de capacidades locales',
          'Creación de empleos verdes en la comunidad',
          'Desarrollo de liderazgo ambiental local',
          'Construcción de poder comunitario para la incidencia'
        ]
      },
      rightToScience: {
        title: 'Derecho Humano a la Ciencia',
        description: 'Hacemos efectivo el derecho a que los beneficios del conocimiento científico lleguen a quienes más los necesitan'
      }
    },
    en: {
      title: 'Environmental Justice',
      subtitle: 'Prioritizing the Most Vulnerable Populations',
      description: 'Our project centers those who suffer most from environmental degradation, addressing the systemic inequities that perpetuate environmental injustice in Mexicali.',
      coreCommitment: 'Core Commitment',
      coreDescription: 'Contribute to the integral well-being of populations in conditions of vulnerability through environmental solutions that also address social justice.',
      vulnerablePopulations: {
        title: 'Prioritized Vulnerable Populations',
        subtitle: 'Those who most need and deserve our attention'
      },
      framework: {
        title: 'Environmental Justice Framework',
        principles: [
          'Equitable access to a healthy environment',
          'Meaningful participation in environmental decisions',
          'Fair distribution of environmental benefits and burdens',
          'Recognition of local knowledge and wisdom'
        ]
      },
      intersectionality: {
        title: 'Intersectionality of Vulnerabilities',
        description: 'We recognize that vulnerabilities intersect and mutually amplify each other'
      },
      transformativeApproach: {
        title: 'Transformative Approach',
        description: 'We don\'t just mitigate harm - we transform systems to prevent future injustices',
        strategies: [
          'Strengthening local capacities',
          'Creating green jobs in the community',
          'Developing local environmental leadership',
          'Building community power for advocacy'
        ]
      },
      rightToScience: {
        title: 'Human Right to Science',
        description: 'We make effective the right for the benefits of scientific knowledge to reach those who need them most'
      }
    }
  }

  const currentT = t[language] || t.en

  const vulnerablePopulations = [
    {
      group: language === 'es' ? 'Familias en Colonias Periféricas' : 'Families in Peripheral Neighborhoods',
      description: language === 'es' 
        ? 'Residentes de colonias como Solidaridad, Villafontana y Progreso que viven en proximidad directa al Río Nuevo y sufren diariamente los efectos de la contaminación.'
        : 'Residents of neighborhoods like Solidaridad, Villafontana and Progreso who live in direct proximity to the New River and suffer daily effects of pollution.',
      vulnerabilities: [
        language === 'es' ? 'Exposición directa a contaminantes' : 'Direct exposure to contaminants',
        language === 'es' ? 'Limitado acceso a servicios de salud' : 'Limited access to health services',
        language === 'es' ? 'Recursos económicos limitados' : 'Limited economic resources',
        language === 'es' ? 'Infraestructura deficiente' : 'Poor infrastructure'
      ],
      healthImpacts: [
        language === 'es' ? 'Altas tasas de asma infantil' : 'High rates of childhood asthma',
        language === 'es' ? 'Problemas respiratorios crónicos' : 'Chronic respiratory problems',
        language === 'es' ? 'Enfermedades gastrointestinales' : 'Gastrointestinal diseases',
        language === 'es' ? 'Estrés psicológico ambiental' : 'Environmental psychological stress'
      ],
      projectBenefits: [
        language === 'es' ? 'Mejora inmediata de calidad del aire' : 'Immediate improvement in air quality',
        language === 'es' ? 'Espacios verdes comunitarios' : 'Community green spaces',
        language === 'es' ? 'Capacitación en monitoreo ambiental' : 'Environmental monitoring training',
        language === 'es' ? 'Oportunidades de empleo verde' : 'Green employment opportunities'
      ],
      icon: Home,
      color: 'from-red-400 to-orange-400',
      bgColor: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      group: language === 'es' ? 'Trabajadores Agrícolas' : 'Agricultural Workers',
      description: language === 'es'
        ? 'Jornaleros y pequeños agricultores del Valle de Mexicali que enfrentan exposición ocupacional a suelos y agua contaminados mientras mantienen empleos precarios.'
        : 'Day laborers and small farmers in Mexicali Valley who face occupational exposure to contaminated soil and water while maintaining precarious employment.',
      vulnerabilities: [
        language === 'es' ? 'Exposición ocupacional directa' : 'Direct occupational exposure',
        language === 'es' ? 'Empleos sin protección social' : 'Jobs without social protection',
        language === 'es' ? 'Dependencia económica del sector' : 'Economic dependence on the sector',
        language === 'es' ? 'Limitado poder de negociación' : 'Limited bargaining power'
      ],
      healthImpacts: [
        language === 'es' ? 'Dermatitis por contacto químico' : 'Chemical contact dermatitis',
        language === 'es' ? 'Problemas neurológicos' : 'Neurological problems',
        language === 'es' ? 'Cáncer relacionado con pesticidas' : 'Pesticide-related cancer',
        language === 'es' ? 'Problemas reproductivos' : 'Reproductive problems'
      ],
      projectBenefits: [
        language === 'es' ? 'Remediación de suelos agrícolas' : 'Agricultural soil remediation',
        language === 'es' ? 'Técnicas agrícolas más seguras' : 'Safer agricultural techniques',
        language === 'es' ? 'Diversificación económica verde' : 'Green economic diversification',
        language === 'es' ? 'Fortalecimiento organizativo' : 'Organizational strengthening'
      ],
      icon: Users,
      color: 'from-yellow-400 to-amber-400',
      bgColor: 'from-yellow-500/10 to-amber-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      group: language === 'es' ? 'Niños y Ancianos' : 'Children and Elderly',
      description: language === 'es'
        ? 'Poblaciones etariamente vulnerables que sufren desproporcionalmente los efectos de la contaminación debido a sistemas inmunológicos comprometidos o en desarrollo.'
        : 'Age-vulnerable populations who disproportionately suffer the effects of pollution due to compromised or developing immune systems.',
      vulnerabilities: [
        language === 'es' ? 'Sistemas inmunológicos vulnerables' : 'Vulnerable immune systems',
        language === 'es' ? 'Mayor tiempo en entornos contaminados' : 'More time in polluted environments',
        language === 'es' ? 'Menor capacidad de autoprotección' : 'Lower self-protection capacity',
        language === 'es' ? 'Dependencia de cuidadores' : 'Dependence on caregivers'
      ],
      healthImpacts: [
        language === 'es' ? 'Desarrollo cognitivo afectado' : 'Affected cognitive development',
        language === 'es' ? 'Enfermedades respiratorias severas' : 'Severe respiratory diseases',
        language === 'es' ? 'Alergias y sensibilidades múltiples' : 'Allergies and multiple sensitivities',
        language === 'es' ? 'Deterioro acelerado de salud' : 'Accelerated health deterioration'
      ],
      projectBenefits: [
        language === 'es' ? 'Ambientes escolares más saludables' : 'Healthier school environments',
        language === 'es' ? 'Programas educativos especializados' : 'Specialized educational programs',
        language === 'es' ? 'Monitoreo de salud comunitaria' : 'Community health monitoring',
        language === 'es' ? 'Espacios de recreación seguros' : 'Safe recreation spaces'
      ],
      icon: Baby,
      color: 'from-pink-400 to-purple-400',
      bgColor: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      group: language === 'es' ? 'Mujeres Jefas de Familia' : 'Female Heads of Household',
      description: language === 'es'
        ? 'Mujeres que lideran hogares monoparentales en contextos de vulnerabilidad económica y enfrentan múltiples cargas de cuidado mientras gestionan impactos ambientales.'
        : 'Women who lead single-parent households in contexts of economic vulnerability and face multiple care burdens while managing environmental impacts.',
      vulnerabilities: [
        language === 'es' ? 'Doble/triple carga de trabajo' : 'Double/triple work burden',
        language === 'es' ? 'Recursos económicos limitados' : 'Limited economic resources',
        language === 'es' ? 'Responsabilidad total de cuidados' : 'Total care responsibility',
        language === 'es' ? 'Menor acceso a espacios de decisión' : 'Less access to decision-making spaces'
      ],
      healthImpacts: [
        language === 'es' ? 'Estrés crónico multifactorial' : 'Multifactorial chronic stress',
        language === 'es' ? 'Problemas de salud mental' : 'Mental health problems',
        language === 'es' ? 'Agotamiento físico' : 'Physical exhaustion',
        language === 'es' ? 'Descuido de autocuidado' : 'Self-care neglect'
      ],
      projectBenefits: [
        language === 'es' ? 'Oportunidades de liderazgo' : 'Leadership opportunities',
        language === 'es' ? 'Ingresos por trabajos verdes' : 'Income from green jobs',
        language === 'es' ? 'Redes de apoyo comunitario' : 'Community support networks',
        language === 'es' ? 'Capacitación y empoderamiento' : 'Training and empowerment'
      ],
      icon: Heart,
      color: 'from-teal-400 to-cyan-400',
      bgColor: 'from-teal-500/10 to-cyan-500/10',
      borderColor: 'border-teal-500/20'
    }
  ]

  const intersectionalFactors = [
    {
      factor: language === 'es' ? 'Pobreza' : 'Poverty',
      description: language === 'es' ? 'Limita acceso a alternativas y cuidados de salud' : 'Limits access to alternatives and healthcare',
      icon: Banknote
    },
    {
      factor: language === 'es' ? 'Género' : 'Gender',
      description: language === 'es' ? 'Roles diferenciados aumentan exposición y responsabilidades' : 'Differentiated roles increase exposure and responsibilities',
      icon: Users
    },
    {
      factor: language === 'es' ? 'Edad' : 'Age',
      description: language === 'es' ? 'Niños y ancianos son más susceptibles a contaminantes' : 'Children and elderly are more susceptible to contaminants',
      icon: Baby
    },
    {
      factor: language === 'es' ? 'Ubicación' : 'Location',
      description: language === 'es' ? 'Proximidad a fuentes de contaminación' : 'Proximity to pollution sources',
      icon: MapPin
    },
    {
      factor: language === 'es' ? 'Educación' : 'Education',
      description: language === 'es' ? 'Afecta conocimiento de riesgos y opciones de protección' : 'Affects knowledge of risks and protection options',
      icon: GraduationCap
    },
    {
      factor: language === 'es' ? 'Empleo' : 'Employment',
      description: language === 'es' ? 'Trabajos precarios limitan capacidad de evitar exposición' : 'Precarious jobs limit ability to avoid exposure',
      icon: Factory
    }
  ]

  const justiceIndicators = [
    {
      indicator: language === 'es' ? 'Participación Comunitaria' : 'Community Participation',
      current: '15%',
      target: '85%',
      description: language === 'es' ? 'Porcentaje de decisiones ambientales con participación significativa de la comunidad' : 'Percentage of environmental decisions with meaningful community participation'
    },
    {
      indicator: language === 'es' ? 'Acceso a Información' : 'Access to Information',
      current: '25%',
      target: '90%',
      description: language === 'es' ? 'Familias con acceso a información ambiental en formatos accesibles' : 'Families with access to environmental information in accessible formats'
    },
    {
      indicator: language === 'es' ? 'Beneficios Locales' : 'Local Benefits',
      current: '10%',
      target: '75%',
      description: language === 'es' ? 'Porcentaje de beneficios del proyecto que permanecen en la comunidad' : 'Percentage of project benefits that remain in the community'
    },
    {
      indicator: language === 'es' ? 'Capacidades Locales' : 'Local Capacities',
      current: '20%',
      target: '80%',
      description: language === 'es' ? 'Nivel de capacidades técnicas desarrolladas localmente' : 'Level of technical capacities developed locally'
    }
  ]

  return (
    <section id="environmental-justice" className="py-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm">
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
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">
              {currentT.subtitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {currentT.description}
            </p>
            
            {/* Core Commitment Highlight */}
            <motion.div 
              className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-indigo-300 mb-2 flex items-center justify-center">
                <Scale className="h-5 w-5 mr-2" />
                {currentT.coreCommitment}
              </h4>
              <p className="text-gray-300 text-center italic">
                {currentT.coreDescription}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vulnerable Populations Focus */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.vulnerablePopulations.title}
            </h3>
            <p className="text-gray-300">
              {currentT.vulnerablePopulations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vulnerablePopulations.map((population, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 cursor-pointer ${
                  activeVulnerabilityFocus === index ? 'ring-2 ring-indigo-400' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveVulnerabilityFocus(index)}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${population.color} rounded-lg p-3`}>
                    <population.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {population.group}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {population.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`bg-gradient-to-r ${population.bgColor} rounded-lg p-4 border ${population.borderColor}`}>
                    <h5 className="text-white font-medium mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-red-400" />
                      {language === 'es' ? 'Vulnerabilidades' : 'Vulnerabilities'}
                    </h5>
                    <div className="space-y-1">
                      {population.vulnerabilities.map((vuln, i) => (
                        <div key={i} className="text-gray-300 text-xs flex items-start">
                          <span className="text-red-400 mr-1">•</span>
                          {vuln}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-gradient-to-r ${population.bgColor} rounded-lg p-4 border ${population.borderColor}`}>
                    <h5 className="text-white font-medium mb-3 flex items-center">
                      <Stethoscope className="h-4 w-4 mr-2 text-orange-400" />
                      {language === 'es' ? 'Impactos en Salud' : 'Health Impacts'}
                    </h5>
                    <div className="space-y-1">
                      {population.healthImpacts.map((impact, i) => (
                        <div key={i} className="text-gray-300 text-xs flex items-start">
                          <span className="text-orange-400 mr-1">•</span>
                          {impact}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20 mt-4`}>
                  <h5 className="text-white font-medium mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    {language === 'es' ? 'Beneficios del Proyecto' : 'Project Benefits'}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {population.projectBenefits.map((benefit, i) => (
                      <div key={i} className="text-gray-300 text-xs flex items-start">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-400 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environmental Justice Framework */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.framework.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentT.framework.principles.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-6 border border-indigo-500/20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Scale className="h-8 w-8 text-indigo-400 mx-auto mb-4" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {principle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Intersectionality */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.intersectionality.title}
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {currentT.intersectionality.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {intersectionalFactors.map((factor, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <factor.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-medium text-sm mb-2">
                  {factor.factor}
                </h4>
                <p className="text-gray-400 text-xs">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transformative Approach */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.transformativeApproach.title}
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              {currentT.transformativeApproach.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentT.transformativeApproach.strategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg p-6 border border-purple-500/20"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-full p-2 flex-shrink-0">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {strategy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Justice Indicators */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {language === 'es' ? 'Indicadores de Justicia Ambiental' : 'Environmental Justice Indicators'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {justiceIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-sm">
                  {indicator.indicator}
                </h4>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-red-400">{language === 'es' ? 'Actual' : 'Current'}</span>
                    <span className="text-green-400">{language === 'es' ? 'Meta' : 'Target'}</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(parseInt(indicator.current) / parseInt(indicator.target)) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-red-300">{indicator.current}</span>
                    <span className="text-green-300">{indicator.target}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed">
                  {indicator.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right to Science */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 p-8">
            <CardContent className="p-0 text-center">
              <Globe className="h-12 w-12 text-indigo-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentT.rightToScience.title}
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                {currentT.rightToScience.description}
              </p>
              
              <motion.div 
                className="mt-8 flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-6 py-2 text-sm">
                  {language === 'es' ? 'Artículo 27 - Declaración Universal de Derechos Humanos' : 'Article 27 - Universal Declaration of Human Rights'}
                </Badge>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default EnvironmentalJustice
