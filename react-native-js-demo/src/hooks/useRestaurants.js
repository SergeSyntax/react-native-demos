import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

const useRestaurants = term => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async searchTerm => {
    try {
      const results = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setRestaurants(results.data.businesses);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, restaurants, error];
};

export default useRestaurants;
