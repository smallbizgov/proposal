import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BioremedationDiagram from './components/BioremedationDiagram'
import AdvancedComponents from './components/AdvancedComponents'
import { 
  Leaf, 
  Droplets, 
  TreePine, 
  Users, 
  Target, 
  Calendar, 
  DollarSign, 
  Award,
  ChevronDown,
  Play,
  ExternalLink,
  MapPin,
  Microscope,
  Heart,
  Globe,
  Podcast,
  Upload,
  Languages,
  X,
  FileText,
  Download
} from 'lucide-react'


// Asset placeholder URLs (can be replaced with actual imports later)
const assetPlaceholders = {
  newRiverCrisis: 'https://via.placeholder.com/800x400/4CAF50/white?text=New+River+Crisis',
  phytoremediationDiagram: 'https://via.placeholder.com/800x400/2196F3/white?text=Phytoremediation+Diagram',
  environmentalImpactChart: 'https://via.placeholder.com/800x400/FF9800/white?text=Environmental+Impact',
  socialImpactCommunity: 'https://via.placeholder.com/800x400/9C27B0/white?text=Social+Impact',
  economicImpactGraph: 'https://via.placeholder.com/800x400/F44336/white?text=Economic+Impact',
  scientificResearch: 'https://via.placeholder.com/800x400/607D8B/white?text=Scientific+Research',
  personnelBudget: 'https://via.placeholder.com/800x400/795548/white?text=Personnel+Budget',
  materialsSupplies: 'https://via.placeholder.com/800x400/3F51B5/white?text=Materials+Supplies',
  travelLogistics: 'https://via.placeholder.com/800x400/E91E63/white?text=Travel+Logistics',
  equipmentTechnology: 'https://via.placeholder.com/800x400/00BCD4/white?text=Equipment+Technology',
  operationalExpenses: 'https://via.placeholder.com/800x400/8BC34A/white?text=Operational+Expenses'
}

// Image URLs from external source
const imageBaseUrl = 'https://kgv.emb.mybluehost.me/website_ba759d6e/proposal/photos'

// Plant images - corrected paths
const plantImages = {
  velvetMesquite: `${imageBaseUrl}/velvet_tree.jpg`,
  velvetMesquiteCloseup: `${imageBaseUrl}/velvet.jpg`,
  fourWingSaltbush: `${imageBaseUrl}/saltbush_bush.jpg`,
  fourWingSaltbushCloseup: `${imageBaseUrl}/saltbush.jpg`,
  creosoteBush: `${imageBaseUrl}/creosote_bush.jpg`,
  creosoteBushCloseup: `${imageBaseUrl}/creosote.jpg`,
  bluePaloVerde: `${imageBaseUrl}/blue_tree.jpg`,
  bluePaloVerdeCloseup: `${imageBaseUrl}/blue.jpg`,
  desertWillow: `${imageBaseUrl}/desert_tree.jpg`,
  desertWillowCloseup: `${imageBaseUrl}/desert.jpg`,
  southernCattail: `${imageBaseUrl}/cattail_grass.jpg`,
  southernCattailCloseup: `${imageBaseUrl}/cattail.jpg`,
  hardstemBulrush: `${imageBaseUrl}/bulrush_plant.jpg`,
  hardstemBulrushCloseup: `${imageBaseUrl}/bulrush.jpg`,
  arrowweed: `${imageBaseUrl}/arrowweed_plant.jpg`,
  arrowweedCloseup: `${imageBaseUrl}/southern.jpg`
}

