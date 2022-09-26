import axios from "axios";

const baseURL = "https://ncnews-philjacks-edition.herokuapp.com/api";

export const getArticles = () => axios.get(`${baseURL}/articles`);
