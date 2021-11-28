import React, {useState} from 'react'
import { InputBase, makeStyles, Typography,AppBar,alpha, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToolBar from '@material-ui/core/ToolBar';
import {Search, Cancel} from '@material-ui/icons';
import Mail from '@material-ui/icons/Mail';
// import Notification
import { Avatar } from '@mui/material';

const useStyles = makeStyles((theme)=>({
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
    },    
    logolg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display:"block",
        },
    },
    logosm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        }
    },
    search:{
        display:'flex',
        alignItems:'center',
        backgroundColor:alpha(theme.palette.common.white,0.15),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white,0.25),
        },
        borderRadius:theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]:{
            display: (props)=>props.open ? 'flex' : 'none',
            width:'70%',
        },
        marginLeft:'10px',     
    },
    input:{
        color:'white',
        marginLeft:theme.spacing(2),
    }, 
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:'none',
        }
    },
    icons:{
        alignItems:'center',
        display: (props)=>props.open ? 'none' : 'flex',
    },
    badge:{
        marginRight:theme.spacing(2),
    },
    searchButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            display:'none',
        },
    }
}));

const Navbar = () => {
    const [open, setOpen]= useState(false);

    const classes = useStyles({open});

    return (
        <div>
            <AppBar position="fixed">
                <ToolBar className={classes.toolbar}>
                   <Typography variant="h6" className={classes.logolg}>
                    Material UI   
                    </Typography>
                    <Typography variant="h6" className={classes.logosm}>
                    UI   
                    </Typography>
                    <div className={classes.search}>
                        <Search/>
                        <InputBase placeholder="Search..." className={classes.input}/>    
                        <Cancel className={classes.cancel} onClick={()=>setOpen(false)}></Cancel>
                    </div>  
                    <div className={classes.icons}>
                        <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail/>
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <ShoppingCartIcon />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="static/images/avatar/1.jpg" />
                    </div>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar
