import { FaPiggyBank, FaRobot, FaRocket } from "react-icons/fa";
import { FaCartShopping, FaKitMedical } from "react-icons/fa6";

export const me = {
  who: "Bryce Jarrett",
  what: "Software Engineer, learner, adventurer",
  when: "since 98, and 3+ years adulting",
  where: "Brookyln NY",
  why: "Im passionate about coding, solving problems, leaving things better than I found them, and growing from every experience",
};

export const projects: {
  id: number;
  Icon: any; //TODO: type this better
  name: string;
  description: string;
  tech: string;
}[] = [
  {
    id: 1,
    Icon: FaPiggyBank,
    name: "Digital Payment Solution for offshore Banking Client",
    description:
      "Technical Architect for a large offshore financial institution to build a new digital wallet with capabilities to manage >100,000 accounts and >300,000 transactions a day",
    tech: "React Native, SQL, Microservie Architecture, Azure Dev Ops", // TODO: make these the icons instead
  },
  {
    id: 2,
    Icon: FaKitMedical,
    name: "Data Analytics Platform for Pharma Market-Access",
    description:
      "Digitized an Excel model responsible for calculating drug pricing into an interactive platform",
    tech: "React, Chakra, Flask, Dataiku, SQL, AWS RedShift",
  },
  {
    id: 3,
    Icon: FaCartShopping,
    name: "D2C E-Commerce for MedTech device",
    description:
      "Delivered a net-new Direct-to-Consumer Web App within 3 months with 90th percentile site speed and 24 hour release changes",
    tech: "Next.js, MUI, Azure Functions, Sequelize, MySQL",
  },
  {
    id: 6,
    Icon: FaCartShopping,
    name: "B2C E-Commerce for Healthcare Client",
    description:
      "Developed a net-new Business-to-Consumer Web App, Coached client product owner on agile best practices and defining sprint scope and user stories leveraging Azure DevOps",
    tech: "Next.js, Tailwinds, TypeScript, Fastify, Platformatic, Azure",
  },
  {
    id: 4,
    Icon: FaRobot,
    name: "Generative AI for analyzing docs",
    description:
      "Developed a Copilot tool that enables users to upload and analyze documents using a document query and chat agent.",
    tech: "React, Redux, SCSS, LangChain, pgVector",
  },
  {
    id: 5,
    Icon: FaRocket,
    name: "Digitized Rocket Launch Process Flow",
    description:
      "Tech Lead for an engineering squad digitizing a process flow model and visualizing a resource map, reducing bottlenecks in the clients launch processes",
    tech: "React, TypeScript, MUI, Mapbox, FastAPI, Docker, Postgres DB, AWS EC2",
  },
];
