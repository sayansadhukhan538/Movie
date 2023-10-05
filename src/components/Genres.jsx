/* eslint-disable react/prop-types */

import { Chip } from "@mui/material";




const Genres = ({genres,setSelectGenres, selectGenres}) => {
    
  
    
  
  // useEffect(()=>{
  //     console.log(genres)
  //     console.log('hi')
  //     console.log("selected genres"+selectGenres)
    
  //   },[selectGenres])
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
                    color:'white',
                    backgroundColor: selectGenres.includes(genre.id)?'grey':'rgb(45, 62, 72)'
                }}
                size="small"
                clickable
                color={selectGenres===genre?'white':'secondary'}

                onClick={!selectGenres.includes(genre.id) ? ()=> setSelectGenres((prev) => [...prev, genre.id]):null}

                onDelete={selectGenres.includes(genre.id)? ()=>setSelectGenres((prev) => prev.filter((g) => g !== genre.id)):null}  
                
                // {selectGenres.includes(genre.id) ? (onDelete={() => setSelectGenres((prev) => prev.filter((g) => g !== genre.id))}) : (onClick={() => setSelectGenres((prev) => [...prev, genre.id])})}

                />
            )
        })}
    </div>
  )
}

export default Genres