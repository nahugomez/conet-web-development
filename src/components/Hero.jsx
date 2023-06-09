import React from "react";
import Typed from "react-typed";
import { RiMessageFill } from "react-icons/ri";
import Button from "./Button";

const Hero = () => {
    return (
        <div className="container flex h-[500px] w-11/12 flex-col items-center justify-center xl:h-[600px] xl:w-8/12">
            <div className="mb-2 flex flex-col items-center text-center text-blue-800">
                <p className="font-semibold md:text-lg lg:text-2xl">
                    Para <Typed strings={["Empresas", "Emprendimientos", "Negocios", "Consultoras", "Eventos"]} typeSpeed={120} backSpeed={140} loop />
                </p>
                <p className="text-4xl font-bold md:text-5xl lg:text-7xl">La pagina web que necesitas.</p>
            </div>
            <p className="mb-4 text-center text-lg text-gray-700">Somos desarrolladores expertos para potenciar la presencia online.</p>
            <div className="flex w-full flex-col items-center gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
                <Button className={"w-full py-2"}>Nuestros servicios</Button>
                <Button className={"flex w-full items-center justify-center py-2"} secondary>
                    Contactanos <RiMessageFill className="ml-2" size={20} />
                </Button>
            </div>
        </div>
    );
};

export default Hero;
