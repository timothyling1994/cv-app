import React, {Component} from "react";
import EditForm from "./EditForm.js";
import uniqid from "uniqid";

class WorkExperience extends Component{

	constructor(props){
		super(props);


		let bulletPointKeysArr = Object.keys(this.props.formObj.company_role_description_obj);
		let bulletPointKeysObj = bulletPointKeysArr.map((bulletPointKey)=>{
			return {[bulletPointKey]:false};
		});

		console.log("bulletPointKeysObj:"+bulletPointKeysObj);

		this.state={
			editCompany:false,
			editCity:false,
			editFromDate:false,
			editToDate:false,
			editRole:false,
			editDescription:bulletPointKeysObj,
		};



		this.setEditStateTrue = this.setEditStateTrue.bind(this);
		this.setEditStateFalse = this.setEditStateFalse.bind(this);
	}

	setEditStateTrue(event,keyName, optional){
		let bulletPointKey = optional;

		//console.log("setEditStateTrue:"+bulletPointKey);

		event.target.style.display="none";
		const target_parent = event.target.parentElement;

		if(bulletPointKey == undefined)
		{
			this.setState({
				[keyName]:true,
			});
		}
		else
		{
			this.setState({
				[keyName]:{
					[bulletPointKey]:true,
				},
			});
		}
	}

	setEditStateFalse(keyName,optional){
		let bulletPointKey = optional;

		if(bulletPointKey != undefined)
		{
			this.setState({
				[keyName]:true,
			});
		}
		else
		{
			this.setState({
				[keyName]:{
					[bulletPointKey]:true,
				},
			});
		}
	}

	render(){

		return (
			<div id="work-exp-1" className="work-experience">
	          <div className="row">
	          	<div id="company-1" className="company">
	          	{(this.state.editCompany) ? <EditForm id={this.props.id} stateKey="recordWorkExperience" formObjKey="company_name_input" setEditStateFalse={()=>this.setEditStateFalse("editCompany")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.company_name_input}/> : <div id={this.props.id} onClick={(e)=>this.setEditStateTrue(e,"editCompany")}>{this.props.formObj.company_name_input}</div>}, {(this.state.editCity) ? <EditForm id={this.props.id} stateKey="recordWorkExperience" formObjKey="company_city_input" setEditStateFalse={()=>this.setEditStateFalse("editCity")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.company_city_input}/> : <div id={this.props.id} onClick={(e)=>this.setEditStateTrue(e,"editCity")}>{this.props.formObj.company_city_input}</div>}
	          	</div>
	          	<div className="display-company-date-range">
	          	{(this.state.editFromDate) ? <EditForm id={this.props.id} stateKey="recordWorkExperience" formObjKey="company_from_date_input" setEditStateFalse={()=>this.setEditStateFalse("editFromDate")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.company_from_date_input}/> : <div onClick={(e)=>this.setEditStateTrue(e,"editFromDate")}>{this.props.formObj.company_from_date_input}</div>} - {(this.state.editToDate) ? <EditForm id={this.props.id} stateKey="recordWorkExperience" formObjKey="company_to_date_input" setEditStateFalse={()=>this.setEditStateFalse("editToDate")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.company_to_date_input}/> : <div onClick={(e)=>this.setEditStateTrue(e,"editToDate")}>{this.props.formObj.company_to_date_input}</div>}
	          	</div>
	          </div>
	          <div className="role">
	          {(this.state.editRole) ? <EditForm id={this.props.id} stateKey="recordWorkExperience" formObjKey="company_role_input" setEditStateFalse={()=>this.setEditStateFalse("editRole")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.company_role_input}/> : <div id={this.props.id} onClick={(e)=>this.setEditStateTrue(e,"editRole")}>{this.props.formObj.company_role_input}</div>}
	          </div>
	          <div className="work-description">
	            <ul id={this.props.id}>
	            	{Object.keys(this.props.formObj.company_role_description_obj).map((bulletPointKey)=>{
	            		//console.log(this.props.formObj.company_role_description_obj[bulletPointKey]);
	            		//return <li>{this.props.formObj.company_role_description_obj[bulletPointKey]}</li>
	            		return (this.state.editDescription[bulletPointKey]) ? <EditForm id={this.props.id} key={bulletPointKey} bulletpointKey={bulletPointKey} stateKey="recordWorkExperience" formObjKey="company_role_description_obj" setEditStateFalse={()=>this.setEditStateFalse("editDescription",bulletPointKey)} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.company_role_description_obj[bulletPointKey]}/> : <li key={bulletPointKey} onClick={(e)=>this.setEditStateTrue(e,"editDescription",bulletPointKey)}>{this.props.formObj.company_role_description_obj[bulletPointKey]}</li>
	            	})}
	            </ul>
	          </div>
	        </div>
	    );
	}	

};
export default WorkExperience