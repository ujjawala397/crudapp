import React from 'react';
import {useSelector} from 'react-redux';

import {Grid,CircularProgress} from '@material-ui/core';

import Post from './post/post';
import useStyles from './posts.styles';
 

const Posts=({setCurrId})=> {
    const classes=useStyles();
    const posts =useSelector((state)=> state.posts)
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrId={setCurrId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;