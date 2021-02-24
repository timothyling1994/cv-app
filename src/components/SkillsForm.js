import React, {Component} from "react";

class SkillsForm extends Component{

	constructor(props){
		super(props);
	}

	sendFormData(e){
		if(e.key=="Enter" || e == "Click")
		{
			let skill_input = document.querySelector("#skill-input");
			console.log(skill_input.value);
			this.props.recordSkills({
				skill_input:skill_input.value,
			});

			skill_input.value="";
		}
	}

	render(){
		return (
			<div className="skillsForm"> 
				<div className="formGroup">
	              <input id="skill-input"type="text" onKeyDown={(e)=>this.sendFormData(e)} placeholder="Share your top skills"/>
	            </div>
	            <button id="submit-skills"className="submit" onClick={()=>this.sendFormData("Click")}>Submit</button>
	            <button id="cancel-skills"className="cancel" onClick={()=>this.props.removeSkillsForm()}>Cancel</button>
	        </div>
	    );
	}	

};
export default SkillsForm