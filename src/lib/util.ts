import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//Merge the class of tailwind example = px-2 py-2 -> p-2    
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}