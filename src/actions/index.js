import axios from 'axios';

import * as actionTypes from './actionTypes';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=BACON1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: actionTypes.FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: actionTypes.CREATE_POST,
    payload: request,
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: actionTypes.DELETE_POST,
    payload: id,
  };
}