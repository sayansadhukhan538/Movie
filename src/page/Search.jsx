
import { Button, Input, Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import MaterialUICard from '../components/Card';
import { fetchSearch } from '../service/api.service';
const Search = () => {
  const [type, setType] = useState(0);
    // console.log(type)
    const[search, setSearch] = useState('');
    const[output, setOutput] = useState([]);
    
    async function getSearchsults(){
      const data = await fetchSearch(type,search);
      if(data.isSuccess){
        setOutput(data.data)
      }
    }
  return (
    <div style={{
      margin:'123px 0px'
  }}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {   color:'white', backgroundColor:'rgb(45, 62, 72);', borderRadius:'10px' },
      }}
      noValidate
      autoComplete="off"
    >
          <Input  style={{
              minWidth:'60%',
              padding:'7.5px',
              marginRight:'10px'
          }} 
          id="standard-basic" placeholder="Search" variant="standard" 
          onChange={(e)=>setSearch(e.target.value)}
          />
      <Button 
            variant="contained"
            style={{
              minWidth:'10%'
          }}
          onClick={getSearchsults}
          >
            <SearchIcon fontSize="large" />
          </Button>
    </Box>
    <Tabs
          value={type}
          
          onChange={(event, newValue) => {
            setType(newValue);
            
          }}
          style={{ paddingBottom: 5, margin:'10px',marginLeft:'36px' }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%", color:'white' }} label="Movies" />
          <Tab style={{ width: "50%", color:'white' }} label="TV Series" />
        </Tabs>
        <div className="grid">
        {output && output.map((e)=>{
          return(
            <MaterialUICard key={e.id}
            poster={e.poster_path}
              title={e.title || e.name}
              date={e.first_air_date || e.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={e.vote_average}
            />
          )
        })}
        {(search && !output &&type)?<h2>No TV Series found</h2>:<h2>No Movies found</h2>}
        </div>
    </div>
  )
}

export default Search