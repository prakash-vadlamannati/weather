import React from "react";
import BaseFunction from "./register";
class BaseClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            first:'',
            last:"",
            

        }
        this.handleNameChange = this.handleNameChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
           
    }
    handleNameChange=(event)=>
        {
           this.setState({first:event.target.value});


        }
        handleNameChange1=(event)=>
            {
               this.setState({last:event.target.value});
    
    
            }

        handleSubmit(event) {
            event.preventDefault();
            const { first,last } = this.state;
            alert(`First Name: ${first}\nlastName: ${last}\nyour application is submited`);
          }
    render ()
    {
        return (
            <div className="App">
            <div>
            <label>
              First Name:
              </label>
              
                
              <input type="text" value={this.state.name} onChange={this.handleNameChange}></input> 
              </div>
              <div>
            <label>
              last Name:
              </label>
              
                
              <input type="text" value={this.state.name} onChange={this.handleNameChange1}></input> 
              </div>

              <label for="age">Age:</label>
                <input type="number" id="age" name="age"></input>
            
                <div>
                <label>Gender:</label>
                <input type="radio" id="male"></input>
                <label for="male">Male</label>
                <input type="radio" id="female"></input>
                <label for="female">Female</label>
            </div>
              
            <div >
                <label>Courses:</label>
                <input type="checkbox" id="course1" name="course1" value="Mba"></input>
                <label for="course1">Mba</label>
                <input type="checkbox" id="course2" name="course2" value="Mca"></input>
                <label for="course2">Mca</label>
                <input type="checkbox" id="course3" name="course3" value="Phd"></input>
                <label for="course3">Phd</label>
                <div id="courseError" class="error"></div>
            </div>
              
              
             
             
             
             
             <button type="submit" onClick={this.handleSubmit}>submit</button>
            </div>
        )
    }
}
