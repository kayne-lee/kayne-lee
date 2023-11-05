import WORDLE from "../assets/WORDLE.png";
import PACMAN from "../assets/PACMAN.png"

export const PROJECTS = [
  {
    name: "Wordle",
    technologies: ["React.js", "Node.js", "JSON"],
    highlights: 
      "Created a clone of the New York Times game, Wordle, using React.js. Implemented all of the rules used in the real game. This project used a database using JSON. The project would take in user input, and would check for the correct letters. Letters would display different colours based off the results.",
    image: WORDLE,
    github: "https://github.com/kayne-lee/kayneWordle",
    website: "https://youtu.be/GgezcaMuh8o",
  },
  {
    name: "Pacman",
    technologies: ["C++"],
    highlights: 
      "Created a clone of Pacman using C++. This was created using different functions to take the input of the user. The ghost followed a function where everytime Pacman was visible to the ghost, the ghost would follow Pacman till they can not see it again.",
    image: PACMAN,
    github: "https://github.com/kayne-lee/Pacman",
    website: "https://youtu.be/hjE_QlTzTbQ",
  },

];
