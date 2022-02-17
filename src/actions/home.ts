import { QUERY_HOME } from "../constants/home";
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
