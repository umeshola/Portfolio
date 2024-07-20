import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";


export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "FullStack Dev",
        icon: web,
    },
    {
        title: "Backend Dev",
        icon: backend,
    },
    {
        title: "Blockchain Dev",
        icon: creator,
    }
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Fronend Developer",
        company_name: "for Friend",
        icon: starbucks,
        iconBg: "",
        date: "March 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designer.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Founding Member",
        company_name: "Digital Partner",
        icon: tesla,
        iconBg: "",
        date: "Sep 2023 - Now",
        points: [
            "Stared a company.",
            "In Indian people use to the off-line world to connect them to online world.",
            "In this company we make website for the local bussiness.",
            "Now we are make a website to automate the building process.",
        ],
    },
    {
        title: "Software developer",
        company_name: "Expert Buddy",
        icon: meta,
        iconBg: "",
        date: "June 2024 - Aug 2024",
        points: [
            "Developing and maintaining software using WebRTC and other related technologies.",
            "The big step is this project is to provide the latency and less rendring.",
        ],
    },
];

const testimonials = [{
        testimonial: "I've never met a web developer who truly cares about their clients' success like Umesh does.",
        name: "Hardik Sharama",
        designation: "CEO",
        company: "Digital Partner",
    },
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Umesh proved me wrong.",
        name: "Siddhar",
        designation: "Founder",
        company: "RoubustEdu",
    },
];

const projects = [{
        name: "404 DSA",
        description: "Web-based platform that allows users to search, solve, and manage there progress in data structure and imporve there logical and reasing.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/umeshola/404_DSA?tab=readme-ov-file",
    },
    {
        name: "Paper trading",
        description: "Web application that enables users to search for stock, buy, and sell stock with easy and save there real money before jumping in the real market and lose there money.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "postgres",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/umeshola/Paper_Trading",
    },
    {
        name: "ONE",
        description: "Web application that enables users to connect with the world at the same palce where they shop and train. This project has a unique idea which is connecting all the app and platform in one as the name says ONE.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "GraphQL",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: backend,
        source_code_link: "https://github.com/umeshola/ONE",
    },
    {
        name: "Idea",
        description: "Web application that enables users to share there idea with the world but the main part of the app is you can also get helper and fund if someone like you idea. Basically it's a social media for only idea.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "GraphQL",
                color: "green-text-gradient",
            },
            {
                name: "mongoose",
                color: "pink-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://github.com/umeshola/idea",
    },
];

export { services, technologies, experiences, testimonials, projects };