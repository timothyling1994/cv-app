import React, {Component} from "react";

class ContactDetailsForm extends Component{

	constructor(props){
		super(props);
	}

	sendFormData(event){
		const full_name_input = document.querySelector(".full-name-input").value;
		const cell_phone_input = document.querySelector(".cell-phone-input").value;
		const email_input = document.querySelector(".email-input").value;

		this.props.recordContactDetails({
			full_name_input,
			cell_phone_input,
			email_input,
		});

		const addContactDetailsbtn = document.querySelector(".add-contact-details");
		addContactDetailsbtn.style.display="none";
	}

	render(){
		return (
			<div className="contact-details">
		        <input className="full-name-input" placeholder="Full Name"/>
		        <div className="contact-info-input">
		          <input className="cell-phone-input" placeholder="Cell phone (xxx)-xxx-xxxx"/>
		          <input className="email-input" placeholder="Email"/>
		        </div>
		        <button id="submit-contact-details"className="submit" onClick={(e)=>this.sendFormData(e)}>Submit</button>
	        	<button id="cancel-contact-details"className="cancel" onClick={()=>this.props.removeContactDetailsForm()}>Cancel</button>
		    </div>
		
	    );
	}	

};
export default ContactDetailsForm