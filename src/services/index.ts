import axios, { AxiosResponse, AxiosError } from 'axios';

// Define the URL of the API endpoint you want to request data from
const apiUrl: string = 'http://127.0.0.1:8000/';

const api = axios.create({
  baseURL: `${apiUrl}api/`,
});

export const getSells = async (): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await api.get(`/sell/?deleted=0`);
    return response;
  } catch (error: unknown) {
    // Specify 'unknown' as the catch clause variable type
    if (error instanceof AxiosError) {
      // Handle AxiosError
      console.error((error as AxiosError).message);
    } else {
      // Handle other error types
      console.error('Unknown error:', error);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getSellById = async (id: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await api.get(`/sell/${id ? id : ''}`);
    return response;
  } catch (error: unknown) {
    // Specify 'unknown' as the catch clause variable type
    if (error instanceof AxiosError) {
      // Handle AxiosError
      console.error((error as AxiosError).message);
    } else {
      // Handle other error types
      console.error('Unknown error:', error);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const deleteSell = async (id: number): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await api.patch(`/sell/${id}/`, { deleted: 1 });
    return response;
  } catch (error: unknown) {
    // Specify 'unknown' as the catch clause variable type
    if (error instanceof AxiosError) {
      // Handle AxiosError
      console.error((error as AxiosError).message);
    } else {
      // Handle other error types
      console.error('Unknown error:', error);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getComission = async (start_date: Date, end_date: Date): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await api.get(
      `/seller/get_comission/?start_date=${start_date ? start_date : ''}&end_date=${end_date ? end_date : ''}`,
    );
    return response;
  } catch (error: unknown) {
    // Specify 'unknown' as the catch clause variable type
    if (error instanceof AxiosError) {
      // Handle AxiosError
      console.error((error as AxiosError).message);
    } else {
      // Handle other error types
      console.error('Unknown error:', error);
    }
    throw error; // Re-throw the error to be handled by the caller
  }
};
