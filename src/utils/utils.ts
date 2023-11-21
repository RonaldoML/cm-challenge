import { Date } from "../helpers/types";
import summer from "../assets/summer.svg";
import winter from "../assets/winter.svg";
import fall from "../assets/fall.svg";
import spring from "../assets/spring.svg";

export const refineDate = (date: Date) => {
  if (!date.day && !date.month && !date.year) {
    return 'date';
  }
  if (!date.day && !date.month) {
    return `${date.year}`;
  }
  if (!date.day) {
    return `${date.month}/${date.year}`;
  }
  return `${date.day}/${date.month}/${date.year}`;
};

export const refineDescription = (description: string) => {
  return description.replaceAll(/<\/?[^>]+(>|$)/gi, "");
};

export const refineTitle = (title: string) => {
  const newTitle = title.split(' ').slice(0, 2).join(" ");
  return `${newTitle}...`;
};

export const refineGenres = (genre: [string]) => {
  const genreArr = genre.slice(0, 2).join("/");
  return `${genreArr}...`;
}

export const seasons = {
  WINTER: { name: "Winter", img: winter },
  SPRING: { name: "Spring", img: spring },
  SUMMER: { name: "Summer", img: summer },
  FALL: { name: "Fall", img: fall },
}

export const isArrayWithLength = (array: unknown) => {
  return Array.isArray(array) && array.length;
}