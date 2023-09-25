/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';

const MaterialUICard = ({ poster, title, date, media_type, vote_average }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card className='media' >
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

  );
};

export default MaterialUICard;