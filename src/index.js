import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import App from './App';
import Blog    from './component/blog';
import Login   from './component/login';
import Twitter from './component/twitter';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



import * as serviceWorker from './serviceWorker';
const routs = (
   < BrowserRouter >
      <div align="center">
         <ul style = {{listStyleType: "none", overflow: "hidden",  backgroundColor: "black"}}>
            <li style = {{float: "left", padding : 20, display: "block"}} >
               <Link to="/blog" style = {{ color : "white", fontSize : 25, textDecoration: "none"}}>Blog</Link>
            </li>
			<li style = {{float: "left" , padding : 20  }}>
               <Link style = {{ color : "white", fontSize : 25, textDecoration: "none"}} to="/login">Login</Link>
            </li>	
			<li style = {{float: "left", padding : 20}}>
               <Link  style = {{ color : "white", fontSize : 25, textDecoration: "none"}} to="/twitter">Twitter and LinkedIn</Link>
            </li>	
         </ul>
         <Route exact path="/"  component={App} />
         <Route path="/blog"    component={Blog} />
		 <Route path="/login"   component={Login} />			 
         <Route path="/twitter" component={Twitter} />
      </div>
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'))
serviceWorker.unregister();
