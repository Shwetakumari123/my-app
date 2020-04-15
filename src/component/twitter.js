import React, { Component } from 'react';  
  import Button from '@material-ui/core/Button';
class Twitter extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
		  username : '',
		  passowrd : '',
      }  
   }  

	updateSubmit = (event) => {  
		alert('You have entered the UserName and CompanyName successfully.');  
		event.preventDefault();  
	}  
	 Redirect = () => {
               window.location = "https://twitter.com/";
            }

	RedirectLinkedIn = () => {
                 window.location = "https://www.linkedin.com";
              }
   render() {  
      return (  
         <div>  
			 <h1> This page is just for redirecting to Twitter and LinkedIn</h1>
			 <div>
			 <Button type="submit" variant="contained" color="primary" style = {{padding : 10, width : 400}} onClick = {() => this.Redirect()}>
                        Twitter
                </Button>
			</div>
				<br/>
				<div>
				<Button type="submit" variant="contained" color="primary" style = {{padding : 10, width : 400}} onClick = {() => this.RedirectLinkedIn()}>
                          LinkedIn
                  </Button>	
			  </div>
         </div>  
      );  
   }  
}  
export default Twitter;  
