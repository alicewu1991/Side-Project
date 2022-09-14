/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
   
    extend: {
      fontSize:{
          heading: "56px",
          heading_secondary: "32px",
          heading_third: "24px",
          paragraph:"16px"
      },


      lineHeight: {
        heading: "56px",
        heading_secondary: "36px",
        heading_third: "28px",
        paragraph:"26px"
      },


      backgroundColor:{
        primary:"#F16718",
        primary_active:"#FF9B62",
        secondary:"#162542",
        secondary_light:"#7B8BAD",
        neutral:"#E8EFF2"
      },
      textColor:{
        primary:"#F16718",
        primary_active:"#FF9B62",
        secondary:"#162542",
        secondary_light:"#7B8BAD",
        neutral:"#E8EFF2"
      }
    },
    
  },
  plugins: [],
}


// font-family: 'Barlow', sans-serif;
// font-family: 'Fraunces', serif;
// font-family: 'Montserrat', sans-serif;
