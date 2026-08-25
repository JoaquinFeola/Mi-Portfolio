import billderLogo from "@public/images/projects/billder-logo.png";
import reffindrLogo from "@public/images/projects/reffindr-logo.png";
import xlabLogo from "@public/images/projects/xlab-logo.png";

import type { ImageMetadata } from "astro";

export interface Project {
    number: string;
    year: number;
    title: string;
    category: string;
    description: string;
    highlights: string[];
    stack: string[];
    accent?: "red" | "blue" | "green";
    repositories?: {
        label: string;
        url: string;
    }[];
    logo?: ImageMetadata;
    logoAlt?: string;
};

// Para sumar un proyecto, agregá un objeto con esta misma estructura.
export const projects: Project[] = [
    {
        number: "01",
        year: 2026,
        title: "Plataforma educativa",
        category: "EdTech · Arquitectura distribuida",
        description: "Plataforma educativa utilizada por cientos de estudiantes, evolucionada con una arquitectura orientada a eventos para desacoplar procesos, gestionar flujos asíncronos e integrar operaciones críticas como pagos.",
        logo: xlabLogo,
        highlights: [
            "Arquitectura orientada a eventos",
            "Procesos de pago",
            "Escalabilidad"
        ],
        stack: [
            "React",
            "TypeScript",
            ".NET",
            "NestJS",
            "Google Pub/Sub"
        ],
        accent: "red",
    },
    {
        number: "02",
        year: 2025,
        title: "SaaS B2B / ATS",
        category: "HR Tech · Producto multi-tenant",
        description: "Plataforma SaaS B2B para la gestión de procesos de reclutamiento, diseñada como un ATS multi-tenant para operar con múltiples organizaciones mediante una interfaz modular y escalable.",
        highlights: [
            "SaaS B2B",
            "Arquitectura multi-tenant",
            "Componentes reutilizables"
        ],
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST APIs"
        ],
        accent: "blue",
    },
    {
        number: "03",
        year: 2024,
        title: "Reffindr",
        category: "PropTech colaborativa",
        description: "Solución inmobiliaria construida en un equipo multidisciplinario, integrando frontend, BFF, backend, datos y despliegue en la nube.",
        highlights: ["Trabajo multidisciplinario", "Arquitectura integral", "Entrega iterativa"],
        stack: ["React", "Node.js", ".NET", "Python", "AWS"],
        accent: "green",
        logo: reffindrLogo,
        repositories: [
            {
                label: "Frontend",
                url: "https://github.com/IgrowkerTraining/i004-reffindr-front",
            },
        ],
    },
    {
        number: "04",
        year: 2024,
        title: "Billder",
        category: "PropTech colaborativa",
        description: "Solución inmobiliaria construida en un equipo multidisciplinario, integrando frontend, BFF, backend, datos y despliegue en la nube.",
        highlights: ["Trabajo multidisciplinario", "Arquitectura integral", "Entrega iterativa"],
        stack: ["React", "Node.js", ".NET", "Python", "AWS"],
        accent: "red",
        logo: billderLogo,
        logoAlt: "Billder",
        repositories: [
            {
                label: "Frontend",
                url: "https://github.com/IgrowkerTraining/i003-billder-front",
            },
        ],
    },
];


export interface JobExperience {
    order: number;
    role: string;
    company: string;
    description: string;
    from: Date;
    to?: Date;
    currentlyWorking: boolean;
}

export const jobExcperiences: JobExperience[] = [
    {
        order: 1,
        role: "Desarrollador Full Stack",
        company: "Igrowker ISA",
        description: `
        <p>
            Contribuí al desarrollo de una <strong>plataforma educativa utilizada por cientos de estudiantes</strong>, participando en la evolución del producto y en la implementación de funcionalidades orientadas a mejorar la experiencia de usuario y acompañar su crecimiento.
        </p>
        <p>
            Trabajé de forma full stack en el desarrollo de funcionalidades con <strong>React y TypeScript</strong> en frontend, y <strong>.NET y NestJS </strong> en backend. También participé en la evolución de la arquitectura mediante <strong>Event-Driven Architecture (EDA) con Google Pub/Sub</strong>, y en la integración de <strong>Mercado Pago y Stripe</strong>, automatizando procesos de pago y fortaleciendo operaciones críticas de la plataforma.
        </p>
        <p>
            <strong>Impacto:</strong> contribuí al crecimiento y escalabilidad de una plataforma educativa con usuarios reales, trabajando sobre funcionalidades de producto, procesos de pago y componentes de arquitectura.
        </p>
        `,
        from: new Date("2025-03-24"),
        to: new Date("2026-03-24"),
        currentlyWorking: false
    },
    {
        order: 2,
        role: "Desarrollador Front End",
        company: "Igrowker Labs",
        description: `
        <p>
           Participé en el desarrollo de una <strong>plataforma SaaS B2B</strong> para la gestión de procesos de reclutamiento, basada en un <strong>Applicant Tracking System (ATS) multi-tenant</strong> utilizado por múltiples empresas.
        </p>
        <p>
            Tuve responsabilidad sobre el desarrollo del frontend con <strong>React, TypeScript y Tailwind CSS</strong>, creando interfaces y componentes reutilizables. Además, colaboré en la implementación de la arquitectura <strong>multi-tenant</strong> y en la integración con <strong>APIs REST</strong>, contribuyendo a una solución preparada para operar con múltiples organizaciones de forma escalable
        </p>
        <p>
            <strong>Impacto:</strong> contribuí a la evolución de un producto B2B orientado a empresas, mejorando la reutilización de componentes y participando en decisiones técnicas relacionadas con escalabilidad y multi-tenancy.
        </p>
        `,
        from: new Date("2025-01-24"),
        to: new Date("2025-02-24"),
        currentlyWorking: false
    },
]
