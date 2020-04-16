import React, { Component } from 'react';  
import { Route, } from 'react-router-dom';
import login from '../component/login';

class Home extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
		  username : '',
		  passowrd : '',
      }  
   }  


   render() {  
      return (  
         <div align="center" style={{backgroundColor: "red"}} >  
              <Route
                  path="/employee"
                  render={() =>
                   <login/>}
              />
         </div>  
      );  
   }  
}  
export default Home;  
