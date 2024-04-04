import indeed1 from "../assets/indeed/1.png";
import indeed2 from "../assets/indeed/2.png";
import indeed3 from "../assets/indeed/3.png";
import indeed4 from "../assets/indeed/4.png";

import tmetric1 from "../assets/tmetric/1.png";
import tmetric2 from "../assets/tmetric/2.png";
import tmetric3 from "../assets/tmetric/3.png";
import tmetric4 from "../assets/tmetric/4.png";
import tmetric5 from "../assets/tmetric/5.png";

import ME1 from "../assets/managengine/1.png";
import ME2 from "../assets/managengine/2.png";
import ME3 from "../assets/managengine/3.png";
import ME4 from "../assets/managengine/4.png";
import ME5 from "../assets/managengine/5.png";

import myntra1 from "../assets/myntra/1.png";
import myntra2 from "../assets/myntra/2.png";
import myntra3 from "../assets/myntra/3.png";
import myntra4 from "../assets/myntra/4.png";
import myntra5 from "../assets/myntra/5.png";

import ss1 from "../assets/supersports/event.png";
import ss2 from "../assets/supersports/login.png";
import ss3 from "../assets/supersports/signup.png";
import ss4 from "../assets/supersports/newevent.png";
import ss5 from "../assets/supersports/approval.png";
import ss6 from "../assets/supersports/bookings.png";

const exclusive1 =
  "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/loginPage.png";
const exclusive2 = "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/homePage.png";
const exclusive3 =
  "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/mensProductsPage.png";
const exclusive4 =
  "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/singleProductsPage.png";
const exclusive5 = "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/cartPage.png";
const exclusive6 =
  "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/shippingPage.png";
const exclusive7 =
  "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/paymentPage.png";
// const exclusive8 =
//   "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/rezorpayPaymentIntegration.png";

let ind = 1;
export const projectsData = [
  {
    id: ind++,
    title: "Exclusive (Yoox-Clone)",
    description:
      "Exclusive is a fashion e-commerce online store, provides the best Italian and international designer products. This clone has Login, Signup with email & Github, homepage, products and product details page, pagination, cart and razorpay option for checkout.",
    techStack: ["NextJS", "JavaScript", "Chakra UI", "MongoDB", "JWT", "Redis"],
    githubURL: "https://github.com/Hashal890/Exclusive-Yoox-Clone",
    deployedURL: "https://yoox-clone-by-exclusive.vercel.app",
    images: [exclusive1, exclusive2, exclusive3, exclusive4, exclusive5, exclusive6, exclusive7],
  },
  {
    id: ind++,
    title: "Super Sports",
    description:
      "Super Sports is event management application. It's a tool specifically designed to help individuals or organizations plan and execute sports events, such as tournaments, leagues, and other competitions.",
    techStack: [
      "React",
      "JavaScript",
      "Chakra UI",
      "NodeJS",
      "Express",
      "MongoDB",
      "mongoose",
      "JWT",
      "Redis",
    ],
    githubURL: "https://github.com/IamSanjayGupta/super-sports",
    deployedURL: "https://super-sports.vercel.app/",
    images: [ss1, ss2, ss3, ss4, ss5, ss6],
  },
  {
    id: ind++,
    title: "Indeed-Clone",
    description:
      "Indeed is an employment website for job listings. This clone has job search, filteration,  pagination, view job, apply job and many more features. Login and signup required email verification. The password store in the database is AES encrypted.",
    techStack: ["ReactJS", "JavaScript", "Chakra UI", "JSON Server"],
    githubURL: "https://github.com/IamSanjayGupta/hurried-hospital-4011",
    deployedURL: "https://indeed-san.vercel.app/",
    images: [indeed1, indeed2, indeed3, indeed4],
  },
  {
    id: ind++,
    title: "Tmetric-Clone",
    description:
      "TMetric is time tracking tool for a task or project to optimize the processes and increase the productivity. We cloned login/signup, homepage, blog section, create & edit and delete task and track them, generate logs and many more features.",
    techStack: ["ReactJS", "JavaScript", "Chakra UI", "Mongoose", "MongoDB", "NodeJS", "Express"],
    githubURL: "https://github.com/IamSanjayGupta/dazzling-measure-5625",
    deployedURL: "https://tmetric-beta.vercel.app/",
    images: [tmetric1, tmetric2, tmetric3, tmetric4, tmetric5],
  },
  {
    id: ind++,
    title: "Myntra-Clone",
    description:
      "Myntra is one of the populer online fashion store. We have cloned Login/Signup, Homepage, Navbar, apply filter and sorting, view product, cart and fake payment features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/Shibshankar01/Myntra",
    deployedURL: "https://grand-tarsier-842e30.netlify.app",
    images: [myntra1, myntra2, myntra3, myntra4, myntra5],
  },
  {
    id: ind++,
    title: "ManageEngine-Clone",
    description:
      "ManageEngine offers IT management software for service & operations management, security needs and etc. We have cloned the navbar, footer, homepage, product view section and added store option to buy products. And also implemented the login sigup using api.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/IamSanjayGupta/cheerful-apparatus-8895",
    deployedURL: "https://iamsanjaygupta.github.io/cheerful-apparatus-8895",
    images: [ME1, ME2, ME3, ME4, ME5],
  },
];
