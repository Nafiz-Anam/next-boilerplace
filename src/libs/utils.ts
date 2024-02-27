import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// More specific typing for the inputs
export function cn(
    ...inputs: (
        | string
        | number
        | null
        | undefined
        | { [key: string]: any }
        | (string | number | null | undefined | { [key: string]: any })[]
    )[]
): string {
    return twMerge(clsx(...inputs));
}
