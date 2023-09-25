/* eslint-disable react/prop-types */

import { Chip } from "@mui/material";
import axios from "axios"
import { useEffect } from "react";


const Genres = ({setGenres,genres,setSelectGenres, selectGenres}) => {
    const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmNlYjhlMDVmMjBkYzY5MWY2ZGFjYmRkYTQ0YTZhMyIsInN1YiI6IjY0ZGExYjk5MzcxMDk3MDEzOTQ1YzYxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ixf4X1OkJYHfq3xyyhxSV5CHBXQnVNxCvDivSo22NA'
      
    };
    async function fetchGenres(){
        const {data} =await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', { headers })
        
        setGenres(data.genres)
    }
    function handleAdd(genre){
        setSelectGenres([...selectGenres,genre]);
        setGenres(genres.filter((g)=>g.id!==genre.id));
    }
    function handleRemove(genre){
        setSelectGenres(selectGenres.filter((g)=>g.id!==genre.id));
        setGenres([...genres,genre]);
    }
    console.log(genres)
    useEffect(()=>{
    fetchGenres()
    },[])
  return (
    <div style={{
        margin:'123px 0px'
    }}>{selectGenres && selectGenres.map((genre)=>{
        return(
            <Chip key={genre.id} label={genre.name} style={{
                margin:'2px',
                color:'black',
                backgroundColor:'white'
            }}
            size="small"
            clickable
            variant="outlined"
            color="primary"
            onDelete={()=>handleRemove(genre)}
            />
        )
    })}
        {genres && genres.map((genre)=>{
            return(
                <Chip key={genre.id} label={genre.name} style={{
                    margin:'2px',
                    color:'black',
                    backgroundColor:'white'
                }}
                size="small"
                clickable
                onClick={()=>handleAdd(genre)}
                />
            )
        })}
    </div>
  )
}

export default Genres