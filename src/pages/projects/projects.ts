export interface Project {
  slug: string;
  title: string;
  role: string;
  whatIBuilt?: string;
  techStack?: string[];
  liveSite?: string;
  note?: string;
  createdAt: Date;
  images?: string[];
  [key: string]: any;
}

export const projects: Project[] = [
  {
    slug: "goansuran",
    images: ["/x/project-a-2.webp", "/x/project-a-3.webp", "/x/project-a.webp"],
    title: "Goansuran - E-Commerce Platform",
    role: "Full Stack (Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL)",
    whatIBuilt:
      "Built a full-fledged e-commerce platform with features like user authentication, product catalog, shopping cart, and order processing.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    liveSite: "https://goansuran.com/",
    note: "This project from my previous job as a full-stack developer. I worked on this project for 2 months. The project is still live and used by thousands of users.",
    createdAt: new Date("2025-08-01"),
  },
  {
    slug: "amaron36",
    images: ["/x/project-b-2.webp", "/x/project-b-3.webp", "/x/project-b.webp"],
    title: "Amaron36 Corporate Website",
    role: "WordPress Developer & Front-end Customizer  ",
    whatIBuilt:
      "Customized an existing WordPress theme to align with the client's brand and content structure. Built and refined pages using Elementor (About, Leadership, Contact) with pixel-perfect attention to design. Enhanced mobile responsiveness and site performance. Implemented client-specific layout adjustments and interactive elements without breaking theme updates ",
    techStack: ["WordPress", "Elementor", "PHP", "CSS", "JavaScript"],
    liveSite: "https://amaron36.com/",
    note: "Project completed for a corporate client. Shared here for portfolio purposes with public-facing content only.",
    createdAt: new Date("2023-03-01"),
  },
  {
    slug: "apaq-group",
    images: ["/x/project-c-2.webp", "/x/project-c-3.webp", "/x/project-c.webp"],
    title: "APAQ Group Corporate Website",
    role: "WordPress Developer & Front-end Customizer",
    whatIBuilt:
      "Customized a pre-built WordPress theme to reflect APAQ Group’s corporate identity and multi-industry presence. Built and structured key pages (About, Subsidiaries, Services) using Elementor with clean, professional layouts. Ensured full mobile responsiveness and cross-browser compatibility. Integrated client-provided content (text, images, certifications) into a cohesive, user-friendly interface  ",
    techStack: ["WordPress", "Elementor", "PHP", "CSS", "JavaScript"],
    liveSite: "https://apaqgroup.com/",
    note: "Project completed for a Malaysian corporate client. Shared here for portfolio purposes using only public-facing content.",
    createdAt: new Date("2019-09-01"),
  },
  {
    slug: "forest-hill-residences",
    images: ["/x/project-d-2.webp", "/x/project-d-3.webp", "/x/project-d.webp"],
    title: "Forest Hill Residences - Landing Page",
    role: "Full Stack (Nuxt.js, Vue 3, Tailwind CSS, Responsive Design  )",
    whatIBuilt:
      "Translated high-fidelity Figma designs into a fully responsive, production-ready Nuxt.js website. Implemented dynamic sections: property highlights, unit specs, location map, and nearby amenities. Ensured pixel-perfect alignment with design system (typography, spacing, colors, breakpoints). Optimized performance with lazy loading, image optimization, and semantic HTML  ",
    techStack: ["Nuxt.js", "Vue 3", "TypeScript", "Tailwind CSS"],
    liveSite: "https://foresthilldamansara.com/residences/",
    note: "Front-end development based on provided Figma designs. Shared here for portfolio purposes.",
    createdAt: new Date("2020-03-01"),
  },
  {
    slug: "dodomat",
    images: ["/x/project-e-2.webp", "/x/project-e-3.webp", "/x/project-e.webp"],
    title: "DodoMat - E-Commerce Store",
    role: "Full Stack (OpenCart, PHP, MySQL, HTML/CSS, JavaScript )",
    whatIBuilt:
      "Built a custom OpenCart store for premium car mats with product filtering by car model. Integrated secure checkout, user accounts, and admin dashboard. Customized theme and modules to match brand identity. Optimized for SEO and mobile responsiveness  ",
    techStack: ["OpenCart", "PHP", "MySQL", "HTML/CSS", "JavaScript"],
    note: "This project was completed in 2023. The client has since migrated to a new platform (Shopify). Shown here from archived version for portfolio purposes.",
    createdAt: new Date("2021-03-01"),
  },
  {
    slug: "everton-chair",
    images: ["/x/project-f-2.webp", "/x/project-f-3.webp", "/x/project-f.webp"],
    title: "Everton Chair - Custom CMS Website",
    role: "Full Stack (CodeIgniter 3, PHP, MySQL, HTML, CSS, JavaScript, Responsive Design )",
    whatIBuilt:
      "Converted a static HTML design into a dynamic, admin-manageable website using CodeIgniter. Built a custom CMS backend allowing the client to update content (About, Products, Images) without coding. Implemented responsive front-end with clean UI matching the original design. Integrated contact forms and basic SEO structure (meta tags, clean URLs)",
    techStack: ["CodeIgniter 3", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveSite: "https://evertonchair.com/",
    note: "Developed a custom PHP/CodeIgniter solution for content management. Shared here for portfolio purposes using only public-facing content.",
    createdAt: new Date("2020-03-01"),
  },
];
