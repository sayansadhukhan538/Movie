import { useEffect, useState } from "react";
import { fetchMovie } from "../service/api.service";
import MaterialUICard from "../components/Card";
import Genres from "../components/Genres";
import useGenres from "../hooks/useGenres";


const Movies = () => {
    const [data, setData] = useState([]);
    const[selectGenres, setSelectGenres] = useState([]);
    const[genres, setGenres] = useState([]);
    const genreURL = useGenres(selectGenres);

    async function fetchFun(value){
        const output = await fetchMovie(value)
        if(output.isSuccess){
            setData(output.data.results);
            console.log(data)
        }
    }
    useEffect(()=>{
        fetchFun(genreURL);
        
    },[genreURL])
    const type = 'movie'
  return (<>

    <h2 className="heading">Movie</h2>
    <Genres
    selectGenres={selectGenres}
    setSelectGenres={setSelectGenres}
    genres={genres}
    setGenres={setGenres}
    value={type}
    
    />
    <div className="grid movie" >{data && data.map((element)=>{
        console.log(data)
        return(
            <MaterialUICard
            key={element.id}
              id={element.id}
              poster={element.poster_path||element.backdrop_path}
              title={element.title}
              date={element.first_air_date}
              media_type={element.media_type}
              vote_average={element.vote_average}
            />
        )
    })}
    </div>
    </>
  )
}

export default Movies