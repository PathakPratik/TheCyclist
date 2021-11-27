import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

type Props = {
    Timestamp: string,
    TripId: number
}

const TripsCard = (props:Props) => {

    const navigate = useNavigate()

    return (
      <Card sx={{ maxWidth: 345, margin: '12px' }} onClick={() => {
          navigate('?tripId='+props.TripId)
          window.location.reload()
        }
      }>
        <CardHeader
          title={props.Timestamp}
          // subheader={props.EventCity+", "+props.EventDate}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default TripsCard