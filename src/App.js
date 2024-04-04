import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import { motion } from "framer-motion";

const ApplyMotion = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <ApplyMotion children={<Home />} />

      <ApplyMotion children={<About />} />
      <ApplyMotion children={<Skills />} />

      <ApplyMotion children={<Projects />} />
      <ApplyMotion children={<Statistics />} />

      <ApplyMotion children={<Contact />} />

      <Footer />
    </div>
  );
}

export default App;
