import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Button from "./Button";

const Card = ({ title, price, description, className }) => {
    return (
        <div className={`rounded-lg border ${className}`}>
            <div className="p-6">
                <h3 className="text-xl font-semibold capitalize text-blue-700">{title}</h3>
                <p className="text-gray-700">{description}</p>
                <p className="my-4 text-2xl font-bold text-gray-700">${price}</p>
                <Button className={"w-full py-2"}>Contactanos</Button>
            </div>
            <hr className="border-gray-200"></hr>
            <div className="p-6">
                <h3 className="text-lg font-medium capitalize text-gray-700">Que incluye?</h3>
                <div className="mt-4 flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-2">
                        <BsFillCheckCircleFill className="text-blue-700" />
                        <p className="text-gray-700">Maquetado de tu pagina web</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsFillCheckCircleFill className="text-blue-700" />
                        <p className="text-gray-700">Desarrollo y programación</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsFillCheckCircleFill className="text-blue-700" />
                        <p className="text-gray-700">Actualización de tecnologías</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsFillCheckCircleFill className="text-blue-700" />
                        <p className="text-gray-700">Maquetado de tu pagina web</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsFillCheckCircleFill className="text-blue-700" />
                        <p className="text-gray-700">Configuración de Dominio y Hosting</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <BsFillCheckCircleFill className="text-blue-700" />
                        <p className="text-gray-700">Correo Electronico Profesional</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
