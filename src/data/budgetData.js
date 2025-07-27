// Detailed budget data extracted from granular budget breakdown document
export const budgetData = {
  phase1: {
    title: "Phase 1: Foundation (3 months)",
    total: 200000,
    duration: "3 months",
    categories: [
      {
        id: "personnel",
        name: "Personnel",
        total: 72000,
        percentage: 36,
        color: "#3b82f6",
        items: [
          {
            name: "Environmental Scientist (Master's)",
            description: "22,500/month (40 hrs/week)",
            duration: "2 months",
            unitCost: 22500,
            quantity: 2,
            total: 45000
          },
          {
            name: "Community Engagement Specialist",
            description: "9,000/month (40 hrs/week)",
            duration: "3 months",
            unitCost: 9000,
            quantity: 3,
            total: 27000
          }
        ]
      },
      {
        id: "materials",
        name: "Materials & Supplies",
        total: 45000,
        percentage: 22.5,
        color: "#10b981",
        items: [
          {
            name: "Native Plant Seeds & Seedlings",
            description: "Initial collection for pilot studies",
            unitCost: 150,
            quantity: 200,
            total: 30000
          },
          {
            name: "Basic Gardening Tools",
            description: "Shovels, pruners, watering equipment",
            unitCost: 500,
            quantity: 30,
            total: 15000
          }
        ]
      },
      {
        id: "travel",
        name: "Travel & Logistics",
        total: 25000,
        percentage: 12.5,
        color: "#f59e0b",
        items: [
          {
            name: "Site Assessment Transportation",
            description: "Vehicle rental and fuel",
            unitCost: 2500,
            quantity: 8,
            total: 20000
          },
          {
            name: "Community Meeting Venues",
            description: "Space rental for engagement sessions",
            unitCost: 1000,
            quantity: 5,
            total: 5000
          }
        ]
      },
      {
        id: "equipment",
        name: "Equipment & Technology",
        total: 35000,
        percentage: 17.5,
        color: "#8b5cf6",
        items: [
          {
            name: "Soil Testing Kits",
            description: "pH, nutrient, and contamination testing",
            unitCost: 5000,
            quantity: 5,
            total: 25000
          },
          {
            name: "Documentation Equipment",
            description: "Cameras, tablets for data collection",
            unitCost: 10000,
            quantity: 1,
            total: 10000
          }
        ]
      },
      {
        id: "operations",
        name: "Operational Expenses",
        total: 13000,
        percentage: 6.5,
        color: "#ef4444",
        items: [
          {
            name: "Communications",
            description: "Phone, internet, printing",
            unitCost: 2000,
            quantity: 3,
            total: 6000
          },
          {
            name: "Educational Materials",
            description: "Brochures, posters, workshop supplies",
            unitCost: 7000,
            quantity: 1,
            total: 7000
          }
        ]
      },
      {
        id: "contingency",
        name: "Contingency (5%)",
        total: 10000,
        percentage: 5,
        color: "#6b7280",
        items: [
          {
            name: "Emergency Fund",
            description: "Unforeseen expenses and adjustments",
            unitCost: 10000,
            quantity: 1,
            total: 10000
          }
        ]
      }
    ]
  },
  phase2: {
    title: "Phase 2: Scaling (9 months)",
    total: 1000000,
    duration: "9 months",
    categories: [
      {
        id: "personnel",
        name: "Personnel",
        total: 450000,
        percentage: 45,
        color: "#3b82f6",
        items: [
          {
            name: "Project Coordinator (PhD)",
            description: "35,000/month (40 hrs/week)",
            duration: "9 months",
            unitCost: 35000,
            quantity: 9,
            total: 315000
          },
          {
            name: "Field Assistants",
            description: "5,000/month each (20 hrs/week)",
            duration: "9 months",
            unitCost: 5000,
            quantity: 18,
            total: 90000
          },
          {
            name: "Community Educators",
            description: "5,000/month each (20 hrs/week)",
            duration: "9 months",
            unitCost: 5000,
            quantity: 9,
            total: 45000
          }
        ]
      },
      {
        id: "materials",
        name: "Materials & Supplies",
        total: 300000,
        percentage: 30,
        color: "#10b981",
        items: [
          {
            name: "Native Plants (Large Scale)",
            description: "8 species for 500+ hectares",
            unitCost: 50,
            quantity: 5000,
            total: 250000
          },
          {
            name: "Irrigation Systems",
            description: "Drip irrigation for community gardens",
            unitCost: 25000,
            quantity: 2,
            total: 50000
          }
        ]
      },
      {
        id: "infrastructure",
        name: "Infrastructure",
        total: 150000,
        percentage: 15,
        color: "#f59e0b",
        items: [
          {
            name: "Community Garden Setup",
            description: "Raised beds, pathways, storage",
            unitCost: 75000,
            quantity: 2,
            total: 150000
          }
        ]
      },
      {
        id: "monitoring",
        name: "Monitoring & Analysis",
        total: 50000,
        percentage: 5,
        color: "#8b5cf6",
        items: [
          {
            name: "Water Quality Testing",
            description: "Monthly contamination monitoring",
            unitCost: 2500,
            quantity: 18,
            total: 45000
          },
          {
            name: "Soil Analysis",
            description: "Quarterly soil health assessment",
            unitCost: 2500,
            quantity: 2,
            total: 5000
          }
        ]
      },
      {
        id: "contingency",
        name: "Contingency (5%)",
        total: 50000,
        percentage: 5,
        color: "#6b7280",
        items: [
          {
            name: "Emergency Fund",
            description: "Unforeseen expenses and adjustments",
            unitCost: 50000,
            quantity: 1,
            total: 50000
          }
        ]
      }
    ]
  }
}

