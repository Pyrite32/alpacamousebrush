import { tv } from 'tailwind-variants';

const icon = tv({
    base: "text-black",
    variants: {
        size: {
            xs: "w-4 h-4",
            sm: "w-5 h-5",
            md: "w-6 h-6",
            lg: "w-8 h-8",
            xl: "w-10 h-10",
            xxl: "w-12 h-12",
        },
        color: {
            black: "text-black dark:text-white",
            white: "text-white dark:text-black",
            gray: "text-gray-500 dark:text-gray-400",
            red: "text-red-500 dark:text-red-400",
            green: "text-green-500 dark:text-green-400",
            blue: "text-blue-500 dark:text-blue-400",
        },
    }, 
});