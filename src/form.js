import React from 'react'; 
import Radio1 from './components/Radio'
import BasicTextFields from './components/textfield'
import RadioButtonsGroup from './components/Radio'
import Checkboxes from './components/checkbox'
import ContainedButtons from './components/button';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';







export default function Form(props){

return(
     <div>
      <BasicTextFields id="standard-basic" label="First Name"/>
      <BasicTextFields id="standard-basic" label="Last Name"/>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioButtonsGroup value="other" control={<Radio />} label="Male" checked/>
      <RadioButtonsGroup value="other" control={<Radio />} label="Female"/>
      <RadioButtonsGroup value="other" control={<Radio />} label="Other"/>
      <Checkboxes/>
      <div>
      <ContainedButtons variant="contained" color="secondary"/>
      </div>
      













     </div>



)



}