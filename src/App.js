import React from 'react';
import './App.css';
import { Grid, makeStyles } from '@material-ui/core';
import {Navbar, Leftbar, Feed, Rightbar,Adds} from './components';


const useStyles= makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:'none',
    }
  }
}));

function App() {
  const classes=useStyles();
  return (
    <div>
      <Navbar/>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Leftbar/>
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed/>
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <Rightbar/>
                    {/* <Adds/> */}
                </Grid>
            </Grid>
    </div>
  );
}

export default App;
