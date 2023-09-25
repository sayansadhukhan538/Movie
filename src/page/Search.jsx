
import { Button, Input, Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
const Search = () => {
  const [type, setType] = useState(0);
    
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
          }} id="standard-basic" placeholder="Search" variant="standard" />
      <Button
            
            variant="contained"
            style={{
              minWidth:'10%'
          }}
          >
            <SearchIcon fontSize="large" />
          </Button>
    </Box>
    <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            
          }}
          style={{ paddingBottom: 5, margin:'10px',marginLeft:'36px' }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%", color:'white' }} label="Movies" />
          <Tab style={{ width: "50%", color:'white' }} label="TV Series" />
        </Tabs>
    </div>
  )
}

export default Search