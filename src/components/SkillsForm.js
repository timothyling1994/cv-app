import React, {Component} from "react";

class SkillsForm extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="skillsForm">  
				<div className="formGroup">
	              <label>Skills</label>
	              <input type="text" placeholder="Share your top 5 skills"/>
	            </div>
	            <button id="submit-skills"className="submit">Submit</button>
	            <button id="cancel-skills"className="cancel" onClick={()=>this.props.removeSkillsForm()}>Cancel</button>
	        </div>
	    );
	}	

};
export default SkillsForm