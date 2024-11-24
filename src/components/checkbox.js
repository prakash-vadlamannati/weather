import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
        <div>
            Check BoX
        </div>
        
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <lable>MBA</lable>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        
      />
      <lable>MCA</lable>
      
      
      <Checkbox
        defaultChecked
        inputProps={{ 'aria-label': 'checkbox' }}
      />
      <lable>Phd</lable>
      
      
    </div>
  );
}
