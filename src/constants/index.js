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
  bootstrap,
  Postgresql,
  whatsapp,
  netflix,
  linkedin,
  threejs,
  epicode,
  me,
  codeclause,
  rheingold,
  benchmark,
  adobePremiere,
  spotify,
  speedSurvey,
  adobePhoto,
  todolist,
  nextJs,
} from "../assets";
const navLinks = [
  {
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Content Creator/Editor",
    icon: creator,
  },
];

const technologies = [
  {
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MyDog ",
    icon: "https://res.cloudinary.com/dvagn6szo/image/upload/v1682089110/u5/whatsapp/avatars/mvmeowfgulbwaxtl5pbn.png",
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
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Postgresql",
    icon: Postgresql,
  },
  {
    name: "AdobePremierePro",
    icon: adobePremiere,
  },
  {
    name: "AdobePhotoshop",
    icon: adobePhoto,
  },
  {
    name: "Next.js",
    icon: nextJs,
  },
];

const tags = {
  react: {
    name: "react",
    color: "text-blue-800",
    bg: "bg-blue-100",
  },
  express: {
    name: "express",
    color: "text-yellow-800",
    bg: "bg-yellow-100",
  },
  mongodb: {
    name: "mongodb",
    color: "text-green-800",
    bg: "bg-green-100",
  },
  tailwind: {
    name: "tailwind",
    color: "text-indigo-800",
    bg: "bg-indigo-100",
  },
  socketIo: {
    name: "socket.io",
    color: "text-pink-800",
    bg: "bg-pink-100",
  },
  bootstrap: {
    name: "bootstrap",
    color: "text-purple-800",
    bg: "bg-purple-100",
  },
  api: {
    name: "API",
    color: "text-blue-700",
    bg: "bg-gray-400",
  },
  darkMode: {
    name: "Dark Mode",
    color: "text-white",
    bg: "bg-black",
  },
  stripe: {
    name: "Stripe",
    color: "text-blue-800",
    bg: "bg-gray-100",
  },
  ai: {
    name: "AI",
    color: "text-slate-900",
    bg: "bg-slate-300",
  },
  nextJs: {
    name: "Next.js",
    color: "text-cyan-500",
    bg: "bg-black",
  },
};

const experiences = [
  {
    title: "Full Stack Developer - Freelance",
    company_name: "Code Clause",
    icon: me,
    iconBg: "#fff",
    date: "June 2023 - Ongoing",
    points: [
      "Avaible for freelance work on any size webpages, web apps, mobile apps, content creation",
    ],
  },
  {
    title: "Full Stack Web Developer - Virtual Internship",
    company_name: "Code Clause",
    icon: codeclause,
    iconBg: "#fff",
    date: "September 2023 - September 2023",
    points: [
      "Unpaid Virtual internship to hone the software skills working on various projects",
    ],
  },
  {
    title: "Full Stack MERN Developer - Full Time bootcamp",
    company_name: "Epicode Global",
    icon: epicode,
    iconBg: "#383E56",
    date: "December 2022 - May 2023",
    points: [
      "Completed a series of advanced courses in web development, covering topics such as backend development and, advanced frontend development",
      "Acquired skills in database design and implementation, web development with HTML, CSS, and JavaScript, and secure authentication techniques in Node.js applications",
      "Participated in team building weeks, gaining experience working collaboratively and implementing agile methodologies",
      "Build real world projects using Node.js, Express.js, and React.js",
    ],
  },

  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial: "Opinion",
    name: "Name",
    designation: "CFO",
    company: "Company",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Opinion",
    name: "Name",
    designation: "CFO",
    company: "Company",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Opinion",
    name: "Name",
    designation: "CFO",
    company: "Company",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Hotel Booking- Haus Rheingold",
    description:
      "Hotel booking system with a custom calendar, integrated Stripe payments, admin back-office for operations management, and an AI FAQ chatbot powered by Stack.ai.",
    tags: [
      tags.react,
      tags.express,
      tags.mongodb,
      tags.tailwind,
      tags.api,
      tags.darkMode,
      tags.stripe,
      tags.ai,
    ],
    image: rheingold,
    live_page: "https://hotel-website-rheingold-fe.vercel.app/",
    source_code_link:
      "https://github.com/Pietrek1989/hotel-website-rheingold-fe",
  },
  {
    name: "To Do List",
    description:
      "React-based To-Do List app with drag-and-drop task management, GIPHY API integration for task gifs, and task persistence using Local Storage.",
    tags: [tags.react, tags.tailwind],
    image: todolist,
    source_code_link:
      "https://github.com/Pietrek1989/CodeClauseInternship_ToDoList/tree/main",
    live_page: "https://code-clause-internship-to-do-list-gamma.vercel.app/",
  },
  {
    name: "Speed Survey",
    description:
      "Full-stack survey application on Next.js 13 for creating, sharing, and analyzing surveys, all housed in a single repository.",
    tags: [tags.nextJs, tags.react, tags.tailwind, tags.darkMode, tags.mongodb],
    image: speedSurvey,
    source_code_link:
      "https://github.com/Pietrek1989/codeclauseinternship-survey",
    live_page: "https://codeclauseinternship-survey.vercel.app",
  },
  {
    name: "Whatsapp Clone",
    description:
      "Real-time chat app mimicking WhatsApp, built with React, Express.js, and Socket.IO for real-time communication, with MongoDB for data storage.",
    tags: [
      tags.react,
      tags.express,
      tags.mongodb,
      tags.socketIo,
      tags.bootstrap,
      tags.api,
    ],
    image: whatsapp,
    source_code_link: "https://github.com/pappkartoni/U5-BW-WhatsApp",
    live_page: "https://u5-bw-whatsapp-fe.vercel.app/",
  },
  {
    name: "Linkedin Clone",
    description:
      "Social networking platform mirroring LinkedIn features like profile creation, connections, and post interactions, built with React, Express.js, and MongoDB.",
    tags: [tags.react, tags.express, tags.mongodb, tags.bootstrap, tags.api],
    image: linkedin,
    source_code_link: "https://github.com/yasirozdemir/U4-BW-LinkedIn-API",
    live_page: "https://linked-in-build-fe.vercel.app/feed",
  },
  {
    name: "Spotify Clone",
    description:
      "Web-based music streaming app mimicking Spotify, built with HTML, CSS, JavaScript, and API for music data fetching and a custom music player.",
    tags: [tags.bootstrap, tags.react, tags.api],
    image: spotify,
    source_code_link: "https://github.com/Zaiido/fs-0522-build-week-2",
    live_page: "https://github.com/Pietrek1989/fs-0522-build-week-2-Spotify",
  },
  {
    name: "Netflix Clone",
    description:
      "Movie browsing platform resembling Netflix with a movie carousel UI, external API for movie data, and user commenting features.",
    tags: [tags.react, tags.bootstrap, tags.api],
    image: netflix,
    source_code_link:
      "https://github.com/Pietrek1989/U3-W2-D3-NETFLIX-REACT-ROUTERS",
  },
  {
    name: "Benchmark(test)",
    description:
      "Benchmark quiz page for knowledge testing across various subjects, with immediate result feedback, created using HTML, CSS, and JavaScript.",
    tags: [],
    image: benchmark,
    source_code_link: "https://github.com/Pietrek1989/fs-nov22-buildweek-1",
    live_page: "https://pietrek1989.github.io/fs-nov22-buildweek-1/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};
