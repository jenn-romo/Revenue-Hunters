import { ChecklistPhase, Benefit, PricingModel, BlogPost } from './types';

export const CHECKLIST_STEPS: ChecklistPhase[] = [
  {
    phase: "Phase 1",
    title: "Discovery & Identity",
    items: [
        { id: "1-1", text: "Define the Avatar (Title, Industry, Pain Points)" },
        { id: "1-2", text: "Success Metric Definition (Win = Zoom call, Transfer, or Deposit?)" },
        { id: "1-3", text: "Technical Audit (CRM & Calendar setup)" }
    ]
  },
  {
    phase: "Phase 2",
    title: "Asset Collection",
    items: [
        { id: "2-1", text: "Knowledge Base Ingestion (50–100 FAQs)" },
        { id: "2-2", text: "Script Analysis (Best-performing scripts & decks)" },
        { id: "2-3", text: "Voice Selection (Match brand authority)" }
    ]
  },
  {
    phase: "Phase 3",
    title: "Integration",
    items: [
        { id: "3-1", text: "Calendar Sync (Real-time booking)" },
        { id: "3-2", text: "Lead Source Connection (API or CSV)" },
        { id: "3-3", text: "Communication Workflow (Post-call triggers)" }
    ]
  }
];

export const REQUIRED_INPUTS = [
    { title: "The 'Golden' Recordings", desc: "3–5 recordings of best human sales calls to clone tone." },
    { title: "The 'Failure' Recordings", desc: "3–5 recordings of failed calls to teach avoidance." },
    { title: "The 'Kill List' (Rebuttals)", desc: "Top 10 objections and exact required comebacks." },
    { title: "Lead Data (CSV)", desc: "Name, Phone, Company, Source." },
    { title: "Workflow Logic", desc: "Map of post-call actions (e.g., Interested -> Book Call)." }
];

export const PRICING_MODELS: PricingModel[] = [
    {
        title: "ASR Outbound",
        target: "",
        price: "$595/mo",
        color: "dark",
        features: [
            "$3,000 Setup Fee",
            "1 AI Agent",
            "Standard CRM Integration",
            "500 outbound calls/month",
            "Perfect for validating the model"
        ]
    }
];