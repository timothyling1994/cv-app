import React, {Component} from "react";

class WorkExperience extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="work-exp-1" className="work-experience">
	          <div id="company-1" className="company">Ticketmaster</div>
	          <div className="role">Solutions Engineer</div>
	          <div className="description">
	            <ul>
	              <li id="bullet-1">Created FQDN web app tool using Django framework </li>
	              <li id="bullet-2">Created FQDN web app tool using Django framework </li>
	            </ul>
	          </div>
	        </div>
	    );
	}	

};
export default WorkExperience