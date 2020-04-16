import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import App from './App';
import Login   from './component/login';



import * as serviceWorker from './serviceWorker';
const routs = (
   < BrowserRouter >
      <div align="center">
         <ul style = {{listStyleType: "none", overflow: "hidden",  backgroundColor: "White"}}>
			<li style = {{float: "center" , padding : 20  }}>
               <Link style = {{ color : "white", fontSize : 25,fontWeight : 'bold', textDecoration: "none",backgroundColor : '#005cb9', padding : 10}} to="/employee">New Hiring Details</Link>
            </li>	
         </ul>
         <Route exact path="/"  component={App} />
		 <Route path="/employee"   component={Login} />			 
      </div>
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'))
serviceWorker.unregister();
