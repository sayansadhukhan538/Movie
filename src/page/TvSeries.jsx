import { useEffect, useState } from "react";
import { fetchTv } from "../service/api.service";
import MaterialUICard from "../components/Card";
import useGenres from "../hooks/useGenres";
import Genres from "../components/Genres";


const Tvseries = () => {
    const [data, setData] = useState([]);
    const[selectGenres, setSelectGenres] = useState([]);
    const[genres, setGenres] = useState([]);
    const genreURL = useGenres(selectGenres);

    async function fetchSeries(value){
        const output = await fetchTv(value)
        if(output.isSuccess){
            setData(output.data.results);
            console.log(data)
        }

    }
    useEffect(()=>{
        fetchSeries(genreURL);  
    },[genreURL])
  return (<>

    <h2 className="heading">TV Series</h2>
    <Genres
    selectGenres={selectGenres}
    setSelectGenres={setSelectGenres}
    genres={genres}
    setGenres={setGenres}
    value={'tv'}
    />
    <div className="grid">{data && data.map((element)=>{
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

export default Tvseries