export type NavItem = { label: string; href: `#${string}` };
export type Experience = {
    company: string;
    role: string;
    period: string;
    location?: string;
    highlights: string[];
};
export type SkillGroup = { label: string; skills: string[] };
export type Project = {
    title: string;
    eyebrow: string;
    description: string;
    features: string[];
    stack: string[];
    links: { label: string; href: string }[];
};

export const site = {
    name: 'Criss Jericho Geli',
    shortName: 'CJ',
    title: 'Full-Stack Software Engineer & AI/LLM Applications Developer',
    email: 'crissjerichogeli12@gmail.com',
    github: 'https://github.com/crissuu1215',
    description:
        'Full-stack software engineer building practical AI systems, reliable APIs, and thoughtfully composed web experiences.',
};

export const navigation: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const skillGroups: SkillGroup[] = [
    {
        label: 'AI / LLM',
        skills: [
            'RAG',
            'Agentic AI',
            'LangChain',
            'LangGraph',
            'Prompt Engineering',
            'LLM Tool Integration',
        ],
    },
    {
        label: 'Frontend',
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'Reusable UI',
            'Responsive Systems',
        ],
    },
    {
        label: 'Backend',
        skills: [
            'Node.js',
            'Express.js',
            'FastAPI',
            'Sails.js',
            'REST APIs',
            'SSE',
        ],
    },
    {
        label: 'Data & Delivery',
        skills: [
            'SQL / NoSQL',
            'Milvus',
            'ServiceNow',
            'Git',
            'Scrum',
            'Production Support',
        ],
    },
];

export const experiences: Experience[] = [
    {
        company: 'DXC Philippines',
        role: 'Sr. Analyst II, Software Engineering',
        period: '2025 — Present',
        highlights: [
            'Build and maintain enterprise React, Next.js, Node.js, Express, and Sails.js applications across frontend and backend workflows.',
            'Developed scheduled ServiceNow data feeds with persistence, retry handling, and operational monitoring for long-running processes.',
            'Contribute to AI enablement initiatives spanning RAG, agentic workflows, LLM application architecture, and tool-based automation.',
        ],
    },
    {
        company: 'CoolRIOTS',
        role: 'Business Execution Engineer / Full-Stack & LLM Applications Developer',
        period: '2023 — 2025',
        location: 'Remote · Singapore-based',
        highlights: [
            'Created React interfaces and Node.js, Express, and FastAPI services for chatbots, document understanding, and AI-powered workflows.',
            'Contributed to RAG systems that transform varied file types into structured, searchable knowledge bases.',
            'Designed and evaluated prompts for conversational, document-analysis, and knowledge-retrieval experiences.',
        ],
    },
];

export const flagshipProject: Project = {
    title: 'Northstar AI HR',
    eyebrow: 'Featured AI system',
    description:
        'An end-to-end employee portal where an agent can retrieve confidential policy knowledge, answer leave questions, and take action through authenticated tools.',
    features: [
        'LangGraph routes requests across RAG, leave-balance, and leave-filing tools.',
        'Token-by-token SSE chat with persistent history and summarized conversation memory.',
        'Document ingestion, structure-aware chunking, Ollama embeddings, and Milvus search.',
        'HttpOnly cookie authentication with automatic refresh-token rotation.',
    ],
    stack: [
        'Next.js',
        'React',
        'TypeScript',
        'FastAPI',
        'LangGraph',
        'LangChain',
        'MySQL',
        'Milvus',
        'Ollama',
    ],
    links: [
        {
            label: 'Frontend repository',
            href: 'https://github.com/crissuu1215/ai-hr-usecase-fe',
        },
        {
            label: 'Backend repository',
            href: 'https://github.com/crissuu1215/ai-hr-usecase-be',
        },
    ],
};
