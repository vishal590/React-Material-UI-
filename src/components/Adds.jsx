import React, {useState} from 'react'
import {
    makeStyles,
    Fab,
    Tooltip, 
    Container, 
    Modal, 
    TextField, 
    MenuItem, 
    Radio,
    FormControlLabel,
    RadioGroup,
    Button,
    FormLabel,
    Snackbar } from '@material-ui/core';
import {Add} from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert'


const useStyles=makeStyles((theme)=>({
    fab:{
        position:'fixed',
        bottom:'20px',
        right:'20px',
    },
    container:{
        width:'500px',
        height:'500px',
        backgroundColor:'white',
        position:'absolute',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0',
        margin:'auto',
        [theme.breakpoits.down("sm")]:{
            width:'100vw',
            height:'100vh',
        },
        
    },
    form:{
        padding:theme.spacing(2),
    },
    item:{
        marginBottom:theme.spacing(3),
    }
}));

function Alert(props){
    return <MuiAlert elavation={6} variant="filled" {...props} />
}

const Adds = () => {
    const classes=useStyles();
    const [open, setOpen]=useState(false);
    const [openAlert, setOpenAlert]=useState(false);


    const handleClose=(event, reason)=>{
        if(reason==='clickaway'){
            return;
        }
        setOpenAlert(false);
    };

    return (
        <>
          <Tooltip title="Add" area-label="add">
            <Fab color="secondary" className={classes.fab}>
                <Add/>
            </Fab>  
          </Tooltip>  
          <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField 
                        id="standard-basic"
                        label="Title"
                        size="small"
                        style={{width:"100%"}}
                         />
                    </div>
                    <div className={classes.item}>
                        <TextField 
                        id="outline-multiline-static"
                        multiline
                        rows={4}
                        defaultValue="Your story"
                        label="Description"
                        size="small"
                        style={{width:"100%"}}
                         />
                    </div>  
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Public">
                            <MenuItem value="Public"></MenuItem>
                            <MenuItem value="Private"></MenuItem>
                            <MenuItem value="Unlisted"></MenuItem>
                        </TextField>
                    </div> 
                    <div className={classes.item}>
                    <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup>
                            <FormControlLabel 
                            value="Everyone"
                            control={<Radio/>}
                            label="Everyone"
                            />
                            <FormControlLabel 
                            value="Friends" 
                            control={<Radio/>} 
                            label="Friends"
                            />
                            <FormControlLabel
                            value="Specific Friends" 
                            control={<Radio/>} 
                            label="Specific Friends"
                            />
                            <FormControlLabel 
                            value="disabled" 
                            control={<Radio/>} 
                            label="(Disabled option)"
                            />
                        </RadioGroup>
                    </div>  
                    <div className={classes.item}>
                        <Button variant="outline" color="secondary" style={{marginRight:"20px"}} onClick={()=>setOpenAlert(true)}></Button>
                        <Button variant="outline" color="secondary" onClick={()=>setOpen(false)}></Button>
                    </div>               
                </form>
            </Container>
          </Modal>
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
          >
        
          </Snackbar>
        </>
    )
}

export default Adds
