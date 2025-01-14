import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  const{variant,color}=props;

  return (
    <div className={classes.root}>
      <Button variant={variant} color={color}>Button</Button>
    
      
      
    </div>
  );
}
