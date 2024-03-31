import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

export default function Button ({children, ...props}): ButtonProps {
    return <button {...props} className={'bg-lime-green text-black p-4 rounded-lg font-bold hover:bg-dark-green hover:border-lime-green'}>{children}</button>
}