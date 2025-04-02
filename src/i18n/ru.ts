import { Dict } from "./i18n";

export const ru_dict: Dict = {
  hello: (name: string) => `Привет ${name}, как у тебя дела?`,
  goodbye: (name: string) => `Пока ${name}`,
  food: {
    meat: "мясо",
    fruit: "фрукт",
  },
};
