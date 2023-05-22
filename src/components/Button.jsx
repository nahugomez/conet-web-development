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
            <button
                className={"rounded-md border-2 border-primary font-semibold text-primary duration-200 hover:border-white hover:bg-white hover:text-primary " + className}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            className={"rounded-md border-2 border-primary bg-primary font-semibold text-white duration-200 hover:border-white hover:bg-white hover:text-primary " + className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
