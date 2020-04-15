import React, { Component } from 'react';  
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Blog extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
		  title : '',
		  content : '',
		  blog    : [] 
      }  
   }  
	

	updateSubmit = (event) => {  
		let tempBlog = this.state.blog;
		tempBlog.push ({
			title : this.state.title,
			content : this.state.content
		})
		this.setState({blog: tempBlog})
		console.log("blog",this.state.blog)
		event.preventDefault();  
	}  

	handleChange = (event) => {
    this.setState({title: event.target.value});
  }

	 handleContent = (event) => {
      this.setState({content: event.target.value});
    }
	

   render() {  
	   const listBlog = this.state.blog.map(( item, i ) =>{ 
		   return(
			   <div>
				   <h2>Title of the Blog : {item.title}</h2>
		   <li key = {i}>  {item.content} </li>
	   </div>
			   )
			   }
			)
      return (  
         <div >  
			<h1> My Blog </h1>	
			  <TextField
				  id="standard-full-width"
				  label="Title of the Blog"
				  style={{ margin: 8 }}
				  placeholder="Placeholder"
				  helperText="Enter title of the blog"
				  fullWidth
				  margin="normal"
				  onChange={this.handleChange}
				  InputLabelProps={{
				  shrink: true,
				  }}
			  />
				<TextField
                    id="standard-full-width"
                    label="About blog"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Enter the content of the blog"
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
			  <h1> List of Blog </h1>
		<div>
			<ul>{listBlog}</ul>
		</div>
         </div>  
      );  
   }  
}  
export default Blog;  
