/* eslint-disable react/prop-types */

import { Chip } from "@mui/material";
import { useEffect } from "react";
import { fetchGenres } from "../service/api.service";


const Genres = ({setGenres,genres,setSelectGenres, selectGenres, value}) => {
    
  async function getGenre(params){
    const data = await fetchGenres(params);
    if(data.isSuccess){
      setGenres(data.data)
    }
  }
    
    console.log(genres)
    console.log(selectGenres)
    
    useEffect(()=>{
    getGenre(value)
    },[])
  return (
    <div style={{
        margin:'123px 0px'
    }}>
        {genres && genres.map((genre)=>{
            // function btn(){
            //   if(selectGenres.includes(genre.id)){
            //     setSelectGenres((prev)=>prev.filter((g)=>g!==genre.id))
            //   }
            //   else{
            //     setSelectGenres((prev)=>[...prev, genre.id])
            //   }
            // }
            return(
                <Chip key={genre.id} label={genre.name} style={{
                    margin:'2px',
                    color:'black',
                    backgroundColor: !selectGenres.includes(genre.id) ? 'primary': 'secondary',
                }}
                size="small"
                clickable
                color={selectGenres===genre?'default':'secondary'}

                onClick={() =>!selectGenres.includes(genre.id) && setSelectGenres((prev) => [...prev, genre.id])}
                onDelete={()=>selectGenres.includes(genre.id)&& setSelectGenres((prev) => prev.filter((g) => g !== genre.id))}  
                
                // {selectGenres.includes(genre.id) ? (onDelete={() => setSelectGenres((prev) => prev.filter((g) => g !== genre.id))}) : (onClick={() => setSelectGenres((prev) => [...prev, genre.id])})}

                />
            )
        })}
    </div>
  )
}

export default Genres