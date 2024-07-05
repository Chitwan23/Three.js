import { meta, shopify, starbucks, tesla, PwC, CSI } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    summiz,
    tailwindcss,
    threads,
    Java,
    Aws,
    Docker,
    Jenkins,
    Bootstrap,
    Maze,




} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "CPP"

    },
    {
        imageUrl: Aws,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: Jenkins,
        name: "Jenkins",
        type: "Tool",
    },
    {
        imageUrl: Bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    // {
    //     imageUrl: Aws,
    //     name: "Aws",
    //     type: "Cloud",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },

    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Launchpad Trainee",
        company_name: "PwC",
        icon: PwC,
        iconBg: "#accbe1",
        date: "Feb 2024 - June 2024",
        points: [
            " Successfully completed a 4-month summer internship program.",
            "Acquired multiple micro-certifications including IT Fundamentals, Python, RDBMS (SQL), and Data Engineering.",
            "Developed and refined programming and practical skills in Python and SQL.",
            " Applied various concepts of IT practices, RDBMS, Data Science, and AI/ML.",
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Technical Committee Member",
        company_name: "CSI",
        icon: CSI,
        iconBg: "#fbc3bc",
        date: "July 2022 - April 2023",
        points: [
            "Designed websites for committee events including REGISTRATION, YUGMAK, and HACKATHON using ReactJS, HTML, CSS, and Bootstrap.",
            "Served as Technical Event Coordinator for Corporate Social Responsibility in 2022.",
            "Member of the organizing committee for UPES CSI Hackathon 2022, contributing to stage management.",
            "Volunteered for multiple events as part of the organizing team for YUGMAK 2022."
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Chitwan23',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/chitwan-singh23/',
    }
];

export const projects = [
    {
        iconUrl: Maze,
        theme: 'btn-back-red',
        name: 'Maze-Master',
        description: 'Maze Master is a Java application that generates and solves random mazes. The application allows users to create mazes using different algorithms and then solve them using various pathfinding techniques.',
        link: 'https://github.com/Chitwan23/Minor_1',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI-Assistant for Desktop',
        description: 'AI assistant using Python libraries/APIs for face recognition, voice commands, Wikipedia search, web browsing, music playback, internet checks,email sending and integrated with Gemini API KEY for enhanced functionality.',
        link: 'https://github.com/Chitwan23/Minor_2',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: '',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Semantic Analysis',
        description: 'developed an NLP-powered semantic analysis pipeline to extract insights from social media data, integrating these tools with Jira, GitHub, and Jenkins to streamline development and automate workflows. Additionally, I enabled offline access to desktop applications, significantly enhancing user productivity and convenience.',
        link: 'https://github.com/Chitwan23/Applied_DevOps',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Three.js Project',
        description: 'Developed an interactive 3D portfolio using React, Three.js, and TailwindCSS. Implemented animations and interactivity with React Three Fiber and Drei. Deployed the project using Vite on GitHub Pages.',
        link: 'https://github.com/Chitwan23/Three.js',
    }
];