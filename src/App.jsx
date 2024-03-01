import { useDrag } from "@use-gesture/react";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { usePlay } from "./contexts/Play";
import { projects } from "./constant";

import { Experience } from "./components/Experience";
import { Nav } from "./pages/Nav";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Dev } from "./pages/Dev/Dev";
import { Contact } from "./pages/Contact";
import { DevDetails } from "./pages/DevDetails/DevDetails";

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const { setOffset, setVelocity, setHasDrag } = usePlay();

  const bind = useDrag(({ velocity, offset: [x, y], down }) => {
    setIsDragging(down);
    setHasDrag(true);

    const val = (x / (4 * Math.PI) / 100) % 1; // [0,1)
    setOffset(val);
    setVelocity(velocity[0] > 0.01 ? velocity[0] : 0);
  });

  return (
    <Router>
      <Canvas
        {...bind()}
        style={{
          touchAction: "none",
          cursor: `${isDragging ? "grabbing" : "grab"}`,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />}>
          {projects.map((project, index) => (
            <Route
              key={index}
              path={`${project.url}`}
              element={<DevDetails {...project} />}
            />
          ))}
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
