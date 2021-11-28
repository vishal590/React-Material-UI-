import React from 'react'
import { makeStyles,Card,CardActionArea,CardMedia,CardContent,Typography, CardActions, Button } from '@material-ui/core';
import Pizza from '../assets/pizza.jpg'


const useStyles=makeStyles((theme)=>({
    media:{
        height:'300px',
        [theme.breakpoints.down("sm")]:{
            height:'150px',
        },
    },
    card:{
        marginBottom:theme.spacing(5),
    },

}));

const Post = () => {
    const classes=useStyles();
     
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={Pizza} title="my post"/>
                    <CardContent>
                        <Typography gutterButtom variant="h5">first post</Typography>
                        <Typography variant="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                    <Button size="small" color="primary">Share</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post
