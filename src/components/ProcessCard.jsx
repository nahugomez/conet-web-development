import React from "react";

const ProcessCard = ({ image, title, description }) => {
    const BackgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div className="mb-8 w-full overflow-hidden rounded-3xl border">
            <div className="h-[230px]" style={BackgroundStyle}></div>
            <div className="p-6">
                <h3 className="text-lg font-medium capitalize text-gray-200">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};

export default ProcessCard;
