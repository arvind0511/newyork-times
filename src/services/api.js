import axios from 'axios';

const API_KEY = "vY9j7Fq9RKuh92SiyGUpZdfty23ivtVD"
// const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key="
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed"

export const fetchArticles = async (page = 1) => {
    try {
        // const response = await axios.get(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
        const response = await axios.get(`${BASE_URL}/${page}.json?api-key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}