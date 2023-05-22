/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#111111",
                primary: "#fa8c02",
                secondary: "#6745c4",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                sm: "5rem",
                md: "6rem",
                lg: "7rem",
                xl: "8rem",
            },
        },
    },
    plugins: [],
};
