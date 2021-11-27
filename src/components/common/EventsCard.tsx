import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from "@material-ui/core";

type Props = {
    Eventname: string,
    EventURL: string, 
    EventDate:string, 
    EventCity:string,
    EventAddress:string
}

const EventsCard = (props:Props) => (

    <Card sx={{ maxWidth: 345, margin: '12px' }}>
      <CardHeader
        title={props.Eventname}
        subheader={props.EventCity+", "+props.EventDate}
      />
      <CardActions disableSpacing>
        <IconButton style={{ margin: '0 auto' }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{ margin: '0 auto' }} aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button style={{ margin: '0 auto' }}
            variant="contained" 
            color="primary" 
            target="_blank" 
            href={props.EventURL}
        >
            Register
        </Button>
      </CardActions>
    </Card>
)

export default EventsCard