import React, {Component} from "react";

class EducationForm extends Component{

	constructor(props){
		super(props);

		//this.sendFormData=this.sendFormData.bind(this);
	}

	sendFormData(){
		const school_input = document.querySelector("#school-input").value;
		const school_from_date = document.querySelector("#school-from-date").value;
		const school_to_date = document.querySelector("#school-to-date").value;
		const school_degree_input = document.querySelector("#school-degree-input").value;

		this.props.recordEducation({
			school_input,
			school_from_date,
			school_to_date,
			school_degree_input,
		});
	}


	render(){
		console.log(this.props);
		return (
			<div className="educationForm">  
				<div className="formGroup">
	              <label>University or School Name</label>
	              <input id = "school-input" type="text" placeholder="University or School Name"/>
	              <div className="date-range">
	                <label className="label-from-date">From</label>
	                <label className="label-to-date">To</label>
	                <input id ="school-from-date"className="from-date" type="text" placeholder="YYYY"/>
	                <input id="school-to-date" className="to-date" type="text" placeholder="YYYY or Present"/>
	              </div>
	              <label>Degree</label>
	              <input id="school-degree-input" type="text" placeholder="Degree"/>
	            </div>
	            <button id="submit-education"className="submit" onClick={()=>this.sendFormData()}>Submit</button>
	            <button id="cancel-education"className="cancel" onClick={()=>this.props.removeEducationForm()}>Cancel</button>
	        </div>
	    );
	}	

};
export default EducationForm