
import { BASE_URL } from "../config";
const token = localStorage.getItem('token')

export const getBooking = () => {
  return fetch(`${BASE_URL}/booking`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then((res) => res.json())
};

export const getToursCounts = () => {
  return fetch(`${BASE_URL}/tours/search/getTourCount`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then((res) => res.json())
};

export const getAllTours = () => {
  return fetch(`${BASE_URL}/tours`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then((res) => res.json())
};



export const getAllUsers = () => {
  return fetch(`${BASE_URL}/users`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then((res) => res.json())
};

export const deleteUser = () => {
  return fetch(`${BASE_URL}/users`,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then((res) => res.json())
}
