import WORDLE from "../assets/WORDLE.png";
import PACMAN from "../assets/PACMAN.png";
import BITCOIN from "../assets/BITCOIN.png";
import NBA from "../assets/NBA.png";
import SPREADSHEET from "../assets/work/Spreadsheet.png"
import SMART from "../assets/Smart.png"
import NUMERAI from "../assets/NumerAI.png"

export const PROJECTS = [
  {
    name: "NumerAI Model",
    technologies: ["Python", "API"],
    highlights: 
      "Developped a ML model to participate in the NumerAI tournament to trade crypto currencies. Currently have a 12% profit and ranked top 25 in the season. Used a LightGBM model to process the data given by NumerAI.",
    image: NUMERAI,
    github: "https://github.com/kayne-lee/numerAIModel",
    website: "https://numer.ai/~kaynelee",
  },
  {
    name: "SmartPlate",
    technologies: ["Next.js", "OpenAI"],
    highlights: 
      "Created a Next.js application integrated with OpenAI API to create a budget friendly meal planner. Took data from the user and input into a GPT-3.5-Turbo model and output a list of meals along with ingredients and price of the meal. These ingredients could then be added to a grocery list where all the ingredients needed are stored along with total price, number of meals, and average cost per meal spent.",
    image: SMART,
    github: "https://github.com/kayne-lee/smartplate",
    website: "https://youtu.be/L--EFs7gULE",
  },
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
    name: "Excel Spreadsheet",
    technologies: ["C"],
    highlights: 
      "Developed an advanced spreadsheet application utilizing data structures like linked lists, queues, and hashmaps. This project emulates Excel's functionality, requiring problem-solving skills for complex formula calculations and memory copying between cells. Implemented linked lists for efficient data organization, addressing challenges in seamless data retrieval for formula calculations. Used queues to optimize task processing, demonstrating problem-solving skills in managing task prioritization for computational efficiency.",
    image: SPREADSHEET,
    github: "https://github.com/kayne-lee/spreadsheet",
    website: "https://youtu.be/A_pZfOCyXlA",
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
