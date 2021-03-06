import React, {Component} from "react";
import EditForm from './EditForm.js';
import closeBtn from '../close-btn.png'

class Education extends Component{

	constructor(props){
		super(props);

		this.state={

			editUniversity:false,
			editFromDate:false,
			editToDate:false,
			editDegree:false,
		};

		this.setEditStateTrue = this.setEditStateTrue.bind(this);
		this.setEditStateFalse = this.setEditStateFalse.bind(this);
	}

	setEditStateTrue(event,keyName){

		event.target.style.display="none";
		const target_parent = event.target.parentElement;

		this.setState({
			[keyName]:true,
		});


	}

	setEditStateFalse(keyName){
		console.log("keyName:"+keyName);
		this.setState({
			[keyName]:false,
		})
	}

	deleteComponent(stateKey){
		console.log("to delete index:" + this.props.id);
		this.props.deleteComponentsFromState(this.props.id,stateKey);

	}

	render(){

		return (
			<div className ="education">
				<div className="close-btn-row">
					<img src={closeBtn} className="close-btn" onClick={()=>this.deleteComponent("recordEducation")}/>
				</div>  
	          <div className="row">
	          	{(this.state.editUniversity) ? <EditForm id={this.props.id} stateKey="recordEducation" formObjKey="school_input" className="display-university" setEditStateFalse={()=>this.setEditStateFalse("editUniversity")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.school_input}/> : <div id={this.props.id} className="display-university" onClick={(e)=>this.setEditStateTrue(e,"editUniversity")}>{this.props.formObj.school_input}</div>}
	          	<div className="display-university-date-range">
	          		{(this.state.editFromDate) ? <EditForm id={this.props.id} stateKey="recordEducation" formObjKey="school_from_date" setEditStateFalse={()=>this.setEditStateFalse("editFromDate")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.school_from_date}/> : <div onClick={(e)=>this.setEditStateTrue(e,"editFromDate")}>{this.props.formObj.school_from_date}</div>} - {(this.state.editToDate) ? <EditForm id={this.props.id} stateKey="recordEducation" formObjKey="school_to_date" setEditStateFalse={()=>this.setEditStateFalse("editToDate")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.school_to_date}/> : <div onClick={(e)=>this.setEditStateTrue(e,"editToDate")}>{this.props.formObj.school_to_date}</div>}
	          	</div>	
	          </div>
	          <div className="row">
	          	<div className="display-degree">
	          		{(this.state.editDegree) ? <EditForm id={this.props.id} stateKey="recordEducation" formObjKey="school_degree_input" setEditStateFalse={()=>this.setEditStateFalse("editDegree")} modifyStateFormObj={this.props.modifyStateFormObj} value={this.props.formObj.school_degree_input}/> : <div onClick={(e)=>this.setEditStateTrue(e,"editDegree")}>{this.props.formObj.school_degree_input}</div>}
	          	</div>
	          </div>
	        </div>
	    );
	}	

};
export default Education