// Expected Results data for interactive diagram
export const expectedResults = {
  environmental: {
    title: "Environmental Impact",
    color: "#10b981",
    metrics: [
      {
        name: "Contaminant Reduction",
        value: 85,
        unit: "%",
        description: "Heavy metals and organic pollutants",
        timeline: "24 months"
      },
      {
        name: "Water Quality Improvement",
        value: 75,
        unit: "%",
        description: "New River water clarity and safety",
        timeline: "18 months"
      },
      {
        name: "Soil Remediation",
        value: 500,
        unit: "hectares",
        description: "Contaminated land restored",
        timeline: "36 months"
      },
      {
        name: "Biodiversity Increase",
        value: 40,
        unit: "%",
        description: "Native species population growth",
        timeline: "24 months"
      }
    ]
  },
  social: {
    title: "Social Impact",
    color: "#3b82f6",
    metrics: [
      {
        name: "Families Benefited",
        value: 1200,
        unit: "families",
        description: "Direct health and economic benefits",
        timeline: "12 months"
      },
      {
        name: "Community Participation",
        value: 95,
        unit: "%",
        description: "Active engagement in project activities",
        timeline: "6 months"
      },
      {
        name: "Educational Workshops",
        value: 48,
        unit: "sessions",
        description: "Environmental science education",
        timeline: "12 months"
      },
      {
        name: "Youth Engagement",
        value: 300,
        unit: "students",
        description: "School-based environmental programs",
        timeline: "9 months"
      }
    ]
  },
  economic: {
    title: "Economic Impact",
    color: "#f59e0b",
    metrics: [
      {
        name: "Job Creation",
        value: 45,
        unit: "jobs",
        description: "Direct and indirect employment",
        timeline: "3 months"
      },
      {
        name: "Property Value Increase",
        value: 15,
        unit: "%",
        description: "Improved environmental conditions",
        timeline: "24 months"
      },
      {
        name: "Healthcare Cost Reduction",
        value: 30,
        unit: "%",
        description: "Reduced pollution-related illnesses",
        timeline: "18 months"
      },
      {
        name: "Agricultural Productivity",
        value: 25,
        unit: "%",
        description: "Improved soil and water quality",
        timeline: "24 months"
      }
    ]
  },
  scientific: {
    title: "Scientific Impact",
    color: "#8b5cf6",
    metrics: [
      {
        name: "Research Publications",
        value: 8,
        unit: "papers",
        description: "Peer-reviewed scientific articles",
        timeline: "24 months"
      },
      {
        name: "Data Collection Points",
        value: 150,
        unit: "sites",
        description: "Comprehensive monitoring network",
        timeline: "6 months"
      },
      {
        name: "Technology Transfer",
        value: 5,
        unit: "regions",
        description: "Replication in other areas",
        timeline: "36 months"
      },
      {
        name: "Scientific Collaborations",
        value: 12,
        unit: "institutions",
        description: "Academic and research partnerships",
        timeline: "12 months"
      }
    ]
  }
}

