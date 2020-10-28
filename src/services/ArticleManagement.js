import axiosInstance from '../AxiosInstance'
import {fireMessage, fireErrorMessage, isEmpty} from './helpers'

export const getArticles = async (query, token) => {
  let articlesData = {
    rows: [],
    page: 1,
    records: 0
  };

  try 
  {
    let url = axiosInstance.defaults.baseURL + '/articles?';
    url += 'page[size]=' + query.pageSize;
    url += '&page[number]=' + (query.page + 1);
    url += '&filter=' + query.search;

    if(!isEmpty(query.orderDirection))
    {
      url += '&sortOrder=' + query.orderDirection;
    }

    if(!isEmpty(query.orderBy))
    {
      url += '&sortColumn=' + query.orderBy.field;
    }

    let response = await axiosInstance.get(url, {
      headers: {
        Authorization: token
      }
    });

    let rows = [];

    response.data.data.forEach(article => {
      rows.push({
        id: article.id,
        ...article.attributes
      });
    });

    articlesData.rows = rows;
    articlesData.page = response.data.meta.page;
    articlesData.records = response.data.meta.records;
  }
  catch (error)
  {
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
    return articlesData;
  }
}

export default {getArticles};