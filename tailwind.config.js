module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
      extend: {
          fontFamily: {
              'Poppins': ["'Poppins'",'sans-serif'],
          },backgroundImage: {
            'hero-pattern': "url('./assets/img/Ellipse 2.png')",
            'background-img': "url('/assets/img/download_waifu2x_photo_noise3_scale-removebg-preview (1).png')",
          },
      },
  },
  plugins: [],
}