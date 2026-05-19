import axios from 'axios';

const api = axios.create({
    baseURL : "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
    return api.get("all?fields=name,capital,currencies,flags,population,region")
};

export const getCountryIndvData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,capital,currencies,flags,population,region`)
};
