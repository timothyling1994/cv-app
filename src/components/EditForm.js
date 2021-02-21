import React, {Component} from "react";

class EditForm extends Component{

	constructor(props){
		super(props);
	}

	sendEditedForm(event){
		let newValue = event.target.parentElement.querySelector("input").value;
		this.props.modifyEducation(this.props.id,this.props.inputType,newValue);
	}

	render(){
		return (
			<div className="editForm">
				<input className={this.props.className} type="text" placeholder={this.props.placeholder}/>
				<button onClick={(e)=>this.sendEditedForm(e)}>Submit Edit</button>
				<button onClick={()=>this.props.setEditStateFalse()}>Cancel</button>
			</div>
	    );
	}	

};
export default EditForm