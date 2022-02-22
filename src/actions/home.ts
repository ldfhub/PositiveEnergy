import { QUERY_HOME, QUERY_HOME_ONE } from "../constants/home";
import { loadAsyncData } from '../utils/dispatch_get_data';

export const queryHome = (data:object) => {
  const params = {
    url: '/queryH/queryHome',
    method: 'POST',
    type: QUERY_HOME,
    data
  }
  return loadAsyncData(params);
}

export const queryHomeOne= (data:any) => {
  const params = {
    url: '/queryH/queryHome',
    method: 'POST',
    type: QUERY_HOME_ONE,
    data,
    payloadExtra: data.type
  }
  return loadAsyncData(params);
}
