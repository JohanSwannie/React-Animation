import { useState, useRef } from "react";
import { motion } from "framer-motion";
import image from "./images/laptop.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const borderRef = useRef(null);

  return (
    <div ref={borderRef} style={{ width: "90vw" }}>
      <div>
        <a href="https://react.dev" target="_blank">
          <motion.img
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
              x: [0, 100, -100, 0],
            }}
            transition={{ duration: 3, repeat: 3 }}
            src={image}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>React Animation</h1>
      <div className="card">
        <motion.button
          drag
          dragConstraints={borderRef}
          // dragSnapToOrigin
          whileHover={{ scale: 1.35 }}
          onClick={() => setCount((count) => count + 1)}
        >
          Drag me anywhere - count is {count}
        </motion.button>
        <p>React Animation with Framer Motion is Awesone</p>
      </div>
    </div>
  );
}

export default App;
