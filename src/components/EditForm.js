import React, {Component} from "react";

class EditForm extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="editForm">
				<input className={this.props.className} type="text" placeholder={this.props.placeholder}/>
				<button onClick={}>Submit Edit</button>
				<button onClick={()=>this.props.setEditStateFalse()}>Cancel</button>
			</div>
	    );
	}	

};
export default EditForm