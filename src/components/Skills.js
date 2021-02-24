import React, {Component} from "react";
import EditForm from './EditForm.js';
import closeBtn from '../close-btn.png';


class Skills extends Component{

	constructor(props){
		super(props);

		this.state={

			editSkill:false,
		};
	}

	setEditStateTrue(){

		this.setState({
			editSkill:true,
		});
	}

	setEditStateFalse(){
		this.setState({
			editSkill:false,
		});
	}

	deleteComponent(stateKey){
		console.log("to delete index:" + this.props.id);
		this.props.deleteComponentsFromState(this.props.id,stateKey);

	}
	
	render(){
		return (
			<div className="skillSet">
				<div className="close-btn-row">
					<img src={closeBtn} className="close-btn" onClick={()=>this.deleteComponent("recordSkills")}/>
				</div>  
	          { this.state.editSkill ? <EditForm id={this.props.id} stateKey="recordSkills" formObjKey="skill_input" setEditStateFalse={()=>this.setEditStateFalse()} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.skill_input} /> : <li id={this.props.id} onClick={()=>this.setEditStateTrue()}>{this.props.formObj.skill_input} </li>}
	        </div>
	    );
	}	

};
export default Skills