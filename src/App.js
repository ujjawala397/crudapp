import React, {useState, useEffect } from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';
import Form from './components/form/form';
import Posts from './components/posts/posts';
import memories from './images/1.png';

import useStyles from './styles';

const App = () =>{
    const [currId,setCurrId]=useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPosts());
    },[currId,dispatch]);

    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position ="static" color="inherit">
                <Typography className={classes.heading  } variant = "h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt= "memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify = "space-between" alignItems = "stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrId={setCurrId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currId={currId} setCurrId={setCurrId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        )
}

export default App;