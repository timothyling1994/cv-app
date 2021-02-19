import React, {Component} from "react";

class ContactDetails extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="contact-details">
		        <div className="full-name">FULL NAME</div>
		        <div className="contact-info">
		          <div className="cell-phone">cell: (xxx) xxx-xxxx</div>
		          <div className="email">example@gmail.com</div>
		        </div>
		    </div>
	    );
	}	

};
export default ContactDetails