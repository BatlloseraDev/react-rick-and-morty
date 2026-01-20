import axios from 'axios'

export const rickAndMortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})


export const checkErrorEmptySearchApi = (error: any) =>{ 
  if(axios.isAxiosError(error) && error.response?.status === 404){
    return true;
  }
  return false;

}