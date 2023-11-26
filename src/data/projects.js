import WORDLE from "../assets/WORDLE.png";
import PACMAN from "../assets/PACMAN.png";
import BITCOIN from "../assets/BITCOIN.png";
import NBA from "../assets/NBA.png";

export const PROJECTS = [
  {
    name: "NBA Game Predictor",
    technologies: ["Python", "Jupyter Notebook"],
    highlights: 
      "Created an algorithm to predict the outcome of future NBA gamers. This was done by web scraping NBA box scores through BeautifulSoup and parsed the box scores into Pandas data frames. This data was used to train a machine learning model to make predictions.",
    image: NBA,
    github: "https://github.com/kayne-lee/NBA-Game-Predictor",
    website: "",
  },
    {
    name: "Bitcoin Predictor With ML",
    technologies: ["Python", "Jupyter Notebook"],
    highlights: 
      "Developed an algorithm to predict the future price of Bitcoin using historical price and sentimental data. This project used USD/BTC price from Yahoo Fincance, along with data from wikipedia about edits to the Bitcoin page. These datas were merged then used to train a random forest model then switched to XGBoost model to improve accuracy. Developped a backtesting system and use a robust error metric to determine if the algorithm is performing well. This system is also able to make next-day predictions.",
    image: BITCOIN,
    github: "https://github.com/kayne-lee/bitcoin-predictor",
    website: "",
  },
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
