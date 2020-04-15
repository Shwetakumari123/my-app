import React, { Component } from 'react';  
import { Route, } from 'react-router-dom';
import Blog from '../component/blog';
import login from '../component/login';
import Twitter from '../component/twitter';

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
                   path="/blog"
                   render={() =>
               <Blog/>}
               />
              <Route
                  path="/login"
                  render={() =>
                   <login/>}
              />
              <Route
                  path="/twitter"
                  render={() =>
              <Twitter/>}
                />
         </div>  
      );  
   }  
}  
export default Home;  
