import axios from 'axios';
const baseURL = 'https://sa-living-default-rtdb.firebaseio.com/';

export async function getMainList(url) {
  return await axios.get(baseURL + url);
}
