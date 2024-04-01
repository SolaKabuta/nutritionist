import {ButtonHTMLAttributes, ReactNode} from "react";
// import {twMerge} from "tailwind-merge";

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

// @ts-ignore
export default function Button ({children, ...props}): ButtonProps {
    // @ts-ignore
    return (
        <button {...props} className={'bg-lime-green text-black p-4 rounded-lg font-bold hover:bg-dark-green hover:border-lime-green'}>
            {children}
        </button>
    );
}
