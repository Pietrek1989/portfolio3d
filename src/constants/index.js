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
  rheingold,
  benchmark,
  adobePremiere,
  spotify,
  speedSurvey,
  adobePhoto,
  toDoList,
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
    color: "text-gray-900",
    bg: "bg-white",
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
    color: "text-black",
    bg: "bg-white",
  },
};

const experiences = [
  {
    title: "Full Stack Web Developer - Full Time",
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
      "Hotel booking platform, with a custom-built calendar that  displays available rooms for any given day. With an integrated Stripe payments. Admins can  manage operations through a  back-office system that allows for tracking of earnings, reservations, and the ability to issue refunds or update room details. AI Chatbot in function of FAQ powered by Stack.ai with answers to all  questions related to the hotel.",
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
      "To-Do List application built using React, and integrated with a drag-and-drop feature to allow easy task management. Users can add tasks, and use GIPHY api to optionally add a gif to the them. User can then move them across different columns, and delete them by dragging them to a bin. The application has a responsive design and persists tasks using Local Storage.",
    tags: [tags.react, tags.tailwind],

    image: toDoList,
    source_code_link:
      "https://github.com/Pietrek1989/CodeClauseInternship_ToDoList/tree/main",
    live_page: "https://code-clause-internship-to-do-list-gamma.vercel.app/",
  },
  {
    name: "Speed Survey",
    description:
      " Built on the robust Next.js 13 framework, SpeedSurvey is a full-stack application offering seamless survey creation, sharing, and data analytics—all housed in a single repository.",
    tags: [tags.nextJs, tags.react, tags.tailwind, tags.darkMode, tags.mongodb],

    image: speedSurvey,
    source_code_link:
      "https://github.com/Pietrek1989/codeclauseinternship-survey",
    live_page: "https://codeclauseinternship-survey.vercel.app",
  },

  {
    name: "Whatsapp Clone",
    description:
      "This project is WhatsApp clone - a real-time chat application. Built using React for a dynamic front-end, it mimics the essential features of WhatsApp. Express.js is used on the backend to handle API requests and authentication. Real-time communication is achieved with Socket.IO for instantaneous message exchange. MongoDB is employed for efficient and robust data storage of users and messages",
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
      "This LinkedIn clone is a social networking platform. Built with the power of React for an interactive front-end, it features some functionalities of the original LinkedIn site. Users can create profiles, make posts, connect with other professionals by adding them as 'connections', and interact with their connections' posts. Express.js is utilized on the backend for handling API requests and user authentication, while MongoDB ensures efficient and scalable storage of data.",
    tags: [tags.react, tags.express, tags.mongodb, tags.bootstrap, tags.api],

    image: linkedin,
    source_code_link: "https://github.com/yasirozdemir/U4-BW-LinkedIn-API",
    live_page: "https://linked-in-build-fe.vercel.app/feed",
  },
  {
    name: "Spotify Clone",
    description:
      " This Spotify clone, built using HTML, CSS, and JavaScript, offers a web-based music streaming experience. It uses API to fetch music data, allowing users to search, browse, and play tracks from Spotify's vast library. The custom-made music player provides a user-friendly interface for listening to music, mirroring the functionality and design of Spotify's own player. The application strikes a balance between elegant design and functionality, delivering an immersive music streaming experience right in the browser.",
    tags: [tags.bootstrap, tags.react, tags.api],

    image: spotify,
    source_code_link: "https://github.com/Zaiido/fs-0522-build-week-2",
    live_page: "https://github.com/Pietrek1989/fs-0522-build-week-2-Spotify",
  },
  {
    name: "Netflix Clone",
    description:
      " This Netflix clone, built with modern web technologies, offers an engaging platform to browse and comment on movies. The user interface features a carousel for movie display, similar to Netflix's own design, enhancing the browsing experience. Movies data is fetched from an external API, providing a broad range of films for users to explore. Users can view more information about each movie and add comments, fostering an interactive platform for movie enthusiasts. ",
    tags: [tags.react, tags.bootstrap, tags.api],

    image: netflix,
    source_code_link:
      "https://github.com/Pietrek1989/U3-W2-D3-NETFLIX-REACT-ROUTERS",
  },
  {
    name: "Benchmark(test)",
    description:
      "This project is a benchmark quiz page designed to test and evaluate your knowledge. Created using HTML, CSS, and JavaScript, it features a variety of questions across different subjects. Upon completion, users are presented with their results, giving immediate feedback on their performance. With its simple and responsive design, this benchmark quiz offers an engaging way to challenge your knowledge and learn at the same time. It's a straightforward yet powerful tool for self-assessment and learning.",
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
