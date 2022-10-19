import axios from "axios";
import {
  GET_ANIMES,
  GET_ANIMES_DETAIL,
  ADD_ANIME_FAV,
  DELETE_ANIME,
  CLEAN_DETAIL,
  RANKING_ANIME,
  GET_EPISODIES
} from "./actions-type";







export const getAllAnimes = (titulo) => {
  return function (dispatch) {
    return fetch(`https://api.jikan.moe/v4/anime?q=${titulo}&sfw`)
      .then((response) => response.json())
      .then((obj) => dispatch({ type: GET_ANIMES, payload: obj }));
  };
};

export const getDetailAnimes = (id) => {
  return function (dispatch) {
    return fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => response.json())
      .then((obj) => dispatch({ type: GET_ANIMES_DETAIL, payload: obj }));
  };
};


export const getEpisodes = (id) => {
  return function (dispatch) {
    return fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`)
      .then((response) => response.json())
      .then((obj) => dispatch({ type: GET_EPISODIES, payload: obj }));
  };
};



export const Add_Fav_Anime = (id) => {
  return {
    type: ADD_ANIME_FAV,
    payload: id,
  };
};

export const Delete_Anime = (id) => {
  return {
    type: DELETE_ANIME,
    payload: id
  };
};

export const cleanDetail = (id) => {
  return {
    type: CLEAN_DETAIL,
    payload: id,
  };
};

export const rankingAnime = () => {
  
  return function (dispatch) {
    return fetch(`https://api.jikan.moe/v4/top/anime`)
      .then((response) => response.json())
      .then((obj) =>dispatch ({ type: RANKING_ANIME, payload: obj }));
  };
};
