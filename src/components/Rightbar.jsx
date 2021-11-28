import React from 'react'
import { makeStyles, Container,Typography } from '@material-ui/core';
import {AvatarGroup} from '@material-ui/lab';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
        position:'sticky',
        top:'0',
    },
    title:{
        fontSize:'16',
        fontWeight:'500',
        color:'blue',
        marginTop:'40px',
    }
}));

const Rightbar = () => {
    const classes=useStyles();

    return (
        <Container className={classes.container} >
            <Typography>Gallery</Typography>
            <ImageList  cols={3} rowHeight={160}>
                <ImageListItem>
                <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2" alt=""/>
                </ImageListItem>
                <ImageListItem>
                <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2" alt=""/>
                </ImageListItem>
                <ImageListItem>
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2" alt=""/>
                </ImageListItem>
                <ImageListItem>
                <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2" alt=""/>
                </ImageListItem>
                <ImageListItem>
                <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format&dpr=2" alt=""/>
                </ImageListItem>
                <ImageListItem>
                <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2" alt=""/>
                </ImageListItem>
            </ImageList>

            <Typography className={classes.title}>Online</Typography>
            <AvatarGroup max={4} >
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
            </AvatarGroup>
        </Container>
    )
}

export default Rightbar
