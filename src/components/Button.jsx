import React from "react";

const Button = ({ className, onClick, href, children, secondary }) => {
    if (href) {
        return (
            <a className={className} href={href}>
                {children}
            </a>
        );
    }

    if (secondary) {
        return (
            <button className={"rounded-md border-2 border-black duration-200 hover:bg-black hover:text-white " + className} onClick={onClick}>
                {children}
            </button>
        );
    }

    return (
        <button className={"rounded-md border-2 border-blue-700 bg-blue-700 text-white duration-200 hover:bg-white hover:text-blue-600 " + className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
