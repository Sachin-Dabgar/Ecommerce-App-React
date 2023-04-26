/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "card-bg-01": "var(--card-bg-01)",
                "card-bg-02": "var(--card-bg-02)",
                "card-bg-03": "var(--card-bg-03)",
                "card-bg-04": "var(--card-bg-04)",
                "primary-color": "var(--primary-color)",
                "hero-bg": "var(--hero-bg)",
                "small-text-color": "var(--small-text-color)",
                "heading-text-color": "var(--heading-text-color)",
            },
        },
    },
    plugins: [],
    important: true,
};
