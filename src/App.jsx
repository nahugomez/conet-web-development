import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Pattern from "./components/Pattern";
import Features from "./components/Features";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pattern className={"mb-20"} />
            <Features />
            <Pricing />
        </div>
    );
}

export default App;
