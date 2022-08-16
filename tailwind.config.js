module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'work': 'hsl(15, 100%, 70%)',
        'play': 'hsl(195, 74%, 62%)',
        'study': 'hsl(348, 100%, 68%)',
        'exercise': 'hsl(145, 58%, 55%)',
        'social': 'hsl(264, 64%, 52%)',
        'selfCare': 'hsl(43, 84%, 65%)',
        'vdkblue': 'hsl(226, 43%, 10%)',
        'mine': 'hsl(226, 43%, 20%)',
        'dkblue': 'hsl(235, 46%, 20%)',
        'desblue': 'hsl(235, 45%, 61%)',
        'paleblue': 'hsl(236, 100%, 87%)'
      }
    },
  },
  variant: {},
  plugins: [],
}
