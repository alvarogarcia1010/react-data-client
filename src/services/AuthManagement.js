import axiosInstance from '../AxiosInstance'
import {fireMessage, fireErrorMessage} from './helpers'

const login = async (data) => {
  let response;

  try 
  {
    let url = axiosInstance.defaults.baseURL + 'login';
    response = await axiosInstance.post(url, data);
  } 
  catch (error) 
  {
    response = error.response.data;

    if(error.response.status === 401)
    {
      fireMessage(response.errors.title, response.errors.detail);
    }
    else
    {
      fireErrorMessage();
    }
    
  }
  finally
  {
    return response;
  }
}

export default {login}