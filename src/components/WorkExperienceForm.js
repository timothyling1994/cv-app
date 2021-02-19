import React, {Component} from "react";
import uniqid from "uniqid";

class WorkExperienceForm extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="workExperienceForm" key={uniqid()}>  
				<div className="formGroup">
	              <label>Company Name</label>
	              <input type="text" placeholder="Company Name"/>
	              <label>City</label>
	              <input type="text" placeholder="City"/>
	              <div className="date-range">
	                <label className="label-from-date">From</label>
	                <label className="label-to-date">To</label>
	                <input className="from-date" type="text" placeholder="YYYY"/>
	                <input className="to-date" type="text" placeholder="YYYY or Present"/>
	              </div>
	              <label>Role</label>
	              <input type="text" placeholder="Role"/>
	              <label>Description</label>
	              <input type="textarea" placeholder=""/>
	            </div>
	        </div>
	    );
	}	

};
export default WorkExperienceForm