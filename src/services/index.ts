import axios, { AxiosResponse } from 'axios';

// Define the URL of the API endpoint you want to request data from
const apiUrl: string = 'http://127.0.0.1:8000/';

const api = axios.create({
  baseURL: `${apiUrl}api/`,
});

export const getSells = async (id: string): Promise<void> => {
  try {
    const response: AxiosResponse = await api.get(`/sell/${id ? id : ''}`);
    return console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const getComission = async (start_date: Date, end_date: Date): Promise<void> => {
  try {
    const response: AxiosResponse = await api.get(
      `/seller/get_comission/?start_date=${start_date ? start_date : ''}&end_date=${end_date ? end_date : ''}`,
    );
    return console.log(response);
  } catch (error) {
    console.error(error);
  }
};
