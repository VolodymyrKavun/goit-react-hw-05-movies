// API Key: 1c4a98afb2f80cbf9a0f0f59d5b0ab2a
import axios from 'axios';

const API_KEY = '1c4a98afb2f80cbf9a0f0f59d5b0ab2a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {};

export async function getDataFromApiTrending() {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    console.log('🚀 ~ response', response);
    return response;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('It Trending');
  }
}

export async function getDataFromApiSearchByName() {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('It SearchByName');
  }
}

export async function getDataFromApiMovieDetails(movie_id) {
  try {
    const response = await axios.get(
      `movie/{movie_id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('It MovieDetails');
  }
}

export async function getDataFromApiActorInfo(movie_id) {
  try {
    const response = await axios.get(
      `movie/{movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('It ActorInfo');
  }
}

export async function getDataFromApiReviews(movie_id) {
  try {
    const response = await axios.get(
      `movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('It Reviews');
  }
}
