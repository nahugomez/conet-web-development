import React from "react";
import Card from "./Card";

const Pricing = () => {
    return (
        <div className="container lg:mb-36 lg:flex">
            <div className="mb-4 flex flex-col items-center justify-center lg:basis-1/3">
                <h2 className="text-center text-2xl font-bold">Nuestros Precios</h2>
                <div className="-mt-2">
                    <span class="inline-block h-1 w-40 rounded-full bg-blue-700"></span>
                    <span class="mx-1 inline-block h-1 w-3 rounded-full bg-blue-700"></span>
                    <span class="mx-1 inline-block h-1 w-1 rounded-full bg-blue-700"></span>
                </div>
                <p className="text-gray-700">Conocé lo que ofrecemos para vos</p>
            </div>
            <div className="my-4 flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0 lg:basis-2/3">
                <Card
                    price={"10.000 ARS"}
                    title={"Desarrollo Web"}
                    description={"Desarrollamos tu pagina web con las ultimas tecnologias, a tu medida, y la configuramos para que sea visible desde cualquier parte del planeta"}
                />
                <Card
                    price={"10.000 ARS"}
                    title={"Desarrollo Web"}
                    description={"Desarrollamos tu pagina web con las ultimas tecnologias, a tu medida, y la configuramos para que sea visible desde cualquier parte del planeta"}
                />
            </div>
        </div>
    );
};

export default Pricing;
