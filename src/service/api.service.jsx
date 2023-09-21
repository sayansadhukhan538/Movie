import axios from "axios";

const headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmNlYjhlMDVmMjBkYzY5MWY2ZGFjYmRkYTQ0YTZhMyIsInN1YiI6IjY0ZGExYjk5MzcxMDk3MDEzOTQ1YzYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ixf4X1OkJYHfq3xyyhxSV5CHBXQnVNxCvDivSo22NA'
  
};
const networkCall = async (params) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/${params}/day?language=en-US`, { headers })
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
export {networkCall};