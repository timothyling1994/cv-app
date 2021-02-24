import React, {Component} from "react";
import EditForm from "./EditForm.js"


class ContactDetails extends Component{

	constructor(props){
		super(props);

		this.state={
			editFullName:false,
			editCellPhone:false,
			editEmail:false,
		};

	}

	setEditStateTrue(keyName){

		this.setState({
			[keyName]:true,
		});
	}

	setEditStateFalse(keyName){
		this.setState({
			[keyName]:false,
		});
	}

	render(){
		return (
			<div className="contact-details-form">
		        {(this.state.editFullName)? <EditForm id={this.props.id} stateKey="recordContactDetails" formObjKey="full_name_input" setEditStateFalse={()=>this.setEditStateFalse("editFullName")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.full_name_input} />  : <div className="full-name" onClick={()=>this.setEditStateTrue("editFullName")}>{this.props.formObj.full_name_input}</div>}
		        <div className="contact-info">
		          {(this.state.editCellPhone)? <EditForm id={this.props.id} stateKey="recordContactDetails" formObjKey="cell_phone_input" setEditStateFalse={()=>this.setEditStateFalse("editCellPhone")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.cell_phone_input} />  : <div className="cell-phone" onClick={()=>this.setEditStateTrue("editCellPhone")}>{this.props.formObj.cell_phone_input}</div>}
		          {(this.state.editEmail)? <EditForm id={this.props.id} stateKey="recordContactDetails" formObjKey="email_input" setEditStateFalse={()=>this.setEditStateFalse("editEmail")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.email_input} />  : <div className="email" onClick={()=>this.setEditStateTrue("editEmail")}>{this.props.formObj.email_input}</div>}
		        </div>
		    </div>
	    );
	}	

};
export default ContactDetails