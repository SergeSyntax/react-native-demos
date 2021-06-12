import axios from 'axios';
import {YELP_API, API_KEY} from '@env';

export default axios.create({
  baseURL: YELP_API,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
