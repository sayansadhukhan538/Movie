/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import '../components/DialogCard.css'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchDetails } from '../service/api.service';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MaterialUICard = ({id, poster, title, date, media_type, vote_average }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState([])

  const dialogContentStyle = {
    backgroundColor: "#39445a",
    // Add other styles as needed
  };

  const handleCardClick = () => {
    setOpenDialog(true);
  };
  async function details(){
    const output = await fetchDetails(media_type,id)
        if(output.isSuccess){
            setData(output.data);
            
        }
  }
  useEffect(()=>{
    details();
    console.log(data)
  },[openDialog])
  return (
    <div>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card className='media' onClick={handleCardClick}>
      <Badge
      style={{
        margin:'12px'
      }}
      badgeContent={vote_average} color={vote_average>5?'primary':'secondary'}
      />
      <CardMedia
        component="img"
        alt={title}
        height="auto"
        src={`https://image.tmdb.org/t/p/original${poster}`}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>{media_type}</span>
          <span>{date}</span>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Dialog  open={openDialog} onClose={() => setOpenDialog(false)} 
    maxWidth='80%' TransitionComponent={Transition}
    color='primary'
>
        {/* <DialogTitle sx={dialogContentStyle}>{title}</DialogTitle> */}
        <DialogContent sx={dialogContentStyle}>
          <DialogContentText>
            <div className='container'>
              
                <div className="left">
                
                  <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
                  
                </div>

                <div className="right">
                <h2>{media_type==='movie'?data.title: data.name} ({media_type==='movie' ? data.release_date?.split('-')[0] : data.last_air_date?.split('-')[0]})</h2>
                <em>{data.tagline}</em>
                <div className="sub-heading">
                <h3 > {media_type==='tv'? 'Total Episodes:'+ data.number_of_episodes : 'Runtime:- '+data.runtime+'mins'}</h3>
                <h3 > {media_type==='tv'? 'Season '+data.number_of_episodes : null}</h3></div>

                
                <div className="box">
                  <p>{data.overview}</p>
                </div>

                </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={dialogContentStyle}>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  </div>

  );
};

export default MaterialUICard;