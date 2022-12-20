module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./containers/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: "0px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            height: {
                "10v": "10vh",
            },
            // colors: {
            //     navyblue: "#3d6098",
            // },
        },
    },
    plugins: [],
};
