import axios from 'axios';

const API_KEY = "jTYynR49wLbgxct41TyW25EQy5Satqi4-zTO4RS0yr8";
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        query,          
        page,           
        per_page: 12,  
        client_id: API_KEY, 
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw new Error('Failed to fetch images. Please try again later.');
  }
};

