import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Pattern from "./components/Pattern";
import Features from "./components/Features";
import Process from "./components/Process";

function App() {
    return (
        <div className="bg-dark">
            <Navbar />
            <Hero />
            <Pattern className={"mb-20"} />
            <Features />
            <Process />
            <Pattern className={"mb-20"} />
            <Pricing />
            <Pattern className={"mb-20"} />
        </div>
    );
}

export default App;
