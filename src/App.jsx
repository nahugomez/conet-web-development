import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Pattern from "./components/Pattern";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pattern classname={"mb-20"} />
            <Pricing />
        </div>
    );
}

export default App;
