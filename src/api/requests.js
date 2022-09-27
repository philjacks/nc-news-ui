import axios from "axios";

const baseURL = "https://ncnews-philjacks-edition.herokuapp.com/api";

export const getArticles = (selectedTopic) =>
  axios.get(`${baseURL}/articles`, {
    params: {
      topic: selectedTopic,
    },
  });

export const getTopics = () => axios.get(`${baseURL}/topics`);

export const getArticleById = (id) => axios.get(`${baseURL}/articles/${id}`);
