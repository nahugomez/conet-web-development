import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import Brand from "./Brand";

const Navbar = () => {
    const Links = [
        { text: "Inicio", ref: "#" },
        { text: "Desarrollo", ref: "#" },
        { text: "Precio", ref: "#" },
        { text: "Preguntas Frecuentes", ref: "#" },
        { text: "Nosotros", ref: "#" },
    ];

    const [isOpen, setIsOpen] = useState(true);

    const handlerMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="py-5 shadow-md">
            <div className="container flex flex-wrap items-center justify-between">
                <div className="flex items-center text-blue-800 duration-200 hover:opacity-60">
                    <Brand width={32} height={32} color={"#1D4ED8"} />
                    <a href="#" className="ml-2 text-3xl font-bold uppercase lg:text-xl xl:text-3xl">
                        Conet
                    </a>
                </div>
                <div
                    onClick={handlerMenuClick}
                    className="cursor-pointer rounded-md border border-blue-800 p-1.5 text-blue-800 duration-200 hover:bg-blue-800 hover:text-white lg:hidden"
                >
                    {isOpen ? <HiMenu size={24} /> : <AiOutlineClose size={24} />}
                </div>
                <div className={`${!isOpen ? "mt-4 flex w-full flex-col" : "hidden"} lg:flex lg:items-center`}>
                    {Links.map((link) => (
                        <a href={link.ref} key={link.text} className="mb-4 underline-offset-4 duration-200 hover:underline lg:mb-0 lg:ml-7">
                            {link.text}
                        </a>
                    ))}
                    <Button className={"px-2 py-1 lg:ml-7"}>Presupuesto</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
