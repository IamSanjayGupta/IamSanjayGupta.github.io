import indeed1 from "../assets/indeed/1.png";
import indeed2 from "../assets/indeed/2.png";
import indeed3 from "../assets/indeed/3.png";
import indeed4 from "../assets/indeed/4.png";

import ME1 from "../assets/managengine/1.png"
import ME2 from "../assets/managengine/2.png"
import ME3 from "../assets/managengine/3.png"
import ME4 from "../assets/managengine/4.png"
import ME5 from "../assets/managengine/5.png"


import myntra1 from "../assets/myntra/1.png"
import myntra2 from "../assets/myntra/2.png"
import myntra3 from "../assets/myntra/3.png"
import myntra4 from "../assets/myntra/4.png"
import myntra5 from "../assets/myntra/5.png"

export const projectsData = [
  {
    id: 1,
    title: "Indeed-Clone",
    description:
      "Indeed is an employment website for job listings. This clone has job search, filteration,  pagination, view job, apply job and many more features. Login and signup required email verification. The password store in the database is AES encrypted.",
    techStack: ["ReactJS", "JavaScript", "Chakra UI", "JSON Server"],
    githubURL: "https://github.com/IamSanjayGupta/hurried-hospital-4011",
    deployedURL: "https://indeed-eight.vercel.app",
    images: [indeed1, indeed2, indeed3, indeed4],
  },
  {
    id: 2,
    title: "Myntra-Clone",
    description:
      "Myntra is one of the populer online fashion store. We have cloned Login/Signup, Homepage, Navbar, apply filter and sorting, view product, cart and fake payment features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/IamSanjayGupta/cheerful-apparatus-8895",
    deployedURL: "https://github.com/Shibshankar01/Myntra",
    images: [myntra1, myntra2, myntra3, myntra4, myntra5],
  },
  {
    id: 3,
    title: "ManageEngine-Clone",
    description:
      "ManageEngine offers IT management software for service & operations management, security needs and etc. We have cloned the navbar, footer, homepage, product view section and added store option to buy products. And also implemented the login sigup using api.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/IamSanjayGupta/cheerful-apparatus-8895",
    deployedURL: "https://iamsanjaygupta.github.io/cheerful-apparatus-8895",
    images: [ME1, ME2, ME3, ME4, ME5],
  },
];
