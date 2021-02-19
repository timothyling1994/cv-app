import React, {Component} from "react";

class Education extends Component{

	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props);
		return (
			<div className="education">
	          <div className="row">
	          	<div className="display-university">{this.props.formObj.school_input}</div>
	          	<div className="display-university-date-range">{this.props.formObj.school_from_date}-{this.props.formObj.school_to_date}</div>
	          </div>
	          <div className="row">
	          	<div className="display-degree">{this.props.formObj.school_degree_input}</div>
	          </div>
	        </div>
	    );
	}	

};
export default Education