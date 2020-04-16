import React from 'react';
import Icon from '@material-ui/core/Icon';
import MaterialTable from 'material-table';
import {tableIcons}    from './tableIcon'
import { forwardRef } from 'react';

class EmployeeTable extends React.Component {
	constructor() {
        super();
		this.state = {
			table : false,
			data1 : []
		}
	}
	componentDidMount = () => {
	this.setState({data1 : this.props.data})} 

 render () {
	 return (
	 <div>
	 <h1> New Hiring Details </h1>
     <MaterialTable
	 icons = {tableIcons}	
     title="Employee details"
     columns={[
        { title: 'Name', field: 'name' },
        { title: 'Employee ID', field: 'eId' },
        { title: 'Department', field: 'department' },
        { title: 'Email Id',field: 'email'},
        { title: 'Date of Joining(DOJ)',field: 'Doj'},
      ]}

	 data = {this.state.data1}	

	actions={[
        rowData => ({
          icon: tableIcons.Delete,
          tooltip: 'Delete User',
		  onClick: (event, rowData) =>  {
			console.log(rowData)
			window.confirm("Are you sure to delete" + " " + rowData.name)
			this.state.data1.splice(this.state.data1.indexOf(rowData), 1)
			this.setState({table : true})
		}
        } )
		]}	
	options={{
        actionsColumnIndex: -1
      }}	
	/>
	</div>
 );
}
}
export default EmployeeTable
