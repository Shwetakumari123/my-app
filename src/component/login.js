import React, { Component } from 'react';  
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
		  username : '',
		  passowrd : '',
      }  
   }  

	handleChange = (event) => {
      this.setState({username: event.target.value});
    }

       handleContent = (event) => {
        this.setState({passowrd: event.target.value});
      }
		updateSubmit = (event) => { 
		return(
			alert( "your username is" + this.state.username)
		)}
   render() {  
      return (  
         <div>  
			 <h1> Login screen </h1>
				 <TextField
                    id="standard-full-width"
                    label="Enter your username"
                    style={{ margin: 8 }}
                    placeholder="username"
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                  <TextField
                      id="standard-full-width"
                      label="Enter password"
                      style={{ margin: 8 }}
                      placeholder="Password"
                      fullWidth
                      margin="normal"
                      onChange={this.handleContent}
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
                <br/>
                <Button type="submit" variant="contained" color="primary" onClick = {this.updateSubmit}>
                        Submit
                </Button>
         </div>  
      );  
   }  
}  
export default Login;  
