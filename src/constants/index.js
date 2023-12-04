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
  chatGptClone,
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
  gleitzeit,
  nextJs,
  pomodoro,
  reactNative,
  expo,
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
  {
    name: "ReactNative",
    icon: reactNative,
  },
  {
    name: "Expo Go",
    icon: expo,
  },
];

const tags = {
  react: {
    name: "React.js",

    color: "text-cyan-500",
    bg: "bg-black",
  },
  express: {
    name: "Express.js",
    color: "text-yellow-800",
    bg: "bg-yellow-100",
  },
  mongodb: {
    name: "MongoDB",
    color: "text-green-800",
    bg: "bg-green-100",
  },
  tailwind: {
    name: "Tailwind",
    color: "text-indigo-800",
    bg: "bg-indigo-100",
  },
  socketIo: {
    name: "Socket.io",
    color: "text-pink-800",
    bg: "bg-pink-100",
  },
  bootstrap: {
    name: "Bootstrap",
    color: "text-purple-800",
    bg: "bg-purple-100",
  },
  api: {
    name: "API",
    color: "text-blue-300",
    bg: "bg-blue-800",
  },
  darkMode: {
    name: "Dark Mode",
    color: "text-amber-400",
    bg: "bg-black",
  },
  stripe: {
    name: "Stripe",
    color: "text-stripe-text",
    bg: "bg-gray-200",
  },
  ai: {
    name: "AI",
    color: "text-emerald-300",
    bg: "bg-emerald-800",
  },
  nextJs: {
    name: "Next.js",
    color: "text-white",
    bg: "bg-black",
  },
  reactNative: {
    name: "React Native",
    color: "text-react-text",
    bg: "bg-react-bg",
  },
  expoGo: {
    name: "Expo Go",
    color: "text-expo-text",
    bg: "bg-gray-300",
  },
  mobileApp: {
    name: "Mobile app",
    color: "text-orange-300",
    bg: "bg-orange-800",
  },
  fullstack: {
    name: "Fullstack",
    color: "text-cyan-300",
    bg: "bg-cyan-800",
  },
  user: {
    name: "Users",
    color: "text-sky-300",
    bg: "bg-sky-800",
  },
  vite: {
    name: "Vite",
    color: "text-amber-300",
    bg: "bg-amber-800",
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
      tags.api,
      tags.tailwind,
      tags.darkMode,
      tags.stripe,
      tags.ai,
      tags.fullstack,
    ],
    image: rheingold,
    live_page: "https://hotel-website-rheingold-fe.vercel.app/",
    source_code_link:
      "https://github.com/Pietrek1989/hotel-website-rheingold-fe",
  },
  {
    name: "To Do List",
    description:
      "Gleitzeit helper is designed to simplify the management of flexible work model.The application will automatically calculate the total number of hours worked and the remaining hours needed to meet minimum amount.",
    tags: [
      tags.react,
      tags.tailwind,
      tags.user,
      tags.mongodb,
      tags.api,
      tags.fullstack,
      tags.express,
    ],
    image: todolist,
    source_code_link:
      "https://github.com/Pietrek1989/CodeClauseInternship_ToDoList/tree/login-feature",
    live_page:
      "https://code-clause-internship-to-do-list-login-feature.vercel.app",
  },
  {
    name: "Gleitzeit-helper",
    description:
      "Gleitzeit helper is designed to simplify the management of flexible work model.The application will automatically calculate the total number of hours worked and the remaining hours needed to meet minimum amount.",
    tags: [tags.react, tags.tailwind, tags.vite],
    image: gleitzeit,
    source_code_link: "https://github.com/Pietrek1989/gleitzeit-helper",
    live_page: "https://gleitzeit-helper.vercel.app",
  },

  {
    name: "Speed Survey",
    description:
      "Full-stack survey application on Next.js 13 for creating, sharing, and analyzing surveys, all housed in a single repository.",
    tags: [
      tags.nextJs,
      tags.react,
      tags.tailwind,
      tags.darkMode,
      tags.mongodb,
      tags.api,
      tags.user,
      tags.fullstack,
    ],
    image: speedSurvey,
    source_code_link:
      "https://github.com/Pietrek1989/codeclauseinternship-survey",
    live_page: "https://codeclauseinternship-survey.vercel.app",
  },
  {
    name: "Pomodoro app - Timer",
    description:
      "Pomodoro timer built with React Native and Expo Go. It offers the perfect blend of the classic Pomodoro technique with fully customizable timer settings to boost productivity.",
    tags: [tags.reactNative, tags.expoGo, tags.mobileApp],
    image: pomodoro,
    source_code_link: "https://github.com/Pietrek1989/pomodoroCustomTimer",
    live_page:
      "https://play.google.com/store/apps/details?id=com.rodzenpiotr.pomodoroapp&fbclid=IwAR31PInUWz83_-qZxq-9WKNIsz_RyoVnQpN6iHowCfNM-ZhUW9jCp9dzM4k",
  },
  {
    name: "ChatGPT clone",
    description:
      "A responsive and interactive ChatGPT clone that engages with users using OpenAI's API, crafted with a sleek and intuitive interface. Get AI-driven responses in real-time!",
    tags: [
      tags.react,
      tags.express,
      tags.vite,
      tags.ai,
      tags.api,
      tags.fullstack,
      tags.darkMode,
    ],
    image: chatGptClone,
    source_code_link: "https://github.com/Pietrek1989/chat-gpt-clone",
    live_page: "https://pietrek1989.github.io/chat-gpt-clone",
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
      tags.user,
      tags.fullstack,
    ],
    image: whatsapp,
    source_code_link: "https://github.com/pappkartoni/U5-BW-WhatsApp",
    live_page: "https://u5-bw-whatsapp-fe.vercel.app/",
  },
  {
    name: "Linkedin Clone",
    description:
      "Social networking platform mirroring LinkedIn features like profile creation, connections, and post interactions, built with React, Express.js, and MongoDB.",
    tags: [
      tags.react,
      tags.express,
      tags.mongodb,
      tags.api,
      tags.bootstrap,
      tags.user,
      tags.fullstack,
    ],
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
