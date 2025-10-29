export interface Hobby {
  goal: string;
  myRole: string;
  name: string;
  demoLink: string;
  tags?: string[];
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const hobbies: Hobby[] = [
  {
    goal: "To learn VueJS and its ecosystem",
    myRole: "Designed UI + Integrated with OpenWeatherMap API",
    name: "Weather Dashboard: Built with Vue 3 + OpenWeather API to demonstrate real-time data handling.",
    description:
      "A simple Weather App that allows users to check the weather for a specific location.",
    demoLink: "https://github.com/waziaq/vue3-typescript-weather-tailwinds",
    tags: ["Vue", "Typescript", "Tailwind", "Vite"],
  },
  {
    goal: "To learn ReactJS and its ecosystem",
    myRole: "Designed UI + Integrated with OpenWeatherMap API",
    name: "Weather Dashboard: Built with React + OpenWeather API to demonstrate real-time data handling.",
    description:
      "A simple Weather App that allows users to check the weather for a specific location.",
    demoLink: "https://github.com/waziaq/react-typescript-weather-tailwinds",
    tags: ["React", "Typescript", "Tailwind", "Vite"],
  },
  {
    goal: "Help users compare grocery prices across stores",
    myRole: "Designed UI + built REST API with Express + MongoDB",
    name: "Price Comparison Tool: Vue 3 + Express + MongoDB to help users compare grocery prices across stores.",
    description:
      "A simple Web App to scan barcode and key in price. So can key-in price and compare it.",
    demoLink: "https://github.com/waziaq/tangkap-harga",
    tags: ["Vue", "Typescript", "Tailwind", "Vite"],
  },
];
