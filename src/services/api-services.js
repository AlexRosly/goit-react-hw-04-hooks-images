import { API_KEY } from "./key";
import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api`;
axios.defaults.params = {
  key: API_KEY,
  per_page: 12,
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
};

export const fetchImage = async (searchQuery, page) => {
  const { data } = await axios.get(
    `/?${axios.defaults.params}&q=${searchQuery}&page=${page}`
  );
  return data;
};
