import { QUERY_LIST } from "../constants/list";
import { loadAsyncData } from '../utils/dispatch_get_data';

export const queryList = (data:object) => {
  const params = {
    url: '/query/queryList',
    method: 'POST',
    type: QUERY_LIST,
    data
  }
  return loadAsyncData(params);
}
