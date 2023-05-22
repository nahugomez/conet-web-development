import React from "react";

const Feature = ({ className, title, description, component }) => {
    return (
        <div className={`${className} flex w-5/6 flex-col items-center`}>
            <div className="mb-4 w-fit rounded-lg bg-primary p-3 text-white">{component}</div>
            <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
            <p className="text-center text-gray-200">{description}</p>
        </div>
    );
};

export default Feature;
