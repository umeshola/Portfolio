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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
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
        company_name: "Friends",
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
        title: "Digital Partner",
        company_name: "COO",
        icon: tesla,
        iconBg: "",
        date: "Sep 2023 - Now",
        points: [
            "Stared a company.",
            "In Indian people use to the offline world to connect them to online world.",
            "In this company we make website for the local bussiness.",
            "Now we are make a website to automate the building process.",
        ],
    },
    {
        title: "Worked for friend Company",
        company_name: "Online education",
        icon: meta,
        iconBg: "",
        date: "Jan 2024 - March 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "I have made my friend a FULL STACK web site where he can post Doc. and tech via robust way of teching.",
            "The big step is this project is to provide the security and less rendring.",
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
];

export { services, technologies, experiences, testimonials, projects };