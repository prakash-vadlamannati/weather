import React, { useEffect, useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Popover from '@material-ui/core/Popover';




export default function BaseFunction(props) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});





  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      typography: {
        padding: theme.spacing(2),
      },
    }),
  );




  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;














  const handleNameChange = (event) => {
    setFirst(event.target.value);
  };

  const handleNameChange1 = (event) => {
    setLast(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };







  const number = useRef(null);
  const handlebutton = () => {

    alert('number is' + number.current.value)
  }



















  console.log(Boolean(first))
  const validate = () => {
    let errors = {};

    if (!first) {
      errors.first = "Please enter first name";
    } else if (first.length < 1 || first.length > 20) {
      errors.first = "First name must be between 1 and 20 characters";
    }

    if (!last) {
      errors.last = "Please enter last name";
    } else if (last.length < 1 || last.length > 20) {
      errors.last = "Last name must be between 1 and 20 characters";
    }

    if (!age) {
      errors.age = "Please enter age";
    } else if (age < 20 || age > 40) {
      errors.age = "Age must be between 20 and 40";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert(`First Name: ${first}\nLast Name: ${last}\nAge: ${age}\nYour application is submitted`);
    } else {
      setErrors(validationErrors);
    }
  };
  useEffect(() => console.log("clicked"), [last])
  const classes = useStyles();
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>








          <div>
            <input type="text" ref={number}></input>
            <button type="submit" onClick={handlebutton}>clickme</button>
          </div>



















          <div>


          </div>







          <label>
            First Name:
            <input type="text" value={first} onChange={handleNameChange} />
          </label>
          {errors.first && <p style={{ color: 'red' }}>{errors.first}</p>}
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" value={last} onChange={handleNameChange1} />
          </label>
          {errors.last && <p style={{ color: 'red' }}>{errors.last}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={age} onChange={handleAgeChange} />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>
        <div>
          <label>Gender:</label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label>Courses:</label>
          <input type="checkbox" id="course1" name="course1" value="Mba" />
          <label htmlFor="course1">Mba</label>
          <input type="checkbox" id="course2" name="course2" value="Mca" />
          <label htmlFor="course2">Mca</label>
          <input type="checkbox" id="course3" name="course3" value="Phd" />
          <label htmlFor="course3">Phd</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>


        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        <div>
          <Accordion>
            <AccordionSummary

            >
              <Typography >Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
            >
              <Typography >Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
          <div>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Checkbox
              defaultChecked
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form>





        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
          </RadioGroup>
        </FormControl>



      </div>

    </div>
  );
};

