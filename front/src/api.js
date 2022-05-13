import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://mtg-decklist.herokuapp.com/'
})