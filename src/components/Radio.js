import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default function RadioButtonsGroup(props) {
  
   const{value,control,label}=props
  return (
    <FormControl component="fieldset">
      
      <RadioGroup aria-label="gender" name="gender1" value={value} >
        
        <FormControlLabel value={value} control={control} label={label} />
        
        
        </RadioGroup>
        </FormControl>
  );
}
