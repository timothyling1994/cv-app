import React, {Component} from "react";

class SkillsForm extends Component{

	constructor(props){
		super(props);

		this.state={
			skillsAdded:[],
		}

	}

	addingSkills(e){
		if(e.key=="Enter")
		{
			const skill_input = document.querySelector("#skill-input");
			const skillsAdded = this.state.skillsAdded;
			let newSkillsArray = skillsAdded.concat(skill_input.value);
			this.setState({
				skillsAdded:newSkillsArray,
			})

			skill_input.value="";

		}
	}

	render(){
		return (
			<div className="skillsForm">  
				<div className="formGroup">
	              {this.state.skillsAdded}
	              <input id="skill-input"type="text" onKeyDown={(e)=>this.addingSkills(e)} placeholder="Share your top skills"/>
	            </div>
	            <button id="submit-skills"className="submit">Submit</button>
	            <button id="cancel-skills"className="cancel" onClick={()=>this.props.removeSkillsForm()}>Cancel</button>
	        </div>
	    );
	}	

};
export default SkillsForm