import { useEffect, useState } from "react";
import { networkCall } from "../service/api.service";
import MaterialUICard from "../components/Card";
import Genres from "../components/Genres";


const Movies = () => {
    const [data, setData] = useState([]);
    const[selectGenres, setSelectGenres] = useState([]);
    const[genres, setGenres] = useState([]);
    async function fetchTrending(value){
        const output = await networkCall(value)
        if(output.isSuccess){
            setData(output.data.results);
            console.log(data)
        }

    }
    const type = 'movie';
    useEffect(()=>{
        fetchTrending(type);
        
    },[])
  return (<>

    <h2 className="heading">Movie</h2>
    <Genres
    selectGenres={selectGenres}
    setSelectGenres={setSelectGenres}
    genres={genres}
    setGenres={setGenres}
    
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