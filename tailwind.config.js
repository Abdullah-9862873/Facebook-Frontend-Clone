/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        myLoginBtnColor: "#1877f2",
        focus: "#1b74e4",
        myCreateAccBtnColor: "#42b72a",
      },
      fontSize: {
        mine: "1.25rem",
        createAccBtnSize: "1.063rem",
        lastDescription: "0.875rem",
      },
      boxShadow: {
        myShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
