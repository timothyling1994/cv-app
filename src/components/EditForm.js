import React, {Component} from "react";

class EditForm extends Component{

	constructor(props){
		super(props);
	}

	sendEditedForm(event){
		let newValue = event.target.parentElement.querySelector("input").value;
		this.props.modifyStateFormObj(this.props.id,this.props.stateKey,this.props.formObjKey,newValue,this.props.bulletpointKey);
		this.props.setEditStateFalse();
	}

	render(){
		return (
			<div className="editForm">
				<input className={this.props.className} type="text" defaultValue={this.props.value}/>
				<button onClick={(e)=>this.sendEditedForm(e)}>Submit Edit</button>
				<button onClick={()=>this.props.setEditStateFalse()}>Cancel</button>
			</div>
	    );
	}	

};
export default EditForm