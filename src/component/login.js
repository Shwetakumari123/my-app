import React, { Component } from 'react';  
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import EmployeeTable from './employeeTable';

class Login extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
		  name     : '',
		  eId      : '',
		  department : '',
		  email    : '',
		  Doj      : '',
		  userErr  : false,
		  eIdErr   : false,
		  departmentErr : false,
		  emailErr : false,
		  DojErr   : false,
		  employee : [],
		  renderTable : false
      }  
   }  


	OnChangeName = (event) => {
      this.setState({name: event.target.value});
    }
    OnChangeEId = (event) => {
        this.setState({eId: event.target.value});
	}
	OnChangeDepartment = (event) => {
          this.setState({department: event.target.value});
	}
	OnChangemail = (event) => {
          this.setState({email: event.target.value});
	}
	OnChangeDoj = (event) => {
          this.setState({Doj: event.target.value});
      }


	updateSubmit = (event) => { 
			if(!this.state.name){
				this.setState({ userErr : true })} 
			else
				this.setState({ userErr : false })


			if(!this.state.eId){
				this.setState({ eIdErr : true })}
			else 
				this.setState({ eIdErr : false })

			if(!this.state.department){
				this.setState({ departmentErr : true })}
			else
				this.setState({ departmentErr : false })

			if(!this.state.email){
				this.setState({ emailErr : true })}
			else
				this.setState({ emailErr : false })

			if(!this.state.Doj){
              this.setState({ DojErr : true })}
			else
			this.setState({ DojErr : false })

		if(this.state.name && this.state.eId && this.state.department && this.state.email && this.state.Doj){
			this.setState({renderTable : true}) 	

		let tempEmployee = this.state.employee;
		tempEmployee.push ({
			name : this.state.name,
			eId  : this.state.eId,
			department : this.state.department,
			email : this.state.email,
			Doj   : this.state.Doj

		})
			this.setState({employee: tempEmployee})
		}

			console.log(this.state.Doj, this.state.department, this.state.employee, this.state.renderTable)
	}

	submitClear = () => {
		console.log("oooooooooo")
		this.setState({
			name : '',
			eId  : '',
			department: '',
			email : '',
			Doj : '',
		})
	}

	renderTableView = () => {
			if (this.state.renderTable === true){
			return(
				<EmployeeTable
				data = {this.state.employee}/>
					)}
	}	

   render() {  
      return (  
		  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',flexDirection : "column", backgroundColor : "white",}}>  
			  <h2> Please fill the details  </h2>
			  <TextField
				  error = {this.state.userErr}
				  label="Name" 
				  id="1"
				  value = {this.state.name}
				  style={{ margin: 8,width : 500 }}
				  placeholder="Name"
				  margin="normal"
				  onChange={this.OnChangeName}
				  InputLabelProps={{
				  shrink: true,
				  }}
			  />
			<TextField
				error = {this.state.eIdErr}
				id="2"
				label="Employee ID"
				value = {this.state.eId}
				style={{ margin: 8, width : 500 }}
				placeholder="Employee ID"
				margin="normal"
				onChange={this.OnChangeEId}
				InputLabelProps={{
				shrink: true,
				}}
			/>
			<TextField
				error = {this.state.departmentErr}
                  id="select"
                  label="Department"
                  value= {this.state.department}
				  onChange = { this.OnChangeDepartment}	
                  style = {{ margin : 8, width : 500}}
                  select>
                  <MenuItem value= "Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Electrical">Electrical</MenuItem>
				  <MenuItem value="Mechanical">Mechanical</MenuItem>
                  <MenuItem value="Civil">Civil</MenuItem>	  
				  <MenuItem value="Mettalurgy">Mettalurgy</MenuItem>
            </TextField>		
			<TextField
				error = {this.state.emailErr}
				id="3"
				value = {this.state.email}
				label="E-mail"
				style={{ margin: 8, width : 500 }}
				placeholder="E-mail"
				margin="normal"
				onChange={this.OnChangemail}
				InputLabelProps={{
				shrink: true,
				}}
			/>	  
			<TextField
				error = {this.state.DojErr}
				id="datetime-local"
				label="Date of joining"
				type="date"
				value = {this.state.Doj}
				margin="normal"
				style = {{ margin : 8, width : 500}}
				onChange = {this.OnChangeDoj}
				InputLabelProps={{
				shrink: true,
				}}
			/>		
			<br/>
			<div style = {{ padding : 20}}>
			<Button type="submit" variant="contained" style = {{ width : 300}}color="primary" onClick = {this.updateSubmit}>
					Submit
			</Button>
		</div>
		<div style = {{ paddingTop : 5, paddingBottom : 10}}>
			<Button type="submit" variant="contained" style = {{ width : 300}} color="primary" onClick = {this.submitClear}>
                      Clear
              </Button>	
		  </div>
			  {this.renderTableView()}
			  
		</div>  
      );  
   }  
}  
export default Login;  
