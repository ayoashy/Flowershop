import axios from "axios";

const axiosClient  = axios.create({
 baseURL:'https://cannabis-recipes.p.rapidapi.com',
})

axiosClient.interceptors.request.use(async(config)=>{
 config.headers.Authorization = 'lp'
 return config
})

const options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports',
  params: {all: 'true'},
  headers: {
    'X-RapidAPI-Key': 'd12b6cbb93msh6702b0bfd22de5fp1d1bf4jsn9b5d7310bb40',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};


export const getCanna = async ()=>{
 try {
  const response = await axios.request(options)
  const data = response.data
  return data
 } catch (error) {
console.log(error);
error }
}