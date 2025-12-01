import axios from 'axios';
export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export const appid = '8c075e97c4ef78dcae962ed38838ae10'