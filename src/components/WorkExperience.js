import React, {Component} from "react";

class WorkExperience extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return (
			<div id="work-exp-1" className="work-experience">
	          <div className="row">
	          	<div id="company-1" className="company">{this.props.formObj.company_name_input}, {this.props.formObj.company_city_input}</div>
	          	<div className="display-company-date-range">{this.props.formObj.company_from_date_input}-{this.props.formObj.company_to_date_input}</div>
	          </div>
	          <div className="role">{this.props.formObj.company_role_input}</div>
	          <div className="work-description">
	            <ul>
	            	{this.props.formObj.company_role_description_array.map(bulletpoint=>{
	            		return <li>{bulletpoint}</li>
	            	})}
	      
	            </ul>
	          </div>
	        </div>
	    );
	}	

};
export default WorkExperience