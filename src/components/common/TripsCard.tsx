import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from "react-router-dom";

type Props = {
    Timestamp: string,
    TripId: number,
    Duration: string
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
          title={"Time: " + props.Timestamp}
          subheader={"Duration: " + props.Duration}
        />
        <CardActions disableSpacing>
          <IconButton style={{ margin: '0 auto' }} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton style={{ margin: '0 auto' }} aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default TripsCard