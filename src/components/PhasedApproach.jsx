import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  DollarSign, 
  Target, 
  Users, 
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Building,
  Sprout,
  TreePine,
  MapPin,
  Clock,
  BarChart3,
  FileText,
  Award,
  Zap,
  Scale
} from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import Badge from './ui/Badge'
import Button from './ui/Button'

const PhasedApproach = ({ language }) => {
  const [activePhase, setActivePhase] = useState(0)

  const t = {
    es: {
      title: 'Enfoque Faseado Estratégico',
      subtitle: 'Dos Años, Dos Etapas, Una Transformación',
      description: 'Nuestro proyecto sigue la estructura de financiamiento bifásica de Secihti, diseñada para maximizar el impacto a través de pilotaje cuidadoso y escalamiento estratégico.',
      fundingLogic: 'Lógica del Financiamiento',
      fundingDescription: 'La estructura de financiamiento posterior (back-loaded) refleja la expectativa de Secihti de un enfoque de pilotaje seguido de implementación a gran escala.',
      phases: {
        title: 'Fases del Proyecto',
        subtitle: 'De la semilla al bosque'
      },
      timeline: {
        title: 'Cronograma Integrado',
        subtitle: 'Actividades sincronizadas para máximo impacto'
      },
      sustainability: {
        title: 'Transición a la Sostenibilidad',
        description: 'Cómo aseguramos que los beneficios perduren más allá del financiamiento'
      },
      riskMitigation: {
        title: 'Mitigación de Riesgos',
        description: 'Estrategias para abordar desafíos potenciales en cada fase'
      }
    },
    en: {
      title: 'Strategic Phased Approach',
      subtitle: 'Two Years, Two Stages, One Transformation',
      description: 'Our project follows Secihti\'s bifurcated funding structure, designed to maximize impact through careful piloting and strategic scaling.',
      fundingLogic: 'Funding Logic',
      fundingDescription: 'The back-loaded funding structure reflects Secihti\'s expectation of a piloting approach followed by large-scale implementation.',
      phases: {
        title: 'Project Phases',
        subtitle: 'From seed to forest'
      },
      timeline: {
        title: 'Integrated Timeline',
        subtitle: 'Synchronized activities for maximum impact'
      },
      sustainability: {
        title: 'Transition to Sustainability',
        description: 'How we ensure benefits endure beyond funding'
      },
      riskMitigation: {
        title: 'Risk Mitigation',
        description: 'Strategies to address potential challenges in each phase'
      }
    }
  }

  const currentT = t[language] || t.en

  const phases = [
    {
      phase: 1,
      year: '2025',
      title: language === 'es' ? 'Pilotaje y Co-diseño' : 'Piloting and Co-design',
      subtitle: language === 'es' ? 'Fundamentos Sólidos' : 'Solid Foundations',
      budget: '$200,000 MXN',
      budgetNote: language === 'es' ? 'Financiamiento inicial para establecer bases' : 'Initial funding to establish foundations',
      duration: language === 'es' ? '12 meses' : '12 months',
      icon: Sprout,
      color: 'from-green-400 to-emerald-400',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
      objectives: [
        language === 'es' ? 'Establecer alianzas comunitarias formales' : 'Establish formal community partnerships',
        language === 'es' ? 'Realizar evaluación integral de necesidades' : 'Conduct comprehensive needs assessment',
        language === 'es' ? 'Implementar parcelas piloto de fitorremediación' : 'Implement phytoremediation pilot plots',
        language === 'es' ? 'Co-diseñar jardines comunitarios' : 'Co-design community gardens',
        language === 'es' ? 'Desarrollar capacidades locales iniciales' : 'Develop initial local capacities'
      ],
      deliverables: [
        language === 'es' ? 'Acuerdos de colaboración firmados' : 'Signed collaboration agreements',
        language === 'es' ? 'Mapeo detallado de contaminantes' : 'Detailed contaminant mapping',
        language === 'es' ? '3 sitios piloto funcionando' : '3 functioning pilot sites',
        language === 'es' ? 'Curriculum educativo inicial' : 'Initial educational curriculum',
        language === 'es' ? 'Reporte de viabilidad técnica' : 'Technical feasibility report'
      ],
      activities: [
        {
          month: language === 'es' ? 'Meses 1-3' : 'Months 1-3',
          focus: language === 'es' ? 'Movilización y Alianzas' : 'Mobilization and Partnerships',
          tasks: [
            language === 'es' ? 'Formalizar equipo del proyecto' : 'Formalize project team',
            language === 'es' ? 'Establecer alianzas con organizaciones comunitarias' : 'Establish partnerships with community organizations',
            language === 'es' ? 'Realizar mapeo de actores y recursos' : 'Conduct stakeholder and resource mapping'
          ]
        },
        {
          month: language === 'es' ? 'Meses 4-6' : 'Months 4-6',
          focus: language === 'es' ? 'Evaluación y Diseño' : 'Assessment and Design',
          tasks: [
            language === 'es' ? 'Evaluación integral de sitios contaminados' : 'Comprehensive assessment of contaminated sites',
            language === 'es' ? 'Talleres de co-diseño con la comunidad' : 'Co-design workshops with community',
            language === 'es' ? 'Selección de especies de plantas nativas' : 'Selection of native plant species'
          ]
        },
        {
          month: language === 'es' ? 'Meses 7-9' : 'Months 7-9',
          focus: language === 'es' ? 'Implementación Piloto' : 'Pilot Implementation',
          tasks: [
            language === 'es' ? 'Establecimiento de parcelas piloto' : 'Establishment of pilot plots',
            language === 'es' ? 'Inicio de jardines comunitarios' : 'Launch of community gardens',
            language === 'es' ? 'Primeros talleres educativos' : 'First educational workshops'
          ]
        },
        {
          month: language === 'es' ? 'Meses 10-12' : 'Months 10-12',
          focus: language === 'es' ? 'Evaluación y Planificación' : 'Evaluation and Planning',
          tasks: [
            language === 'es' ? 'Monitoreo de efectividad de plantas' : 'Monitoring plant effectiveness',
            language === 'es' ? 'Evaluación de impacto comunitario' : 'Community impact evaluation',
            language === 'es' ? 'Planificación detallada de Fase 2' : 'Detailed Phase 2 planning'
          ]
        }
      ],
      successMetrics: [
        language === 'es' ? '85% de supervivencia de plantas piloto' : '85% pilot plant survival rate',
        language === 'es' ? '150 familias participando activamente' : '150 families actively participating',
        language === 'es' ? '3 jardines comunitarios funcionando' : '3 functioning community gardens',
        language === 'es' ? '20% reducción inicial de contaminantes' : '20% initial contaminant reduction'
      ]
    },
    {
      phase: 2,
      year: '2026',
      title: language === 'es' ? 'Implementación y Escalamiento' : 'Implementation and Scaling',
      subtitle: language === 'es' ? 'Transformación a Gran Escala' : 'Large-Scale Transformation',
      budget: '$1,000,000 MXN',
      budgetNote: language === 'es' ? 'Financiamiento principal para implementación completa' : 'Main funding for full implementation',
      duration: language === 'es' ? '12 meses' : '12 months',
      icon: TreePine,
      color: 'from-blue-400 to-indigo-400',
      bgColor: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-500/20',
      objectives: [
        language === 'es' ? 'Escalar fitorremediación a 500+ hectáreas' : 'Scale phytoremediation to 500+ hectares',
        language === 'es' ? 'Establecer 15 jardines comunitarios' : 'Establish 15 community gardens',
        language === 'es' ? 'Capacitar 200 ciudadanos científicos' : 'Train 200 citizen scientists',
        language === 'es' ? 'Crear 50 empleos verdes locales' : 'Create 50 local green jobs',
        language === 'es' ? 'Implementar plan de sostenibilidad' : 'Implement sustainability plan'
      ],
      deliverables: [
        language === 'es' ? 'Red regional de fitorremediación' : 'Regional phytoremediation network',
        language === 'es' ? 'Sistema de monitoreo ciudadano' : 'Citizen monitoring system',
        language === 'es' ? 'Cooperativa de trabajos verdes' : 'Green jobs cooperative',
        language === 'es' ? 'Modelo replicable documentado' : 'Documented replicable model',
        language === 'es' ? 'Plan de autosostenibilidad' : 'Self-sustainability plan'
      ],
      activities: [
        {
          month: language === 'es' ? 'Meses 13-15' : 'Months 13-15',
          focus: language === 'es' ? 'Escalamiento Territorial' : 'Territorial Scaling',
          tasks: [
            language === 'es' ? 'Expansión a Zona 1: Corredor Ripario' : 'Expansion to Zone 1: Riparian Corridor',
            language === 'es' ? 'Establecimiento de vivero comunitario' : 'Community nursery establishment',
            language === 'es' ? 'Capacitación masiva de voluntarios' : 'Mass volunteer training'
          ]
        },
        {
          month: language === 'es' ? 'Meses 16-18' : 'Months 16-18',
          focus: language === 'es' ? 'Consolidación Institucional' : 'Institutional Consolidation',
          tasks: [
            language === 'es' ? 'Expansión a Zona 2: Sitios Industriales' : 'Expansion to Zone 2: Industrial Sites',
            language === 'es' ? 'Creación de cooperativa de empleos verdes' : 'Green jobs cooperative creation',
            language === 'es' ? 'Sistema de monitoreo digital implementado' : 'Digital monitoring system implemented'
          ]
        },
        {
          month: language === 'es' ? 'Meses 19-21' : 'Months 19-21',
          focus: language === 'es' ? 'Impacto y Sistematización' : 'Impact and Systematization',
          tasks: [
            language === 'es' ? 'Expansión a Zona 3: Agricultura' : 'Expansion to Zone 3: Agriculture',
            language === 'es' ? 'Evaluación integral de impacto' : 'Comprehensive impact evaluation',
            language === 'es' ? 'Documentación de modelo replicable' : 'Replicable model documentation'
          ]
        },
        {
          month: language === 'es' ? 'Meses 22-24' : 'Months 22-24',
          focus: language === 'es' ? 'Sostenibilidad y Transferencia' : 'Sustainability and Transfer',
          tasks: [
            language === 'es' ? 'Implementación de plan de sostenibilidad' : 'Sustainability plan implementation',
            language === 'es' ? 'Transferencia a organizaciones locales' : 'Transfer to local organizations',
            language === 'es' ? 'Campaña de difusión y replicación' : 'Dissemination and replication campaign'
          ]
        }
      ],
      successMetrics: [
        language === 'es' ? '75% reducción de contaminantes' : '75% contaminant reduction',
        language === 'es' ? '1,200 familias beneficiadas' : '1,200 families benefited',
        language === 'es' ? '15 jardines autosostenibles' : '15 self-sustaining gardens',
        language === 'es' ? '50 empleos verdes permanentes' : '50 permanent green jobs'
      ]
    }
  ]

  const fundingBreakdown = [
    {
      category: language === 'es' ? 'Personal' : 'Personnel',
      phase1: 60000,
      phase2: 400000,
      phase1Percent: 30,
      phase2Percent: 40,
      justification: language === 'es' 
        ? 'Equipo core en Fase 1, expansión de equipo en Fase 2'
        : 'Core team in Phase 1, team expansion in Phase 2'
    },
    {
      category: language === 'es' ? 'Materiales y Suministros' : 'Materials & Supplies',
      phase1: 80000,
      phase2: 350000,
      phase1Percent: 40,
      phase2Percent: 35,
      justification: language === 'es'
        ? 'Materiales piloto vs. implementación a gran escala'
        : 'Pilot materials vs. large-scale implementation'
    },
    {
      category: language === 'es' ? 'Equipamiento' : 'Equipment',
      phase1: 30000,
      phase2: 150000,
      phase1Percent: 15,
      phase2Percent: 15,
      justification: language === 'es'
        ? 'Equipos básicos vs. equipamiento completo'
        : 'Basic equipment vs. full equipment'
    },
    {
      category: language === 'es' ? 'Operación' : 'Operations',
      phase1: 30000,
      phase2: 100000,
      phase1Percent: 15,
      phase2Percent: 10,
      justification: language === 'es'
        ? 'Gastos operativos proporcionales a escala'
        : 'Operational expenses proportional to scale'
    }
  ]

  const riskMitigation = [
    {
      risk: language === 'es' ? 'Supervivencia de plantas' : 'Plant survival',
      phase1Strategy: language === 'es' ? 'Pruebas múltiples de especies' : 'Multiple species testing',
      phase2Strategy: language === 'es' ? 'Propagación de especies exitosas' : 'Successful species propagation',
      icon: Sprout
    },
    {
      risk: language === 'es' ? 'Participación comunitaria' : 'Community participation',
      phase1Strategy: language === 'es' ? 'Co-diseño intensivo' : 'Intensive co-design',
      phase2Strategy: language === 'es' ? 'Liderazgo local establecido' : 'Established local leadership',
      icon: Users
    },
    {
      risk: language === 'es' ? 'Sostenibilidad financiera' : 'Financial sustainability',
      phase1Strategy: language === 'es' ? 'Explorar fuentes de financiamiento' : 'Explore funding sources',
      phase2Strategy: language === 'es' ? 'Modelos de autosostenibilidad' : 'Self-sustainability models',
      icon: DollarSign
    },
    {
      risk: language === 'es' ? 'Cambios políticos' : 'Political changes',
      phase1Strategy: language === 'es' ? 'Alianzas multipartidistas' : 'Multi-party alliances',
      phase2Strategy: language === 'es' ? 'Institucionalización en organizaciones civiles' : 'Institutionalization in civil organizations',
      icon: Building
    }
  ]

  return (
    <section id="phased-approach" className="py-20 bg-gradient-to-br from-slate-900/20 to-gray-900/20 backdrop-blur-sm">
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
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-4">
              {currentT.subtitle}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {currentT.description}
            </p>
            
            {/* Funding Logic Highlight */}
            <motion.div 
              className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-2xl p-6 border border-slate-500/30 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-slate-300 mb-2 flex items-center justify-center">
                <Scale className="h-5 w-5 mr-2" />
                {currentT.fundingLogic}
              </h4>
              <p className="text-gray-300 text-center italic">
                {currentT.fundingDescription}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Phase Overview Cards */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.phases.title}
            </h3>
            <p className="text-gray-300">
              {currentT.phases.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 cursor-pointer ${
                  activePhase === index ? 'ring-2 ring-slate-400' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActivePhase(index)}
              >
                {/* Phase Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${phase.color} rounded-lg p-3`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className={`bg-gradient-to-r ${phase.bgColor} text-white border border-slate-500/30 mb-2`}>
                        {language === 'es' ? 'Fase' : 'Phase'} {phase.phase} - {phase.year}
                      </Badge>
                      <h4 className="text-2xl font-bold text-white">{phase.title}</h4>
                      <p className="text-gray-300">{phase.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Budget Display */}
                <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-500/20 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-emerald-400">{phase.budget}</div>
                      <div className="text-emerald-300 text-sm">{phase.budgetNote}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-300 text-sm">{language === 'es' ? 'Duración:' : 'Duration:'}</div>
                      <div className="text-white font-semibold">{phase.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Key Objectives */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-blue-400" />
                    {language === 'es' ? 'Objetivos Clave' : 'Key Objectives'}
                  </h5>
                  <div className="space-y-2">
                    {phase.objectives.map((objective, i) => (
                      <div key={i} className="text-gray-300 text-sm flex items-start">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                        {objective}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {phase.successMetrics.map((metric, i) => (
                    <div key={i} className={`bg-gradient-to-r ${phase.bgColor} rounded-lg p-3 border ${phase.borderColor}`}>
                      <div className="text-xs text-gray-300 flex items-center">
                        <BarChart3 className="h-3 w-3 mr-1" />
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Phase Timeline */}
        {activePhase !== null && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {language === 'es' ? 'Cronograma Detallado - Fase' : 'Detailed Timeline - Phase'} {phases[activePhase].phase}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases[activePhase].activities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-4">
                    <Clock className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <Badge variant="secondary" className="bg-slate-500/20 text-slate-300 border-slate-500/30 mb-2">
                      {activity.month}
                    </Badge>
                    <h4 className="text-white font-semibold text-sm">
                      {activity.focus}
                    </h4>
                  </div>
                  
                  <div className="space-y-2">
                    {activity.tasks.map((task, i) => (
                      <div key={i} className="text-gray-300 text-xs flex items-start">
                        <Zap className="h-3 w-3 mr-1 text-yellow-400 mt-0.5 flex-shrink-0" />
                        {task}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Funding Breakdown */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {language === 'es' ? 'Desglose Presupuestario por Fases' : 'Budget Breakdown by Phases'}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 text-white font-semibold">
                    {language === 'es' ? 'Categoría' : 'Category'}
                  </th>
                  <th className="text-center p-4 text-white font-semibold">
                    {language === 'es' ? 'Fase 1 (2025)' : 'Phase 1 (2025)'}
                  </th>
                  <th className="text-center p-4 text-white font-semibold">
                    {language === 'es' ? 'Fase 2 (2026)' : 'Phase 2 (2026)'}
                  </th>
                  <th className="text-left p-4 text-white font-semibold">
                    {language === 'es' ? 'Justificación' : 'Justification'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {fundingBreakdown.map((item, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="p-4 text-gray-300 font-medium">{item.category}</td>
                    <td className="p-4 text-center">
                      <div className="text-green-400 font-semibold">
                        ${item.phase1.toLocaleString()} MXN
                      </div>
                      <div className="text-gray-400 text-sm">
                        {item.phase1Percent}%
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="text-blue-400 font-semibold">
                        ${item.phase2.toLocaleString()} MXN
                      </div>
                      <div className="text-gray-400 text-sm">
                        {item.phase2Percent}%
                      </div>
                    </td>
                    <td className="p-4 text-gray-300 text-sm">{item.justification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Risk Mitigation */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentT.riskMitigation.title}
            </h3>
            <p className="text-gray-300">
              {currentT.riskMitigation.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskMitigation.map((risk, index) => (
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
                  <risk.icon className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">{risk.risk}</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-500/10 rounded p-3 border border-green-500/20">
                    <div className="text-green-400 text-xs font-medium mb-1">
                      {language === 'es' ? 'Fase 1:' : 'Phase 1:'}
                    </div>
                    <div className="text-gray-300 text-xs">{risk.phase1Strategy}</div>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded p-3 border border-blue-500/20">
                    <div className="text-blue-400 text-xs font-medium mb-1">
                      {language === 'es' ? 'Fase 2:' : 'Phase 2:'}
                    </div>
                    <div className="text-gray-300 text-xs">{risk.phase2Strategy}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sustainability Transition */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 border-slate-500/20 p-8">
            <CardContent className="p-0 text-center">
              <Rocket className="h-12 w-12 text-slate-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentT.sustainability.title}
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                {currentT.sustainability.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <TrendingUp className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-medium text-sm mb-1">
                    {language === 'es' ? 'Auto-financiamiento' : 'Self-financing'}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {language === 'es' 
                      ? 'Cooperativas y venta de servicios ambientales'
                      : 'Cooperatives and environmental services sales'
                    }
                  </div>
                </div>
                
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-white font-medium text-sm mb-1">
                    {language === 'es' ? 'Apropiación Local' : 'Local Ownership'}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {language === 'es'
                      ? 'Transferencia completa a organizaciones comunitarias'
                      : 'Complete transfer to community organizations'
                    }
                  </div>
                </div>
                
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <Award className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-medium text-sm mb-1">
                    {language === 'es' ? 'Replicación' : 'Replication'}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {language === 'es'
                      ? 'Modelo documentado para otras regiones'
                      : 'Documented model for other regions'
                    }
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default PhasedApproach
