import React, {Component} from "react";
import uniqid from "uniqid";

class WorkExperienceForm extends Component{

	constructor(props){
		super(props);
	}

	remove_linebreaks(str){
		return str.replace( /[\r\n]+/gm, "" );
	}

	sendFormData(){
		const company_name_input = document.querySelector("#company-name-input").value;
		const company_city_input = document.querySelector("#company-city-input").value;
		const company_from_date_input = document.querySelector("#company-from-date-input").value;
		const company_to_date_input = document.querySelector("#company-to-date-input").value;
		const company_role_input = document.querySelector("#company-role-input").value;
		const company_role_description_input = document.querySelector("#company-role-description-input").value;

		let nolinebreaks = this.remove_linebreaks(company_role_description_input).split('\u2022');
		let company_role_description_array = nolinebreaks.filter(bulletpoint=>bulletpoint !== "");
		let company_role_description_obj = {};
		company_role_description_array.forEach((bulletpoint)=>{
			company_role_description_obj[uniqid()] = bulletpoint;
		});

		console.log(company_role_description_obj);

		this.props.recordWorkExperience({
			company_name_input,
			company_city_input,
			company_from_date_input,
			company_to_date_input,
			company_role_input,
			company_role_description_obj,
		})
	}

	addBulletPoint(e){
		const company_role_description_input = document.querySelector("#company-role-description-input");
		console.log(e);
		if(e.key=="Enter")
		{
			e.preventDefault();
			if(!company_role_description_input.value.includes('\u2022'))
			{
				company_role_description_input.value = company_role_description_input.value + '\u2022';
			}
			else{
				company_role_description_input.value = company_role_description_input.value +'\n' + '\u2022';
			}
			
		}
	}

	render(){
		return (
			<div className="workExperienceForm">  
				<div className="formGroup">
	              <label>Company Name</label>
	              <input id="company-name-input"type="text" placeholder="Company Name"/>
	              <label>City</label>
	              <input id="company-city-input" type="text" placeholder="City"/>
	              <div className="date-range">
	                <label className="label-from-date">From</label>
	                <label className="label-to-date">To</label>
	                <input id="company-from-date-input"className="from-date" type="text" placeholder="Month, YYYY"/>
	                <input id="company-to-date-input"className="to-date" type="text" placeholder="Month, YYYY or Present"/>
	              </div>
	              <label>Role</label>
	              <input id="company-role-input"type="text" placeholder="Role"/>
	              <label>Description</label>
	              <textarea id="company-role-description-input" onKeyDown={(e)=>this.addBulletPoint(e)} placeholder="Press Enter to add bullet points"/>
	            </div>
	            <button id="submit-work-experience"className="submit" onClick={()=>this.sendFormData()}>Submit</button>
	            <button id="cancel-work-experience"className="cancel" onClick={()=>this.props.removeWorkExperienceForm()}>Cancel</button>
	        </div>
	    );
	}	

};
export default WorkExperienceForm