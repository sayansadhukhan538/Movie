import axiosInstances from "../utils/axios";

const headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmNlYjhlMDVmMjBkYzY5MWY2ZGFjYmRkYTQ0YTZhMyIsInN1YiI6IjY0ZGExYjk5MzcxMDk3MDEzOTQ1YzYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ixf4X1OkJYHfq3xyyhxSV5CHBXQnVNxCvDivSo22NA'
  
};

const networkCall = async (params) => {
  try {
    const response = await axiosInstances.get(`trending/${params}/day?language=en-US`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};
const fetchMovie = async () => {
  try {
    const response = await axiosInstances.get(`trending/movie/day?language=en-US`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};
const filterMovie = async (params) => {
  try {
    const response = await axiosInstances.get(`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params}`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};

const fetchTv = async () => {
  try {
    const response = await axiosInstances.get(`trending/tv/day?language=en-US`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};
const filterTv = async (params) => {
  try {
    const response = await axiosInstances.get(`discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params}`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};
const fetchGenres = async (params) => {
  try {
    const response = await axiosInstances.get(`genre/${params}/list?language=en`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data.genres,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};
const fetchSearch = async (params, search) => {
  try {
    const response = await axiosInstances.get(`search/${params?'tv':'movie'}?query=${search}&include_adult=false&language=en-US&page=1`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data.results,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};
const fetchDetails = async (params, movie_id) => {
  try {
    const response = await axiosInstances.get(`${params}/${movie_id}`, { headers })
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
    });
    
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
    });
  }
};

export {fetchMovie, networkCall, fetchTv, fetchGenres, fetchSearch, filterMovie, filterTv, fetchDetails};