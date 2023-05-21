import React from "react";
import Feature from "./Feature";
import { BsFillPaletteFill, BsFillGearFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";

const Features = () => {
    return (
        <div className="container -mt-10 mb-16 flex flex-col items-center gap-y-16 md:flex-row md:gap-y-0 md:gap-x-10">
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
    );
};

export default Features;
