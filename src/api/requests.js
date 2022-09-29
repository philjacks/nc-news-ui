import axios from "axios";

const baseURL = "https://ncnews-philjacks-edition.herokuapp.com/api";

export const getArticles = (params) =>
  axios.get(`${baseURL}/articles`, {
    params: params.request,
  });

export const getTopics = () => axios.get(`${baseURL}/topics`);

export const getArticleById = (id) => axios.get(`${baseURL}/articles/${id}`);

export const patchUpvoteByArticleId = (id) =>
  axios.patch(`${baseURL}/articles/${id}`, {
    votes: 1,
  });

export const patchDownvoteByArticleId = (id) =>
  axios.patch(`${baseURL}/articles/${id}`, {
    votes: -1,
  });

export const getCommentsByArticleId = (id) =>
  axios.get(`${baseURL}/articles/${id}/comments`);

export const postCommentByArticleId = (id, body) =>
  axios.post(`${baseURL}/articles/${id}/comments`, body);

export const deleteCommentById = (id) =>
  axios.delete(`${baseURL}/comments/${id}`);
