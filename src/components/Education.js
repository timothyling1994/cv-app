import React, {Component} from "react";
import EditForm from './EditForm.js';

class Education extends Component{

	constructor(props){
		super(props);

		this.state={
			"display-university":[],
			editUniversity:false,
			"display-university-date-range":[],
			"display-degree":[],
		};

		this.editForm = this.editForm.bind(this);
		this.setEditStateFalse = this.setEditStateFalse.bind(this);
	}

	editForm(event){
		//this.props.modifyEducation();
		event.target.style.display="none";
		const target_parent = event.target.parentElement;

		this.setState({
			editUniversity:true,
		});
		//target_parent.insertBefore(<EditForm/>,event.target);



	}

	setEditStateFalse(){
		this.setState({
			editUniversity:false,
		})
	}
	//<div className="display-university" onClick={(e)=>this.editForm(e)}>{this.props.formObj.school_input}</div>

	render(){
		console.log(this.props);
		return (
			<div className ="education">
	          <div className="row">
	          	{(this.state.editUniversity) ? <EditForm className="display-university" setEditStateFalse={this.setEditStateFalse} placeholder={this.props.formObj.school_input}/> : <div className="display-university" onClick={(e)=>this.editForm(e)}>{this.props.formObj.school_input}</div>}
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