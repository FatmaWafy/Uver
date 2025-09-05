import React from "react";

const Button = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`bg-blue-600 w-fit text-white font-medium py-2 px-6 rounded-full    ${className} transition-all duration-300 
                        hover:bg-blue-700 hover:translate-x-[10px]`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
