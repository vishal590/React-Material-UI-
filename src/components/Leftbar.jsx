import React from 'react'
import { makeStyles,Container,Typography } from '@material-ui/core';
import { Bookmark, ExitToApp, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac, Home, Person, List } from '@material-ui/icons';
// import { CleaningServices } from '@mui/icons-material';
// import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
        backgroundColor:theme.palette.primary.main,
        height:'100vh',
        color:'white',
        position:'sticky',
        top:'0',
        [theme.breakpoints.up("sm")]:{
            color:'#ff4500',
        },
    },
    item:{
        display:'flex',
        alignItems:'center',
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom:theme.spacing(3),
            cursor:'pointer',
        },
    },
    icon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize:'18px',
            color:'white',
        },
        
    },
    text:{
        fontWeight:'500',
        [theme.breakpoints.down("sm")]:{
            display:'none',
        },
        color:'white',
    }
}));

const Leftbar = () => {
    const classes= useStyles();
    
    return (
        <Container className={classes.container}>    
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>User</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon}/>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>List</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>Bookmark</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
