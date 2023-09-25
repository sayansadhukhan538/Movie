import { useEffect, useState } from "react";
import { networkCall } from "../service/api.service";
import MaterialUICard from "../components/Card";



const Trending = () => {
    const [data, setData] = useState([]);
    async function fetchTrending(value){
        const output = await networkCall(value)
        if(output.isSuccess){
            setData(output.data.results);
            console.log(data)
        }

    }
    const type = 'all';
    useEffect(()=>{
        fetchTrending(type);
        
    },[])
  return (<>
    <h2 className="heading">Trending</h2>
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
    })}</div></>
  )
}

export default Trending