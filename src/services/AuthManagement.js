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

const register = async (data) => {
  let response;

  try 
  {
    let url = axiosInstance.defaults.baseURL + 'register';
    response = await axiosInstance.post(url, data);
  } 
  catch (error) 
  {
    response = error.response.data;

    if(error.response.status === 422)
    {
      let details = '<ul>';

      response.errors.forEach(error => {
        details += `<li>${error.title}</li>`; 
      });

      details += '</ul>';

      fireMessage("Información", details, 'info', true);
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

const logout = async (token) => {
  let response;

  try 
  {
    let url = axiosInstance.defaults.baseURL + 'logout';
    response = await axiosInstance.get(url, {
      headers: {
        Authorization: token
      }
    });
  } 
  catch (error) 
  {
    response = error.response.data;

    if(error.response.status === 401)
    {
      fireMessage("Acceso no autorizado", "Favor inicie sesión");
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

export default {login, register, logout}