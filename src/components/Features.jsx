import React from "react";
import Feature from "./Feature";
import { BsFillPaletteFill, BsFillGearFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";

const Features = () => {
    return (
        <div className="container mb-16 mt-14 lg:mb-36">
            <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-2xl font-bold">Features</h2>
                <div className="-mt-2">
                    <span className="inline-block h-1 w-40 rounded-full bg-blue-700"></span>
                    <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-700"></span>
                    <span className="mx-1 inline-block h-1 w-1 rounded-full bg-blue-700"></span>
                </div>
            </div>
            <p className="mb-10 text-center text-gray-700 lg:text-start">La mejor calidad.</p>
            <div className="flex flex-col items-center gap-y-16 md:flex-row md:gap-x-10 md:gap-y-0 lg:gap-x-24">
                <Feature
                    component={<BsFillPaletteFill size={32} />}
                    title={"Diseño"}
                    description={"Nos encargamos del diseño de tu pagina web, para que solo te preocupes de dar el visto bueno."}
                />
                <Feature
                    component={<BsFillGearFill size={32} />}
                    title={"Configuración"}
                    description={"Nos encargamos del diseño de tu pagina web, para que solo te preocupes de dar el visto bueno."}
                />
                <Feature
                    component={<FaMobile size={32} />}
                    title={"Adaptativo"}
                    description={"Nos encargamos del diseño de tu pagina web, para que solo te preocupes de dar el visto bueno."}
                />
            </div>
        </div>
    );
};

export default Features;
