import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion,AccordionSummary,AccordionDetails,Typography,Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'2rem'
    },
    spaceTop:{
      marginTop:'1rem'
  },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Card = (props) => {

    let {name,description,del,edit} = props  
    const classes = useStyles();
    return (
    <div className={classes.root}>
            <Accordion className={classes.spaceTop}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography  align='right'  style={{width:'100%'}}>
            <Button onClick={edit} color='primary'>Edit</Button>
            <Button onClick={del} color='secondary'>Delete</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
     </div>
    );
}

export default Card;
