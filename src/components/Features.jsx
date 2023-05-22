import React from "react";
import Feature from "./Feature";
import { BsFillPaletteFill, BsFillGearFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";

const Features = () => {
    return (
        <div className="mb-16 mt-14 lg:mb-36">
            <div className="container flex flex-col items-center gap-y-16 md:flex-row md:gap-x-10 md:gap-y-0 lg:gap-x-24">
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
            <div className="container mt-24 flex flex-col items-center gap-y-16 md:flex-row md:gap-x-10 md:gap-y-0 lg:gap-x-24">
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
                <Feature
                    component={<BsFillPaletteFill size={32} />}
                    title={"Diseño"}
                    description={"Nos encargamos del diseño de tu pagina web, para que solo te preocupes de dar el visto bueno."}
                />
            </div>
        </div>
    );
};

export default Features;
