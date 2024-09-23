import React from 'react';

const Button = ({onClick, className, children, type = "button", bgColor="primary" , full = false}) => {
    let bgClassName = "bg-primary"
    switch(bgColor){
        case "primary" : 
        bgClassName = "bg-primary"
        break;
        case "secondary": 
        bgClassName = "bg-secondary"
        break;
        default:
        break;
    }
    return (
        <button onClick={onClick} type={type} className={`${className} ${full ? "w-full" : "w-auto"} text-white bg-gradient-to-tr from-violet-600 to-pink-500  font-bold rounded-lg px-4  ${bgClassName} hover:bg-gradient-to-tr hover:from-violet-600 hover:via-violet-600 to-pink-500   h-[40px] mt-auto`}>{children}</button>
    );
};

export default Button;


// bg-gradient-to-tr hover:from-yellow-200 hover:to-fuchsia-300

