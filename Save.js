import React from 'react';
import {TextField,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      marginTop:'2rem'
    },
  }));

const Save = (props) => {
    let {home,a,b,c,justChange,doUpdate,doSave} = props  

    const classes = useStyles();

    return (
        <div>
        <TextField className={classes.root}
          label="UserID"
          value={a}
          onChange={justChange}
          name='id'
          disabled={!doUpdate}
          
        />
        <TextField className={classes.root}
          label="Username"
          value={b}
          onChange={justChange}
          name='name'
        />
        <TextField className={classes.root}
          label="User's Description"
          multiline
          row={3}
          value={c}
          onChange={justChange}
          name='description'
        />
        <Typography className={classes.root}>
            <Button onClick={doSave} style={{marginRight:'1rem'}} variant="contained" color="primary">Save</Button>
            <Button onClick={home} variant="contained" color="secondary">Go To Home</Button>
        </Typography>
        </div>
    );
}

export default Save;
