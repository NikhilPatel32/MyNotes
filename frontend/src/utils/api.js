import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
};

// Auth APIs
export const loginWithGoogle = (token) => {
  return axios.post(`${API_URL}/auth/google`, { token });
};

// Notes APIs
export const getNotes = () => {
  return axios.get(`${API_URL}/notes`, getAuthHeaders());
};

export const createNote = (noteData) => {
  return axios.post(`${API_URL}/notes`, noteData, getAuthHeaders());
};

export const updateNote = (id, noteData) => {
  return axios.put(`${API_URL}/notes/${id}`, noteData, getAuthHeaders());
};

export const deleteNote = (id) => {
  return axios.delete(`${API_URL}/notes/${id}`, getAuthHeaders());
};