const translations = {
  es: {
    nav: {
      title: "Futuros Verdes Mexicali",
      inicio: "Inicio",
      crisis: "Crisis",
      solucion: "Solución",
      plantas: "Plantas",
      impacto: "Impacto",
      presupuesto: "Presupuesto",
      podcast: "Podcast"
    },
    hero: {
      title: "Futuros Verdes",
      subtitle: "Mexicali",
      description: "Revolucionando la biorremediación con plantas nativas del desierto para sanar el Río Nuevo y transformar Mexicali",
      button1: "Descubre la Solución",
      button2: "Ver Plantas Nativas",
      stats: {
        reduction: "85% Reducción",
        reductionDesc: "de contaminantes",
        families: "1,200 Familias",
        familiesDesc: "beneficiadas",
        hectares: "500+ Hectáreas",
        hectaresDesc: "restauradas"
      }
    },
    crisis: {
      title: "El Río Nuevo en Crisis",
      subtitle: "Uno de los cursos de agua más contaminados de América del Norte",
      description: "Requiere una solución innovadora y sostenible"
    },
    solution: {
      title: "Fitorremediación Avanzada",
      subtitle: "Utilizando el poder de las plantas nativas del desierto",
      description: "Para crear un sistema natural de limpieza ambiental"
    },
    plants: {
      title: "Plantas Guerreras del Desierto",
      subtitle: "Ocho especies nativas especializadas",
      description: "En combatir diferentes tipos de contaminación"
    },
    impact: {
      title: "Resultados Esperados",
      subtitle: "Un futuro más verde y saludable",
      description: "Para Mexicali y sus habitantes"
    },
    budget: {
      title: "Presupuesto del Proyecto",
      subtitle: "Inversión eficiente alineada",
      description: "Con la Convocatoria Secihti 2025"
    },
    podcast: {
      title: "Podcast del Proyecto",
      subtitle: "Escucha las historias detrás de la ciencia",
      description: "Y el impacto comunitario",
      uploadTitle: "Subir Audio",
      uploadDesc: "Formatos soportados: MP3, WAV, OGG, M4A"
    },
    summary: {
      title: "Propuesta Completa",
      subtitle: "Accede al documento completo del proyecto",
      description: "Descarga la propuesta detallada con metodología, cronograma y especificaciones técnicas",
      button: "Ver Propuesta Completa"
    }
  },
  en: {
    nav: {
      title: "Green Futures Mexicali",
      inicio: "Home",
      crisis: "Crisis",
      solucion: "Solution",
      plantas: "Plants",
      impacto: "Impact",
      presupuesto: "Budget",
      podcast: "Podcast"
    },
    hero: {
      title: "Green Futures",
      subtitle: "Mexicali",
      description: "Revolutionizing bioremediation with native desert plants to heal the New River and transform Mexicali",
      button1: "Discover the Solution",
      button2: "View Native Plants",
      stats: {
        reduction: "85% Reduction",
        reductionDesc: "of contaminants",
        families: "1,200 Families",
        familiesDesc: "benefited",
        hectares: "500+ Hectares",
        hectaresDesc: "restored"
      }
    },
    crisis: {
      title: "New River in Crisis",
      subtitle: "One of the most polluted waterways in North America",
      description: "Requires an innovative and sustainable solution"
    },
    solution: {
      title: "Advanced Phytoremediation",
      subtitle: "Harnessing the power of native desert plants",
      description: "To create a natural environmental cleanup system"
    },
    plants: {
      title: "Desert Warrior Plants",
      subtitle: "Eight specialized native species",
      description: "Fighting different types of pollution"
    },
    impact: {
      title: "Expected Results",
      subtitle: "A greener and healthier future",
      description: "For Mexicali and its inhabitants"
    },
    budget: {
      title: "Project Budget",
      subtitle: "Efficient investment aligned",
      description: "With the Secihti 2025 Call"
    },
    podcast: {
      title: "Project Podcast",
      subtitle: "Listen to the stories behind the science",
      description: "And community impact",
      uploadTitle: "Upload Audio",
      uploadDesc: "Supported formats: MP3, WAV, OGG, M4A"
    },
    summary: {
      title: "Complete Proposal",
      subtitle: "Access the full project document",
      description: "Download the detailed proposal with methodology, timeline and technical specifications",
      button: "View Complete Proposal"
    }
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('es')
  const [selectedPlant, setSelectedPlant] = useState(null)
  const [selectedImpact, setSelectedImpact] = useState(null)
  const [selectedBudgetItem, setSelectedBudgetItem] = useState(null)
  const [audioFile, setAudioFile] = useState(null)

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'crisis', 'solution', 'plants', 'impact', 'budget', 'podcast', 'summary']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const handleAudioUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setAudioFile(file)
    }
  }

  const plantData = [
    {
      id: 'mezquite',
      name: language === 'es' ? 'Mezquite Aterciopelado' : 'Velvet Mesquite',
      scientific: 'Prosopis velutina',
      effectiveness: 92,
      specialty: language === 'es' ? 'Tolerancia a salinidad extrema' : 'Extreme salt tolerance',
      description: language === 'es' 
        ? 'Árbol nativo del desierto de Sonora con excepcional tolerancia a suelos salinos y contaminados. Sus raíces profundas (hasta 50m) acceden a aguas subterráneas contaminadas, mientras que su sistema radicular extenso estabiliza suelos erosionados.'
        : 'Native tree from Sonoran desert with exceptional tolerance to saline and contaminated soils. Its deep roots (up to 50m) access contaminated groundwater, while its extensive root system stabilizes eroded soils.',
      mechanisms: language === 'es' 
        ? ['Fitoextracción de metales pesados', 'Fitoestabilización de suelos salinos', 'Rizofiltración de aguas subterráneas', 'Mejoramiento de estructura del suelo']
        : ['Heavy metal phytoextraction', 'Saline soil phytostabilization', 'Groundwater rhizofiltration', 'Soil structure improvement'],
      contaminants: language === 'es' ? ['Sales (NaCl, Na2SO4)', 'Plomo (Pb)', 'Cadmio (Cd)', 'Zinc (Zn)'] : ['Salts (NaCl, Na2SO4)', 'Lead (Pb)', 'Cadmium (Cd)', 'Zinc (Zn)'],
      projectRole: language === 'es' 
        ? 'Especie ancla para zonas altamente salinas del Río Nuevo. Establecimiento de barreras vegetativas en márgenes del río para prevenir erosión y filtrar escorrentías contaminadas.'
        : 'Anchor species for highly saline areas of the New River. Establishment of vegetative barriers on river margins to prevent erosion and filter contaminated runoff.',
      fullImage: plantImages.velvetMesquite,
      closeupImage: plantImages.velvetMesquiteCloseup
    },
    {
      id: 'chamizo',
      name: language === 'es' ? 'Chamizo de Cuatro Alas' : 'Four-wing Saltbush',
      scientific: 'Atriplex canescens',
      effectiveness: 89,
      specialty: language === 'es' ? 'Hiperacumulación de sales' : 'Salt hyperaccumulation',
      description: language === 'es'
        ? 'Arbusto halófito extremadamente eficiente en la extracción de sales del suelo contaminado. Puede acumular hasta 30% de su peso seco en sales, siendo ideal para suelos con alta conductividad eléctrica (>16 dS/m).'
        : 'Halophyte shrub extremely efficient in extracting salts from contaminated soil. Can accumulate up to 30% of its dry weight in salts, ideal for soils with high electrical conductivity (>16 dS/m).',
      mechanisms: language === 'es'
        ? ['Hiperacumulación de sales en tejidos', 'Exclusión de sodio en raíces', 'Compartimentalización de sales en vacuolas', 'Osmorregulación celular']
        : ['Salt hyperaccumulation in tissues', 'Sodium exclusion in roots', 'Salt compartmentalization in vacuoles', 'Cellular osmoregulation'],
      contaminants: language === 'es' ? ['Cloruro de Sodio (NaCl)', 'Sulfato de Sodio (Na2SO4)', 'Boro (B)', 'Selenio (Se)'] : ['Sodium Chloride (NaCl)', 'Sodium Sulfate (Na2SO4)', 'Boron (B)', 'Selenium (Se)'],
      projectRole: language === 'es'
        ? 'Desalinización de suelos agrícolas afectados. Implementación en jardines comunitarios como demostración de recuperación de suelos salinos para agricultura urbana.'
        : 'Desalination of affected agricultural soils. Implementation in community gardens as demonstration of saline soil recovery for urban agriculture.',
      fullImage: plantImages.fourWingSaltbush,
      closeupImage: plantImages.fourWingSaltbushCloseup
    },
    {
      id: 'gobernadora',
      name: language === 'es' ? 'Gobernadora' : 'Creosote Bush',
      scientific: 'Larrea tridentata',
      effectiveness: 85,
      specialty: language === 'es' ? 'Resistencia extrema a contaminantes' : 'Extreme contaminant resistance',
      description: language === 'es'
        ? 'Planta icónica del desierto con capacidad única para sobrevivir en condiciones extremas de contaminación. Sus compuestos fenólicos naturales le permiten degradar hidrocarburos y solventes orgánicos.'
        : 'Iconic desert plant with unique ability to survive extreme contamination conditions. Its natural phenolic compounds allow it to degrade hydrocarbons and organic solvents.',
      mechanisms: language === 'es'
        ? ['Fitodegradación de hidrocarburos', 'Producción de enzimas oxidativas', 'Secreción de compuestos alelopáticos', 'Resistencia a estrés oxidativo']
        : ['Hydrocarbon phytodegradation', 'Oxidative enzyme production', 'Allelopathic compound secretion', 'Oxidative stress resistance'],
      contaminants: language === 'es' ? ['Hidrocarburos (PAH)', 'Benceno', 'Tolueno', 'Xileno (BTX)'] : ['Hydrocarbons (PAH)', 'Benzene', 'Toluene', 'Xylene (BTX)'],
      projectRole: language === 'es'
        ? 'Tratamiento de zonas con contaminación por hidrocarburos. Establecimiento de cortinas vegetales para crear microclimas favorables para otras especies más sensibles.'
        : 'Treatment of areas with hydrocarbon contamination. Establishment of plant screens to create favorable microclimates for other more sensitive species.',
      fullImage: plantImages.creosoteBush,
      closeupImage: plantImages.creosoteBushCloseup
    },
    {
      id: 'paloverde',
      name: language === 'es' ? 'Palo Verde Azul' : 'Blue Palo Verde',
      scientific: 'Parkinsonia florida',
      effectiveness: 88,
      specialty: language === 'es' ? 'Especialista en arsénico y cromo' : 'Arsenic and chromium specialist',
      description: language === 'es'
        ? 'Árbol del estado de Arizona con sistema radicular profundo especializado en remediar contaminación subterránea. Sus raíces pueden alcanzar 30m de profundidad, accediendo a plumas de contaminación en acuíferos.'
        : 'Arizona state tree with deep root system specialized in remediating underground contamination. Its roots can reach 30m depth, accessing contamination plumes in aquifers.',
      mechanisms: language === 'es'
        ? ['Fitoextracción de metales pesados', 'Translocación a tejidos aéreos', 'Quelación con metalotioneínas', 'Volatilización de arsénico']
        : ['Heavy metal phytoextraction', 'Translocation to aerial tissues', 'Chelation with metallothioneins', 'Arsenic volatilization'],
      contaminants: language === 'es' ? ['Arsénico (As)', 'Cromo hexavalente (Cr6+)', 'Níquel (Ni)', 'Cobre (Cu)'] : ['Arsenic (As)', 'Hexavalent chromium (Cr6+)', 'Nickel (Ni)', 'Copper (Cu)'],
      projectRole: language === 'es'
        ? 'Remediación de acuíferos contaminados con metales pesados. Plantación estratégica sobre plumas de contaminación identificadas por estudios hidrogeológicos.'
        : 'Remediation of aquifers contaminated with heavy metals. Strategic planting over contamination plumes identified by hydrogeological studies.',
      fullImage: plantImages.bluePaloVerde,
      closeupImage: plantImages.bluePaloVerdeCloseup
    },
    {
      id: 'sauce',
      name: language === 'es' ? 'Sauce del Desierto' : 'Desert Willow',
      scientific: 'Chilopsis linearis',
      effectiveness: 91,
      specialty: language === 'es' ? 'Purificación de agua y estabilización ribereña' : 'Water purification and riparian stabilization',
      description: language === 'es'
        ? 'Árbol ribereño especializado en la purificación de aguas contaminadas y estabilización de riberas. Sus raíces forman simbiosis con hongos micorrízicos que potencian la absorción de contaminantes.'
        : 'Riparian tree specialized in purifying contaminated water and stabilizing riverbanks. Its roots form symbiosis with mycorrhizal fungi that enhance contaminant absorption.',
      mechanisms: language === 'es'
        ? ['Rizofiltración de aguas superficiales', 'Simbiosis micorrízica', 'Estabilización de sedimentos', 'Creación de hábitat para fauna']
        : ['Surface water rhizofiltration', 'Mycorrhizal symbiosis', 'Sediment stabilization', 'Wildlife habitat creation'],
      contaminants: language === 'es' ? ['Nitratos (NO3-)', 'Fosfatos (PO43-)', 'Amonio (NH4+)', 'Materia orgánica'] : ['Nitrates (NO3-)', 'Phosphates (PO43-)', 'Ammonium (NH4+)', 'Organic matter'],
      projectRole: language === 'es'
        ? 'Establecimiento de corredores ribereños para filtración natural. Creación de humedales construidos para tratamiento terciario de aguas residuales.'
        : 'Establishment of riparian corridors for natural filtration. Creation of constructed wetlands for tertiary wastewater treatment.',
      fullImage: plantImages.desertWillow,
      closeupImage: plantImages.desertWillowCloseup
    },
    {
      id: 'tule',
      name: language === 'es' ? 'Tule del Sur' : 'Southern Cattail',
      scientific: 'Typha domingensis',
      effectiveness: 94,
      specialty: language === 'es' ? 'Purificación acuática y remoción de metales' : 'Aquatic purification and metal removal',
      description: language === 'es'
        ? 'Macrófita acuática emergente reconocida globalmente por su capacidad de purificación en humedales construidos. Puede procesar hasta 1000L de agua contaminada por planta por día.'
        : 'Emergent aquatic macrophyte globally recognized for its purification capacity in constructed wetlands. Can process up to 1000L of contaminated water per plant per day.',
      mechanisms: language === 'es'
        ? ['Absorción radicular directa', 'Filtración física de sedimentos', 'Adsorción en biofilms', 'Transferencia de oxígeno a rizosfera']
        : ['Direct root absorption', 'Physical sediment filtration', 'Biofilm adsorption', 'Oxygen transfer to rhizosphere'],
      contaminants: language === 'es' ? ['Metales pesados (Pb, Cd, Zn)', 'Nutrientes (N, P)', 'Patógenos', 'Sólidos suspendidos'] : ['Heavy metals (Pb, Cd, Zn)', 'Nutrients (N, P)', 'Pathogens', 'Suspended solids'],
      projectRole: language === 'es'
        ? 'Componente central de humedales construidos. Tratamiento de aguas residuales urbanas antes de descarga al Río Nuevo para reducir carga contaminante.'
        : 'Central component of constructed wetlands. Urban wastewater treatment before discharge to New River to reduce pollutant load.',
      fullImage: plantImages.southernCattail,
      closeupImage: plantImages.southernCattailCloseup
    },
    {
      id: 'junco',
      name: language === 'es' ? 'Junco de Tallo Duro' : 'Hardstem Bulrush',
      scientific: 'Schoenoplectus acutus',
      effectiveness: 87,
      specialty: language === 'es' ? 'Remediación de humedales y metales pesados' : 'Wetland remediation and heavy metals',
      description: language === 'es'
        ? 'Planta ribereña nativa utilizada frecuentemente en humedales construidos para tratamiento de aguas residuales. Forma densas colonias que maximizan el área de contacto agua-planta.'
        : 'Native riparian plant frequently used in constructed wetlands for wastewater treatment. Forms dense colonies that maximize water-plant contact area.',
      mechanisms: language === 'es'
        ? ['Acumulación en tejidos subterráneos', 'Precipitación de metales en rizosfera', 'Creación de condiciones anaeróbicas', 'Soporte para comunidades microbianas']
        : ['Accumulation in underground tissues', 'Metal precipitation in rhizosphere', 'Creation of anaerobic conditions', 'Support for microbial communities'],
      contaminants: language === 'es' ? ['Plomo (Pb)', 'Zinc (Zn)', 'Hierro (Fe)', 'Manganeso (Mn)'] : ['Lead (Pb)', 'Zinc (Zn)', 'Iron (Fe)', 'Manganese (Mn)'],
      projectRole: language === 'es'
        ? 'Complemento en sistemas de humedales para diversificar mecanismos de remoción. Tratamiento de drenajes ácidos y lixiviados industriales.'
        : 'Complement in wetland systems to diversify removal mechanisms. Treatment of acid drainage and industrial leachates.',
      fullImage: plantImages.hardstemBulrush,
      closeupImage: plantImages.hardstemBulrushCloseup
    },
    {
      id: 'hierba',
      name: language === 'es' ? 'Hierba de Flecha' : 'Arrowweed',
      scientific: 'Pluchea sericea',
      effectiveness: 82,
      specialty: language === 'es' ? 'Control de erosión y barrera vegetativa' : 'Erosion control and vegetative barrier',
      description: language === 'es'
        ? 'Forma densas barreras vegetativas a lo largo de cursos de agua para estabilizar riberas y prevenir erosión. Sus raíces fibrosas crean una red de contención de sedimentos contaminados.'
        : 'Forms dense vegetative barriers along waterways to stabilize banks and prevent erosion. Its fibrous roots create a containment network for contaminated sediments.',
      mechanisms: language === 'es'
        ? ['Estabilización física de sedimentos', 'Filtración de escorrentías', 'Creación de microhábitats', 'Reducción de velocidad del agua']
        : ['Physical sediment stabilization', 'Runoff filtration', 'Microhabitat creation', 'Water velocity reduction'],
      contaminants: language === 'es' ? ['Sedimentos contaminados', 'Cianuro (CN-)', 'Metales en suspensión', 'Agroquímicos'] : ['Contaminated sediments', 'Cyanide (CN-)', 'Suspended metals', 'Agrochemicals'],
      projectRole: language === 'es'
        ? 'Establecimiento de barreras de contención en zonas de alta erosión. Prevención de transporte de sedimentos contaminados hacia zonas agrícolas.'
        : 'Establishment of containment barriers in high erosion areas. Prevention of contaminated sediment transport to agricultural areas.',
      fullImage: plantImages.arrowweed,
      closeupImage: plantImages.arrowweedCloseup
    }
  ]

  const impactData = [
    {
      id: 'environmental',
      category: language === 'es' ? 'Impacto Ambiental' : 'Environmental Impact',
      color: 'from-green-400 to-emerald-400',
      image: assetPlaceholders.environmentalImpactChart,
      metrics: [
        { 
          label: language === 'es' ? 'Reducción de Contaminantes' : 'Contaminant Reduction', 
          value: '85%', 
          desc: language === 'es' ? 'Metales pesados y contaminantes orgánicos • 24 meses' : 'Heavy metals and organic pollutants • 24 months',
          detail: language === 'es' 
            ? 'Reducción documentada de Pb (90%), Cd (85%), Zn (80%) y hidrocarburos aromáticos policíclicos (75%) mediante análisis de laboratorio certificado cada 3 meses.'
            : 'Documented reduction of Pb (90%), Cd (85%), Zn (80%) and polycyclic aromatic hydrocarbons (75%) through certified laboratory analysis every 3 months.'
        },
        { 
          label: language === 'es' ? 'Mejora Calidad del Agua' : 'Water Quality Improvement', 
          value: '75%', 
          desc: language === 'es' ? 'Claridad y seguridad del agua del Río Nuevo • 18 meses' : 'New River water clarity and safety • 18 months',
          detail: language === 'es'
            ? 'Incremento en transparencia del agua de 0.3m a 1.2m, reducción de DBO de 180mg/L a 45mg/L, eliminación de coliformes fecales >99%.'
            : 'Increase in water transparency from 0.3m to 1.2m, BOD reduction from 180mg/L to 45mg/L, fecal coliform elimination >99%.'
        },
        { 
          label: language === 'es' ? 'Remediación del Suelo' : 'Soil Remediation', 
          value: '500', 
          desc: language === 'es' ? 'hectáreas' : 'hectares',
          detail: language === 'es'
            ? 'Restauración de 500 hectáreas de suelo degradado, incremento de materia orgánica del 0.8% al 3.2%, mejora de infiltración de 2mm/h a 15mm/h.'
            : 'Restoration of 500 hectares of degraded soil, organic matter increase from 0.8% to 3.2%, infiltration improvement from 2mm/h to 15mm/h.'
        },
        { 
          label: language === 'es' ? 'Aumento Biodiversidad' : 'Biodiversity Increase', 
          value: '40%', 
          desc: language === 'es' ? 'Crecimiento poblacional de especies nativas • 24 meses' : 'Native species population growth • 24 months',
          detail: language === 'es'
            ? 'Incremento de 15 a 21 especies de aves residentes, 8 a 12 especies de mamíferos pequeños, 25 a 35 especies de insectos polinizadores.'
            : 'Increase from 15 to 21 resident bird species, 8 to 12 small mammal species, 25 to 35 pollinator insect species.'
        }
      ]
    },
    {
      id: 'social',
      category: language === 'es' ? 'Impacto Social' : 'Social Impact',
      color: 'from-blue-400 to-cyan-400',
      image: assetPlaceholders.socialImpactCommunity,
      metrics: [
        { 
          label: language === 'es' ? 'Familias Beneficiadas' : 'Families Benefited', 
          value: '1200', 
          desc: language === 'es' ? 'familias' : 'families',
          detail: language === 'es'
            ? 'Beneficio directo a 1,200 familias (4,800 personas) en colonias Progreso, Pueblo Nuevo y Cerro Prieto mediante mejora de calidad ambiental y oportunidades económicas.'
            : 'Direct benefit to 1,200 families (4,800 people) in Progreso, Pueblo Nuevo and Cerro Prieto neighborhoods through environmental quality improvement and economic opportunities.'
        },
        { 
          label: language === 'es' ? 'Participación Comunitaria' : 'Community Participation', 
          value: '95%', 
          desc: language === 'es' ? 'Participación activa en actividades del proyecto • 6 meses' : 'Active engagement in project activities • 6 months',
          detail: language === 'es'
            ? 'Participación del 95% de familias objetivo en talleres, 80% en actividades de plantación, 70% en monitoreo comunitario, 60% en liderazgo de actividades.'
            : '95% participation of target families in workshops, 80% in planting activities, 70% in community monitoring, 60% in activity leadership.'
        },
        { 
          label: language === 'es' ? 'Talleres Educativos' : 'Educational Workshops', 
          value: '48', 
          desc: language === 'es' ? 'sesiones' : 'sessions',
          detail: language === 'es'
            ? '48 talleres especializados: 12 sobre fitorremediación, 12 sobre agricultura urbana, 12 sobre salud ambiental, 12 sobre emprendimiento verde.'
            : '48 specialized workshops: 12 on phytoremediation, 12 on urban agriculture, 12 on environmental health, 12 on green entrepreneurship.'
        },
        { 
          label: language === 'es' ? 'Participación Juvenil' : 'Youth Participation', 
          value: '300', 
          desc: language === 'es' ? 'estudiantes' : 'students',
          detail: language === 'es'
            ? '300 estudiantes de 6 escuelas primarias y 3 secundarias participando en programa "Científicos del Futuro" con experimentos de fitorremediación.'
            : '300 students from 6 elementary and 3 middle schools participating in "Future Scientists" program with phytoremediation experiments.'
        }
      ]
    },
    {
      id: 'economic',
      category: language === 'es' ? 'Impacto Económico' : 'Economic Impact',
      color: 'from-yellow-400 to-orange-400',
      image: assetPlaceholders.economicImpactGraph,
      metrics: [
        { 
          label: language === 'es' ? 'Creación de Empleos' : 'Job Creation', 
          value: '45', 
          desc: language === 'es' ? 'empleos' : 'jobs',
          detail: language === 'es'
            ? '45 empleos directos: 8 técnicos especializados, 15 operadores de campo, 12 educadores comunitarios, 10 administrativos. Salarios promedio 15% sobre mínimo regional.'
            : '45 direct jobs: 8 specialized technicians, 15 field operators, 12 community educators, 10 administrative staff. Average salaries 15% above regional minimum.'
        },
        { 
          label: language === 'es' ? 'Aumento Valor Propiedades' : 'Property Value Increase', 
          value: '15%', 
          desc: language === 'es' ? 'Mejora de condiciones ambientales • 24 meses' : 'Improved environmental conditions • 24 months',
          detail: language === 'es'
            ? 'Incremento promedio del 15% en valor catastral de propiedades en radio de 2km del proyecto, equivalente a $45,000 MXN por vivienda promedio.'
            : 'Average 15% increase in cadastral value of properties within 2km radius of project, equivalent to $45,000 MXN per average home.'
        },
        { 
          label: language === 'es' ? 'Reducción Costos Salud' : 'Health Cost Reduction', 
          value: '30%', 
          desc: language === 'es' ? 'Reducción de enfermedades relacionadas con contaminación • 18 meses' : 'Reduced pollution-related illnesses • 18 months',
          detail: language === 'es'
            ? 'Reducción del 30% en consultas por enfermedades respiratorias, 25% en gastroenteritis, 40% en dermatitis. Ahorro estimado: $2.3M MXN anuales en sistema de salud.'
            : '30% reduction in respiratory disease consultations, 25% in gastroenteritis, 40% in dermatitis. Estimated savings: $2.3M MXN annually in health system.'
        },
        { 
          label: language === 'es' ? 'Productividad Agrícola' : 'Agricultural Productivity', 
          value: '25%', 
          desc: language === 'es' ? 'Mejora de calidad de suelo y agua • 24 meses' : 'Improved soil and water quality • 24 months',
          detail: language === 'es'
            ? 'Incremento del 25% en rendimiento de cultivos en 200 hectáreas agrícolas beneficiadas, generando $1.8M MXN adicionales anuales para 150 productores.'
            : '25% increase in crop yield on 200 benefited agricultural hectares, generating additional $1.8M MXN annually for 150 producers.'
        }
      ]
    },
    {
      id: 'scientific',
      category: language === 'es' ? 'Impacto Científico' : 'Scientific Impact',
      color: 'from-purple-400 to-indigo-400',
      image: assetPlaceholders.scientificResearch,
      metrics: [
        { 
          label: language === 'es' ? 'Publicaciones Científicas' : 'Scientific Publications', 
          value: '8', 
          desc: language === 'es' ? 'artículos' : 'papers',
          detail: language === 'es'
            ? '8 artículos en revistas indexadas: 3 en Journal of Environmental Management, 2 en Ecological Engineering, 2 en Science of Total Environment, 1 en Nature Sustainability.'
            : '8 articles in indexed journals: 3 in Journal of Environmental Management, 2 in Ecological Engineering, 2 in Science of Total Environment, 1 in Nature Sustainability.'
        },
        { 
          label: language === 'es' ? 'Puntos de Monitoreo' : 'Monitoring Points', 
          value: '150', 
          desc: language === 'es' ? 'sitios' : 'sites',
          detail: language === 'es'
            ? '150 puntos de monitoreo: 50 calidad de agua, 50 calidad de suelo, 25 biodiversidad, 25 parámetros meteorológicos. Datos en tiempo real vía IoT.'
            : '150 monitoring points: 50 water quality, 50 soil quality, 25 biodiversity, 25 meteorological parameters. Real-time data via IoT.'
        },
        { 
          label: language === 'es' ? 'Transferencia Tecnológica' : 'Technology Transfer', 
          value: '5', 
          desc: language === 'es' ? 'regiones' : 'regions',
          detail: language === 'es'
            ? 'Replicación de metodología en 5 regiones: Tijuana-San Diego, Ciudad Juárez-El Paso, Nuevo Laredo-Laredo, Matamoros-Brownsville, Nogales-Tucson.'
            : 'Methodology replication in 5 regions: Tijuana-San Diego, Ciudad Juárez-El Paso, Nuevo Laredo-Laredo, Matamoros-Brownsville, Nogales-Tucson.'
        },
        { 
          label: language === 'es' ? 'Colaboraciones Científicas' : 'Scientific Collaborations', 
          value: '12', 
          desc: language === 'es' ? 'instituciones' : 'institutions',
          detail: language === 'es'
            ? '12 instituciones colaboradoras: UABC, CICESE, COLEF, UC San Diego, Arizona State University, EPA, CONACYT, SEMARNAT, Imperial Valley College, Desert Research Institute.'
            : '12 collaborating institutions: UABC, CICESE, COLEF, UC San Diego, Arizona State University, EPA, CONACYT, SEMARNAT, Imperial Valley College, Desert Research Institute.'
        }
      ]
    }
  ]

  const budgetData = {
    phase1: {
      title: language === 'es' ? 'Fase 1: Fundación (3 meses)' : 'Phase 1: Foundation (3 months)',
      amount: '$200,000 MXN',
      duration: language === 'es' ? '3 meses' : '3 months',
      categories: [
        {
          category: language === 'es' ? 'Personal' : 'Personnel',
          image: assetPlaceholders.personnelBudget,
          total: '$72,000 MXN',
          justification: language === 'es' 
            ? 'El personal especializado es fundamental para el éxito del proyecto. Se requieren expertos con formación avanzada en ciencias ambientales y participación comunitaria para asegurar la implementación técnica correcta y la aceptación social del proyecto.'
            : 'Specialized personnel is fundamental for project success. Experts with advanced training in environmental sciences and community engagement are required to ensure correct technical implementation and social acceptance of the project.',
          expectedOutcomes: language === 'es'
            ? ['Diseño técnico preciso de sistemas de fitorremediación', 'Establecimiento de relaciones sólidas con la comunidad', 'Capacitación efectiva de participantes locales', 'Supervisión científica rigurosa de actividades piloto']
            : ['Precise technical design of phytoremediation systems', 'Establishment of solid community relationships', 'Effective training of local participants', 'Rigorous scientific supervision of pilot activities'],
          items: [
            { 
              name: language === 'es' ? 'Científico Ambiental (Maestría)' : 'Environmental Scientist (Master\'s)', 
              cost: '$22,500 MXN/mes', 
              duration: '2 meses',
              total: '$45,000 MXN',
              justification: language === 'es'
                ? 'Responsable del diseño técnico, selección de especies vegetales, y supervisión de la implementación de sistemas de fitorremediación. Su expertise asegura la efectividad científica del proyecto.'
                : 'Responsible for technical design, plant species selection, and supervision of phytoremediation system implementation. Their expertise ensures the scientific effectiveness of the project.'
            },
            { 
              name: language === 'es' ? 'Especialista en Participación Comunitaria' : 'Community Engagement Specialist', 
              cost: '$9,000 MXN/mes', 
              duration: '3 meses',
              total: '$27,000 MXN',
              justification: language === 'es'
                ? 'Facilita la participación activa de la comunidad, organiza talleres educativos, y asegura que el proyecto responda a las necesidades locales. Esencial para la sostenibilidad a largo plazo.'
                : 'Facilitates active community participation, organizes educational workshops, and ensures the project responds to local needs. Essential for long-term sustainability.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Materiales y Suministros' : 'Materials & Supplies',
          image: assetPlaceholders.materialsSupplies,
          total: '$35,000 MXN',
          justification: language === 'es'
            ? 'Los materiales de alta calidad son esenciales para establecer sistemas de fitorremediación efectivos. Se priorizan especies nativas adaptadas al clima desértico de Mexicali para maximizar las tasas de supervivencia y efectividad.'
            : 'High-quality materials are essential for establishing effective phytoremediation systems. Native species adapted to Mexicali\'s desert climate are prioritized to maximize survival rates and effectiveness.',
          expectedOutcomes: language === 'es'
            ? ['Establecimiento exitoso de parcelas piloto', 'Alta tasa de supervivencia de plantas (>85%)', 'Demostración visible de efectividad de fitorremediación', 'Base sólida para escalamiento en Fase 2']
            : ['Successful establishment of pilot plots', 'High plant survival rate (>85%)', 'Visible demonstration of phytoremediation effectiveness', 'Solid foundation for Phase 2 scaling'],
          items: [
            { 
              name: language === 'es' ? 'Semillas y Plántulas de Plantas Nativas' : 'Native Plant Seeds & Seedlings', 
              cost: '$20,000 MXN', 
              duration: language === 'es' ? 'Colección inicial para estudios piloto' : 'Initial collection for pilot studies',
              total: '$20,000 MXN',
              justification: language === 'es'
                ? 'Inversión en 8 especies nativas especializadas (Prosopis velutina, Atriplex canescens, etc.) con probada capacidad de fitorremediación. Incluye certificación de calidad y adaptación local.'
                : 'Investment in 8 specialized native species (Prosopis velutina, Atriplex canescens, etc.) with proven phytoremediation capacity. Includes quality certification and local adaptation.'
            },
            { 
              name: language === 'es' ? 'Herramientas Básicas de Jardinería' : 'Basic Gardening Tools', 
              cost: '$15,000 MXN', 
              duration: language === 'es' ? 'Palas, podadoras, equipo de riego' : 'Shovels, pruners, watering equipment',
              total: '$15,000 MXN',
              justification: language === 'es'
                ? 'Herramientas duraderas para establecimiento y mantenimiento de parcelas piloto. Incluye sistemas de riego eficiente para optimizar supervivencia en clima árido.'
                : 'Durable tools for pilot plot establishment and maintenance. Includes efficient irrigation systems to optimize survival in arid climate.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Viajes y Logística' : 'Travel & Logistics',
          image: assetPlaceholders.travelLogistics,
          total: '$28,000 MXN',
          justification: language === 'es'
            ? 'La movilidad es crucial para la evaluación exhaustiva de sitios contaminados y la participación comunitaria efectiva. Se requiere acceso regular a múltiples ubicaciones para monitoreo y actividades educativas.'
            : 'Mobility is crucial for exhaustive evaluation of contaminated sites and effective community participation. Regular access to multiple locations is required for monitoring and educational activities.',
          expectedOutcomes: language === 'es'
            ? ['Mapeo completo de sitios contaminados', 'Participación comunitaria en 5+ colonias', 'Monitoreo regular de progreso', 'Documentación fotográfica y GPS de actividades']
            : ['Complete mapping of contaminated sites', 'Community participation in 5+ neighborhoods', 'Regular progress monitoring', 'Photographic and GPS documentation of activities'],
          items: [
            { 
              name: language === 'es' ? 'Transporte para Evaluación de Sitios' : 'Site Assessment Transportation', 
              cost: '$18,000 MXN', 
              duration: language === 'es' ? 'Renta de vehículo y combustible' : 'Vehicle rental and fuel',
              total: '$18,000 MXN',
              justification: language === 'es'
                ? 'Vehículo 4x4 necesario para acceder a sitios remotos del Río Nuevo y áreas agrícolas afectadas. Incluye combustible para 200+ viajes de campo durante 3 meses.'
                : '4x4 vehicle necessary to access remote New River sites and affected agricultural areas. Includes fuel for 200+ field trips during 3 months.'
            },
            { 
              name: language === 'es' ? 'Espacios para Reuniones Comunitarias' : 'Community Meeting Venues', 
              cost: '$10,000 MXN', 
              duration: language === 'es' ? 'Renta de espacios para sesiones de participación' : 'Space rental for engagement sessions',
              total: '$10,000 MXN',
              justification: language === 'es'
                ? 'Espacios centrales y accesibles para talleres comunitarios en colonias Progreso, Pueblo Nuevo y Cerro Prieto. Facilita participación de familias con niños.'
                : 'Central and accessible spaces for community workshops in Progreso, Pueblo Nuevo and Cerro Prieto neighborhoods. Facilitates participation of families with children.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Equipo y Tecnología' : 'Equipment & Technology',
          image: assetPlaceholders.equipmentTechnology,
          total: '$45,000 MXN',
          justification: language === 'es'
            ? 'El monitoreo científico riguroso es esencial para demostrar la efectividad del proyecto y generar datos para publicaciones. El equipo de documentación asegura la transferencia de conocimiento y replicabilidad.'
            : 'Rigorous scientific monitoring is essential to demonstrate project effectiveness and generate data for publications. Documentation equipment ensures knowledge transfer and replicability.',
          expectedOutcomes: language === 'es'
            ? ['Datos cuantitativos de efectividad de fitorremediación', 'Documentación completa para replicación', 'Base científica para publicaciones', 'Evidencia para escalamiento en Fase 2']
            : ['Quantitative data on phytoremediation effectiveness', 'Complete documentation for replication', 'Scientific basis for publications', 'Evidence for Phase 2 scaling'],
          items: [
            { 
              name: language === 'es' ? 'Kits de Análisis de Suelo' : 'Soil Testing Kits', 
              cost: '$25,000 MXN', 
              duration: language === 'es' ? 'pH, nutrientes y análisis de contaminación' : 'pH, nutrient, and contamination testing',
              total: '$25,000 MXN',
              justification: language === 'es'
                ? 'Kits profesionales para análisis de pH, conductividad eléctrica, metales pesados (Pb, Cd, Zn) y nutrientes. Permite monitoreo mensual de 10 sitios piloto.'
                : 'Professional kits for pH, electrical conductivity, heavy metals (Pb, Cd, Zn) and nutrient analysis. Enables monthly monitoring of 10 pilot sites.'
            },
            { 
              name: language === 'es' ? 'Equipo de Documentación' : 'Documentation Equipment', 
              cost: '$20,000 MXN', 
              duration: language === 'es' ? 'Cámaras, tablets para recolección de datos' : 'Cameras, tablets for data collection',
              total: '$20,000 MXN',
              justification: language === 'es'
                ? 'Cámaras profesionales para documentación científica, tablets resistentes para recolección de datos en campo, y GPS para mapeo preciso de sitios.'
                : 'Professional cameras for scientific documentation, rugged tablets for field data collection, and GPS for precise site mapping.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Gastos Operacionales' : 'Operational Expenses',
          image: assetPlaceholders.operationalExpenses,
          total: '$10,000 MXN',
          justification: language === 'es'
            ? 'Los gastos operacionales aseguran la comunicación efectiva con la comunidad y la diseminación de resultados. Los materiales educativos son fundamentales para el impacto a largo plazo del proyecto.'
            : 'Operational expenses ensure effective communication with the community and dissemination of results. Educational materials are fundamental for the project\'s long-term impact.',
          expectedOutcomes: language === 'es'
            ? ['Comunicación fluida con participantes', 'Materiales educativos de alta calidad', 'Documentación profesional de actividades', 'Base para escalamiento y replicación']
            : ['Smooth communication with participants', 'High-quality educational materials', 'Professional activity documentation', 'Foundation for scaling and replication'],
          items: [
            { 
              name: language === 'es' ? 'Comunicaciones' : 'Communications', 
              cost: '$5,000 MXN', 
              duration: language === 'es' ? 'Teléfono, internet, impresión' : 'Phone, internet, printing',
              total: '$5,000 MXN',
              justification: language === 'es'
                ? 'Comunicación constante con participantes comunitarios, coordinación con instituciones colaboradoras, e impresión de reportes científicos y materiales educativos.'
                : 'Constant communication with community participants, coordination with collaborating institutions, and printing of scientific reports and educational materials.'
            },
            { 
              name: language === 'es' ? 'Materiales Educativos' : 'Educational Materials', 
              cost: '$5,000 MXN', 
              duration: language === 'es' ? 'Folletos, carteles, suministros para talleres' : 'Brochures, posters, workshop supplies',
              total: '$5,000 MXN',
              justification: language === 'es'
                ? 'Folletos informativos sobre fitorremediación, carteles para jardines comunitarios, y suministros para talleres prácticos con niños y adultos.'
                : 'Informational brochures on phytoremediation, posters for community gardens, and supplies for hands-on workshops with children and adults.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Contingencia (5%)' : 'Contingency (5%)',
          image: assetPlaceholders.operationalExpenses,
          total: '$10,000 MXN',
          justification: language === 'es'
            ? 'Fondo de contingencia del 5% para manejar imprevistos típicos en proyectos ambientales comunitarios, como condiciones climáticas adversas, cambios en disponibilidad de sitios, o necesidades adicionales de la comunidad.'
            : '5% contingency fund to handle typical unforeseen circumstances in community environmental projects, such as adverse weather conditions, changes in site availability, or additional community needs.',
          expectedOutcomes: language === 'es'
            ? ['Flexibilidad para adaptarse a condiciones cambiantes', 'Respuesta rápida a oportunidades emergentes', 'Mantenimiento de cronograma ante imprevistos', 'Aseguramiento de calidad en todas las actividades']
            : ['Flexibility to adapt to changing conditions', 'Quick response to emerging opportunities', 'Schedule maintenance despite unforeseen events', 'Quality assurance in all activities'],
          items: [
            { 
              name: language === 'es' ? 'Fondo de Emergencia' : 'Emergency Fund', 
              cost: '$10,000 MXN', 
              duration: language === 'es' ? 'Gastos imprevistos y ajustes' : 'Unforeseen expenses and adjustments',
              total: '$10,000 MXN',
              justification: language === 'es'
                ? 'Reserva para situaciones imprevistas como reemplazo de plantas por condiciones climáticas extremas, gastos adicionales de transporte, o ampliación de actividades por alta demanda comunitaria.'
                : 'Reserve for unforeseen situations such as plant replacement due to extreme weather conditions, additional transportation expenses, or activity expansion due to high community demand.'
            }
          ]
        }
      ]
    },
    phase2: {
      title: language === 'es' ? 'Fase 2: Escalamiento (9 meses)' : 'Phase 2: Scaling (9 months)',
      amount: '$1,000,000 MXN',
      duration: language === 'es' ? '9 meses' : '9 months',
      categories: [
        {
          category: language === 'es' ? 'Personal' : 'Personnel',
          image: assetPlaceholders.personnelBudget,
          total: '$450,000 MXN',
          justification: language === 'es'
            ? 'El escalamiento requiere un equipo ampliado con coordinación experta y múltiples asistentes de campo para manejar 500+ hectáreas. La inversión en personal calificado asegura la implementación exitosa a gran escala.'
            : 'Scaling requires an expanded team with expert coordination and multiple field assistants to manage 500+ hectares. Investment in qualified personnel ensures successful large-scale implementation.',
          expectedOutcomes: language === 'es'
            ? ['Coordinación efectiva de actividades a gran escala', 'Implementación técnica precisa en múltiples sitios', 'Capacitación de 1,200+ participantes comunitarios', 'Establecimiento de 15+ jardines comunitarios']
            : ['Effective coordination of large-scale activities', 'Precise technical implementation at multiple sites', 'Training of 1,200+ community participants', 'Establishment of 15+ community gardens'],
          items: [
            { 
              name: language === 'es' ? 'Coordinador de Proyecto (PhD)' : 'Project Coordinator (PhD)', 
              cost: '$35,000 MXN/mes', 
              duration: '9 meses',
              total: '$315,000 MXN',
              justification: language === 'es'
                ? 'Coordinador con doctorado en ciencias ambientales para supervisión científica rigurosa, coordinación interinstitucional, y preparación de publicaciones científicas de alto impacto.'
                : 'Coordinator with PhD in environmental sciences for rigorous scientific supervision, inter-institutional coordination, and preparation of high-impact scientific publications.'
            },
            { 
              name: language === 'es' ? 'Asistentes de Campo (3)' : 'Field Assistants (3)', 
              cost: '$5,000 MXN/mes c/u', 
              duration: '9 meses',
              total: '$135,000 MXN',
              justification: language === 'es'
                ? 'Tres asistentes especializados para implementación diaria, monitoreo de sitios, y facilitación de actividades comunitarias. Esencial para cobertura de múltiples ubicaciones simultáneamente.'
                : 'Three specialized assistants for daily implementation, site monitoring, and community activity facilitation. Essential for coverage of multiple locations simultaneously.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Materiales y Suministros' : 'Materials & Supplies',
          image: assetPlaceholders.materialsSupplies,
          total: '$300,000 MXN',
          justification: language === 'es'
            ? 'La inversión más significativa se destina a plantas nativas para restaurar 500+ hectáreas y sistemas de irrigación eficientes. Esta inversión genera el impacto ambiental más directo y visible del proyecto.'
            : 'The most significant investment goes to native plants for restoring 500+ hectares and efficient irrigation systems. This investment generates the most direct and visible environmental impact of the project.',
          expectedOutcomes: language === 'es'
            ? ['Restauración de 500+ hectáreas degradadas', 'Establecimiento de 15 jardines comunitarios productivos', 'Reducción del 85% en contaminantes del suelo', 'Mejora del 75% en calidad del agua del Río Nuevo']
            : ['Restoration of 500+ degraded hectares', 'Establishment of 15 productive community gardens', '85% reduction in soil contaminants', '75% improvement in New River water quality'],
          items: [
            { 
              name: language === 'es' ? 'Plantas Nativas (Gran Escala)' : 'Native Plants (Large Scale)', 
              cost: '$200,000 MXN', 
              duration: language === 'es' ? '8 especies para 500+ hectáreas' : '8 species for 500+ hectares',
              total: '$200,000 MXN',
              justification: language === 'es'
                ? 'Adquisición masiva de 50,000+ plantas nativas de 8 especies especializadas. Incluye certificación de calidad, transporte especializado, y garantía de supervivencia del 85%.'
                : 'Massive acquisition of 50,000+ native plants of 8 specialized species. Includes quality certification, specialized transport, and 85% survival guarantee.'
            },
            { 
              name: language === 'es' ? 'Sistemas de Irrigación' : 'Irrigation Systems', 
              cost: '$100,000 MXN', 
              duration: language === 'es' ? 'Riego por goteo para jardines comunitarios' : 'Drip irrigation for community gardens',
              total: '$100,000 MXN',
              justification: language === 'es'
                ? 'Sistemas de riego por goteo de alta eficiencia para 15 jardines comunitarios. Reduce consumo de agua en 60% y asegura supervivencia de plantas en clima árido.'
                : 'High-efficiency drip irrigation systems for 15 community gardens. Reduces water consumption by 60% and ensures plant survival in arid climate.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Infraestructura' : 'Infrastructure',
          image: assetPlaceholders.materialsSupplies,
          total: '$150,000 MXN',
          justification: language === 'es'
            ? 'La infraestructura de jardines comunitarios crea espacios permanentes para educación ambiental y producción de alimentos. Esta inversión genera beneficios sociales y económicos a largo plazo para las familias participantes.'
            : 'Community garden infrastructure creates permanent spaces for environmental education and food production. This investment generates long-term social and economic benefits for participating families.',
          expectedOutcomes: language === 'es'
            ? ['15 jardines comunitarios completamente funcionales', 'Espacios educativos para 300+ estudiantes', 'Producción de alimentos para 1,200 familias', 'Centros de demostración de fitorremediación']
            : ['15 fully functional community gardens', 'Educational spaces for 300+ students', 'Food production for 1,200 families', 'Phytoremediation demonstration centers'],
          items: [
            { 
              name: language === 'es' ? 'Instalación de Jardines Comunitarios' : 'Community Garden Setup', 
              cost: '$150,000 MXN', 
              duration: language === 'es' ? 'Camas elevadas, senderos, almacenamiento' : 'Raised beds, pathways, storage',
              total: '$150,000 MXN',
              justification: language === 'es'
                ? 'Construcción de camas elevadas con suelo mejorado, senderos accesibles, sistemas de almacenamiento de herramientas, y áreas de compostaje. Diseño universal para todas las edades.'
                : 'Construction of raised beds with improved soil, accessible pathways, tool storage systems, and composting areas. Universal design for all ages.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Monitoreo y Análisis' : 'Monitoring & Analysis',
          image: assetPlaceholders.equipmentTechnology,
          total: '$50,000 MXN',
          justification: language === 'es'
            ? 'El monitoreo científico riguroso documenta la efectividad del proyecto y genera evidencia para publicaciones internacionales. Los datos respaldan la replicación del modelo en otras regiones.'
            : 'Rigorous scientific monitoring documents project effectiveness and generates evidence for international publications. Data supports model replication in other regions.',
          expectedOutcomes: language === 'es'
            ? ['8 publicaciones científicas en revistas indexadas', 'Base de datos de 150 puntos de monitoreo', 'Evidencia cuantitativa de efectividad', 'Metodología validada para replicación']
            : ['8 scientific publications in indexed journals', 'Database of 150 monitoring points', 'Quantitative evidence of effectiveness', 'Validated methodology for replication'],
          items: [
            { 
              name: language === 'es' ? 'Análisis de Calidad del Agua' : 'Water Quality Testing', 
              cost: '$30,000 MXN', 
              duration: language === 'es' ? 'Monitoreo mensual de contaminación' : 'Monthly contamination monitoring',
              total: '$30,000 MXN',
              justification: language === 'es'
                ? 'Análisis profesional mensual de 50 puntos de muestreo en el Río Nuevo. Incluye metales pesados, nutrientes, patógenos, y parámetros fisicoquímicos.'
                : 'Professional monthly analysis of 50 sampling points in the New River. Includes heavy metals, nutrients, pathogens, and physicochemical parameters.'
            },
            { 
              name: language === 'es' ? 'Análisis de Suelo' : 'Soil Analysis', 
              cost: '$20,000 MXN', 
              duration: language === 'es' ? 'Evaluación trimestral de salud del suelo' : 'Quarterly soil health assessment',
              total: '$20,000 MXN',
              justification: language === 'es'
                ? 'Evaluación trimestral de 50 sitios de fitorremediación. Incluye análisis de contaminantes, nutrientes, microbiología del suelo, y estructura física.'
                : 'Quarterly evaluation of 50 phytoremediation sites. Includes contaminant analysis, nutrients, soil microbiology, and physical structure.'
            }
          ]
        },
        {
          category: language === 'es' ? 'Contingencia (5%)' : 'Contingency (5%)',
          image: assetPlaceholders.operationalExpenses,
          total: '$50,000 MXN',
          justification: language === 'es'
            ? 'Contingencia del 5% para un proyecto de gran escala que involucra múltiples sitios y comunidades. Permite flexibilidad para aprovechar oportunidades emergentes y manejar desafíos imprevistos.'
            : '5% contingency for a large-scale project involving multiple sites and communities. Allows flexibility to seize emerging opportunities and handle unforeseen challenges.',
          expectedOutcomes: language === 'es'
            ? ['Capacidad de respuesta ante oportunidades de expansión', 'Manejo efectivo de desafíos climáticos', 'Flexibilidad para necesidades comunitarias emergentes', 'Aseguramiento de calidad en todas las actividades']
            : ['Response capacity for expansion opportunities', 'Effective management of climate challenges', 'Flexibility for emerging community needs', 'Quality assurance in all activities'],
          items: [
            { 
              name: language === 'es' ? 'Fondo de Emergencia' : 'Emergency Fund', 
              cost: '$50,000 MXN', 
              duration: language === 'es' ? 'Gastos imprevistos y ajustes' : 'Unforeseen expenses and adjustments',
              total: '$50,000 MXN',
              justification: language === 'es'
                ? 'Reserva para expansión de actividades exitosas, reemplazo de infraestructura por eventos climáticos, o implementación de mejoras sugeridas por la comunidad.'
                : 'Reserve for expansion of successful activities, infrastructure replacement due to climate events, or implementation of community-suggested improvements.'
            }
          ]
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Fixed Navigation with proper spacing */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">{t.nav.title}</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-6">
              {[
                { key: 'hero', label: t.nav.inicio },
                { key: 'crisis', label: t.nav.crisis },
                { key: 'solution', label: t.nav.solucion },
                { key: 'plants', label: t.nav.plantas },
                { key: 'impact', label: t.nav.impacto },
                { key: 'budget', label: t.nav.presupuesto },
                { key: 'podcast', label: t.nav.podcast }
              ].map((item) => (
                <motion.button
                  key={item.key}
                  className={`text-gray-300 hover:text-emerald-400 transition-colors font-medium px-3 py-2 rounded-lg ${
                    activeSection === item.key ? 'bg-emerald-500/20 text-emerald-400' : ''
                  }`}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.key)}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Languages className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Add padding-top to account for fixed navigation */}
      <div className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <motion.div 
            className="relative z-20 text-center text-white px-6 max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
              <br />
              <span className="text-white">{t.hero.subtitle}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {t.hero.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('solution')}
              >
                <Target className="mr-2 h-5 w-5" />
                {t.hero.button1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300"
                onClick={() => scrollToSection('plants')}
              >
                <TreePine className="mr-2 h-5 w-5" />
                {t.hero.button2}
              </Button>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              {[
                { value: "85%", label: t.hero.stats.reduction, desc: t.hero.stats.reductionDesc, color: "from-emerald-400 to-cyan-400" },
                { value: "75%", label: t.hero.stats.families, desc: t.hero.stats.familiesDesc, color: "from-cyan-400 to-blue-400" },
                { value: "90%", label: t.hero.stats.hectares, desc: t.hero.stats.hectaresDesc, color: "from-blue-400 to-indigo-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
                  <div className="text-gray-300 text-sm">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-emerald-400" />
          </motion.div>
        </section>

        {/* Crisis Section */}
        <section id="crisis" className="py-20 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {language === 'es' ? 'Crisis Ambiental' : 'Environmental Crisis'}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-red-400 mb-4">{t.crisis.title}</h3>
                <p className="text-xl text-gray-300 mb-4">{t.crisis.subtitle}</p>
                <p className="text-lg text-gray-400">{t.crisis.description}</p>
              </div>
            </motion.div>

            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={assetPlaceholders.newRiverCrisis}
                  alt="New River Crisis" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    {language === 'es' 
                      ? 'El Río Nuevo transporta más de 100 millones de galones de aguas residuales sin tratar diariamente desde Mexicali hacia el Valle Imperial de California.'
                      : 'The New River carries over 100 million gallons of untreated wastewater daily from Mexicali to California\'s Imperial Valley.'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {language === 'es' ? 'Solución Innovadora' : 'Innovative Solution'}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-4">{t.solution.title}</h3>
                <p className="text-xl text-gray-300 mb-4">{t.solution.subtitle}</p>
                <p className="text-lg text-gray-400 mb-8">{t.solution.description}</p>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
                  onClick={() => setSelectedImpact({
                    id: 'solution-detail',
                    category: language === 'es' ? 'Cómo Funciona la Fitorremediación' : 'How Phytoremediation Works',
                    color: 'from-emerald-400 to-cyan-400',
                    image: assetPlaceholders.phytoremediationDiagram,
                    metrics: [
                      {
                        label: language === 'es' ? 'Fitoextracción' : 'Phytoextraction',
                        value: '90%',
                        desc: language === 'es' ? 'Absorción de metales pesados por las raíces' : 'Heavy metal absorption by roots',
                        detail: language === 'es' 
                          ? 'Las plantas absorben contaminantes del suelo a través de sus raíces y los transportan a tallos y hojas, donde se acumulan o transforman en compuestos menos tóxicos.'
                          : 'Plants absorb contaminants from soil through their roots and transport them to stems and leaves, where they accumulate or transform into less toxic compounds.'
                      },
                      {
                        label: language === 'es' ? 'Rizofiltración' : 'Rhizofiltration',
                        value: '85%',
                        desc: language === 'es' ? 'Filtración de agua contaminada por raíces' : 'Contaminated water filtration by roots',
                        detail: language === 'es'
                          ? 'Las raíces actúan como filtros biológicos, absorbiendo contaminantes directamente del agua y creando una barrera natural contra la propagación de la contaminación.'
                          : 'Roots act as biological filters, absorbing contaminants directly from water and creating a natural barrier against contamination spread.'
                      },
                      {
                        label: language === 'es' ? 'Fitoestabilización' : 'Phytostabilization',
                        value: '80%',
                        desc: language === 'es' ? 'Inmovilización de contaminantes en el suelo' : 'Soil contaminant immobilization',
                        detail: language === 'es'
                          ? 'Las plantas inmovilizan contaminantes en la zona de las raíces mediante precipitación, adsorción o reducción de la biodisponibilidad, evitando su migración.'
                          : 'Plants immobilize contaminants in the root zone through precipitation, adsorption or bioavailability reduction, preventing their migration.'
                      }
                    ]
                  })}
                >
                  <Microscope className="mr-2 h-5 w-5" />
                  {language === 'es' ? 'Descubre Cómo Funciona' : 'Discover How It Works'}
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={phytoremediationDiagram}
                  alt="Phytoremediation Process" 
                  className="w-full h-96 object-cover bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    {language === 'es' 
                      ? 'Proceso de fitorremediación: Las plantas absorben, acumulan y degradan contaminantes del suelo y agua'
                      : 'Phytoremediation process: Plants absorb, accumulate and degrade contaminants from soil and water'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Plants Section */}
        <section id="plants" className="py-20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {language === 'es' ? 'Arsenal Verde' : 'Green Arsenal'}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-4">{t.plants.title}</h3>
                <p className="text-xl text-gray-300 mb-4">{t.plants.subtitle}</p>
                <p className="text-lg text-gray-400">{t.plants.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plantData.map((plant, index) => (
                <motion.div
                  key={plant.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedPlant(plant)}
                >
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2`}>
                      {plant.effectiveness}%
                    </div>
                    <img 
                      src={plant.fullImage} 
                      alt={plant.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <h3 className="text-lg font-semibold text-white mb-2">{plant.name}</h3>
                    <p className="text-sm text-emerald-400 mb-2 italic">{plant.scientific}</p>
                    <p className="text-sm text-gray-300 mb-3">{plant.specialty}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {plant.contaminants.slice(0, 2).map((contaminant, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {contaminant}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {language === 'es' ? 'Impacto Transformador' : 'Transformative Impact'}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">{t.impact.title}</h3>
                <p className="text-xl text-gray-300 mb-4">{t.impact.subtitle}</p>
                <p className="text-lg text-gray-400">{t.impact.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 cursor-pointer hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedImpact(category)}
                >
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-300">{metric.label}</span>
                          <span className={`font-bold text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {metric.value}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(parseInt(metric.value) || 85, 100)}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + metricIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <p className="text-xs text-gray-400">{metric.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Section */}
        <section id="budget" className="py-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {language === 'es' ? 'Inversión Estratégica' : 'Strategic Investment'}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">{t.budget.title}</h3>
                <p className="text-xl text-gray-300 mb-4">{t.budget.subtitle}</p>
                <p className="text-lg text-gray-400">{t.budget.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Phase 1 */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{budgetData.phase1.title}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {budgetData.phase1.amount}
                  </div>
                  <p className="text-gray-300">{budgetData.phase1.duration}</p>
                </div>

                <div className="space-y-6">
                  {budgetData.phase1.categories.map((category, index) => (
                    <div key={index} className="border-l-4 border-emerald-400 pl-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src={category.image} 
                          alt={category.category}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-emerald-400">{category.category}</h4>
                          <p className="text-emerald-300 text-sm font-bold">{category.total}</p>
                        </div>
                      </div>
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="mb-3 pl-4 border-l-2 border-emerald-200/20 cursor-pointer hover:bg-white/5 rounded-lg p-2 transition-all duration-300"
                          onClick={() => setSelectedBudgetItem({
                            ...item,
                            category: category.category,
                            categoryJustification: category.justification,
                            categoryOutcomes: category.expectedOutcomes,
                            phase: budgetData.phase1.title,
                            image: category.image
                          })}
                        >
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          <p className="text-emerald-400 text-sm font-semibold">{item.total}</p>
                          <p className="text-gray-400 text-xs">{item.cost} • {item.duration}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{budgetData.phase2.title}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {budgetData.phase2.amount}
                  </div>
                  <p className="text-gray-300">{budgetData.phase2.duration}</p>
                </div>

                <div className="space-y-6">
                  {budgetData.phase2.categories.map((category, index) => (
                    <div key={index} className="border-l-4 border-blue-400 pl-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src={category.image} 
                          alt={category.category}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-blue-400">{category.category}</h4>
                          <p className="text-blue-300 text-sm font-bold">{category.total}</p>
                        </div>
                      </div>
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="mb-3 pl-4 border-l-2 border-blue-200/20 cursor-pointer hover:bg-white/5 rounded-lg p-2 transition-all duration-300"
                          onClick={() => setSelectedBudgetItem({
                            ...item,
                            category: category.category,
                            categoryJustification: category.justification,
                            categoryOutcomes: category.expectedOutcomes,
                            phase: budgetData.phase2.title,
                            image: category.image
                          })}
                        >
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          <p className="text-blue-400 text-sm font-semibold">{item.total}</p>
                          <p className="text-gray-400 text-xs">{item.cost} • {item.duration}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {language === 'es' ? 'Contenido Multimedia' : 'Multimedia Content'}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">{t.podcast.title}</h3>
                <p className="text-xl text-gray-300 mb-4">{t.podcast.subtitle}</p>
                <p className="text-lg text-gray-400">{t.podcast.description}</p>
              </div>
            </motion.div>

            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                    <Podcast className="h-8 w-8 text-purple-400" />
                    {language === 'es' ? '"Voces del Cambio Verde"' : '"Voices of Green Change"'}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {language === 'es' 
                      ? 'Entrevistas exclusivas con científicos, líderes comunitarios y expertos en biorremediación'
                      : 'Exclusive interviews with scientists, community leaders and bioremediation experts'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-4">{t.podcast.uploadTitle}</h4>
                    <div className="border-2 border-dashed border-purple-400 rounded-lg p-8 hover:border-purple-300 transition-colors">
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={handleAudioUpload}
                        className="hidden"
                        id="audio-upload"
                      />
                      <label
                        htmlFor="audio-upload"
                        className="cursor-pointer flex flex-col items-center space-y-4"
                      >
                        <Upload className="h-12 w-12 text-purple-400" />
                        <div className="text-center">
                          <p className="text-white font-medium">
                            {language === 'es' ? 'Haz clic para subir audio' : 'Click to upload audio'}
                          </p>
                          <p className="text-gray-400 text-sm mt-2">{t.podcast.uploadDesc}</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {audioFile && (
                    <motion.div
                      className="bg-white/5 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Play className="h-5 w-5 text-purple-400" />
                        <span className="text-white font-medium">{audioFile.name}</span>
                      </div>
                      <audio controls className="w-full">
                        <source src={URL.createObjectURL(audioFile)} type={audioFile.type} />
                        {language === 'es' ? 'Tu navegador no soporta el elemento de audio.' : 'Your browser does not support the audio element.'}
                      </audio>
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>{language === 'es' ? 'Tipo:' : 'Type:'} {audioFile.type}</span>
                        <span>{language === 'es' ? 'Tamaño:' : 'Size:'} {(audioFile.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Project Summary Section */}
        <section id="summary" className="py-20 bg-gradient-to-br from-slate-900/40 to-gray-900/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t.summary.title}
              </h2>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">{t.summary.subtitle}</h3>
                <p className="text-xl text-gray-400 mb-8">{t.summary.description}</p>
                
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h4 className="text-2xl font-bold text-emerald-400 mb-2">$1.2M MXN</h4>
                      <p className="text-gray-300">{language === 'es' ? 'Inversión Total' : 'Total Investment'}</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-cyan-400 mb-2">12 {language === 'es' ? 'meses' : 'months'}</h4>
                      <p className="text-gray-300">{language === 'es' ? 'Duración del Proyecto' : 'Project Duration'}</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-blue-400 mb-2">500+ {language === 'es' ? 'hectáreas' : 'hectares'}</h4>
                      <p className="text-gray-300">{language === 'es' ? 'Área de Impacto' : 'Impact Area'}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://kgv.emb.mybluehost.me/website_ba759d6e/proposal/photos/bioremediation_project_proposal.pdf', '_blank')}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    {t.summary.button}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Plant Modal */}
      <AnimatePresence>
        {selectedPlant && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlant(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedPlant.name}</h3>
                  <p className="text-emerald-400 italic text-lg">{selectedPlant.scientific}</p>
                </div>
                <button
                  onClick={() => setSelectedPlant(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    {language === 'es' ? 'Planta Completa' : 'Full Plant'}
                  </h4>
                  <img 
                    src={selectedPlant.fullImage} 
                    alt={`${selectedPlant.name} full plant`}
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    {language === 'es' ? 'Detalle Cercano' : 'Close-up Detail'}
                  </h4>
                  <img 
                    src={selectedPlant.closeupImage} 
                    alt={`${selectedPlant.name} close-up`}
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-emerald-400" />
                    {language === 'es' ? 'Efectividad' : 'Effectiveness'}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-700 rounded-full h-4">
                      <div 
                        className="h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"
                        style={{ width: `${selectedPlant.effectiveness}%` }}
                      />
                    </div>
                    <span className="text-emerald-400 font-bold text-xl">{selectedPlant.effectiveness}%</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Microscope className="h-5 w-5 mr-2 text-blue-400" />
                    {language === 'es' ? 'Descripción Científica' : 'Scientific Description'}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedPlant.description}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Droplets className="h-5 w-5 mr-2 text-cyan-400" />
                    {language === 'es' ? 'Mecanismos de Fitorremediación' : 'Phytoremediation Mechanisms'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPlant.mechanisms.map((mechanism, index) => (
                      <div key={index} className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                        <p className="text-cyan-300 text-sm">{mechanism}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-orange-400" />
                    {language === 'es' ? 'Contaminantes Específicos' : 'Specific Contaminants'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlant.contaminants.map((contaminant, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1">
                        {contaminant}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-400" />
                    {language === 'es' ? 'Rol en el Proyecto' : 'Project Role'}
                  </h4>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <p className="text-purple-200 leading-relaxed">{selectedPlant.projectRole}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact Modal */}
      <AnimatePresence>
        {selectedImpact && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImpact(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${selectedImpact.color} bg-clip-text text-transparent`}>
                  {selectedImpact.category}
                </h3>
                <button
                  onClick={() => setSelectedImpact(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mb-8">
                <img 
                  src={selectedImpact.image} 
                  alt={selectedImpact.category}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                {selectedImpact.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 rounded-lg p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold text-white">{metric.label}</h4>
                      <span className={`text-3xl font-bold bg-gradient-to-r ${selectedImpact.color} bg-clip-text text-transparent`}>
                        {metric.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <motion.div 
                        className={`h-3 rounded-full bg-gradient-to-r ${selectedImpact.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(parseInt(metric.value) || 85, 100)}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                    <p className="text-gray-300 mb-3">{metric.desc}</p>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-current">
                      <p className="text-gray-200 leading-relaxed">{metric.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Budget Item Modal */}
      <AnimatePresence>
        {selectedBudgetItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBudgetItem(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedBudgetItem.name}</h3>
                  <p className="text-emerald-400 text-xl font-semibold">{selectedBudgetItem.total}</p>
                  <p className="text-gray-300">{selectedBudgetItem.category} • {selectedBudgetItem.phase}</p>
                </div>
                <button
                  onClick={() => setSelectedBudgetItem(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mb-8">
                <img 
                  src={selectedBudgetItem.image} 
                  alt={selectedBudgetItem.category}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-emerald-400" />
                    {language === 'es' ? 'Desglose de Costos' : 'Cost Breakdown'}
                  </h4>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">{language === 'es' ? 'Costo por período:' : 'Cost per period:'}</span>
                        <p className="text-white font-semibold">{selectedBudgetItem.cost}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">{language === 'es' ? 'Duración:' : 'Duration:'}</span>
                        <p className="text-white font-semibold">{selectedBudgetItem.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-400" />
                    {language === 'es' ? 'Justificación de la Inversión' : 'Investment Justification'}
                  </h4>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-blue-200 leading-relaxed">{selectedBudgetItem.justification}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-400" />
                    {language === 'es' ? 'Justificación de Categoría' : 'Category Justification'}
                  </h4>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <p className="text-purple-200 leading-relaxed">{selectedBudgetItem.categoryJustification}</p>
                  </div>
                </div>

                {selectedBudgetItem.categoryOutcomes && (
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                      {language === 'es' ? 'Resultados Esperados' : 'Expected Outcomes'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedBudgetItem.categoryOutcomes.map((outcome, index) => (
                        <div key={index} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <p className="text-green-200 text-sm">{outcome}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Made with Manus badge */}
      <div className="fixed bottom-4 right-4 z-40">
        <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
          Made with Manus
        </Badge>
      </div>
    </div>
  )
}

export default App

