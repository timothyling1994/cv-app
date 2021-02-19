import logo from './logo.svg';
import './styles/App.css';

import React, { Component } from "react";
import ReactDOM from 'react-dom';

import ContactDetails from './components/ContactDetails.js';
import Education from './components/Education.js';
import WorkExperienceForm from './components/WorkExperienceForm.js';

import WorkExperience from './components/WorkExperience.js';
import Skills from './components/Skills.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      workExperienceForm:[],
    }

    this.addWorkExperienceForm=this.addWorkExperienceForm.bind(this);
  };

  addWorkExperienceForm(){ 
    this.setState({
      workExperienceForm:[<WorkExperienceForm/>],
    });
  } 

  render(){
    return (
      <div className="App">
        
        <div className="contact-container">
          <ContactDetails></ContactDetails>
        </div>

        <div className="education-container">
          <div className="title">EDUCATION</div>
  
          <button className="add-education">+ Add Education</button>
        </div>

        <div className="work-experience-container">
          <div className="title">WORK EXPERIENCE</div>
          {this.state.workExperienceForm}
          <button className="add-work-experience" onClick={this.addWorkExperienceForm}>+ Add Work Experience</button>
        </div>

        <div className="skills-container">
          <div className="title">SKILLS</div>
          <button className="add-skills">+ Add Skills</button>       
        </div>


      </div>
    );
  }
}

export default App;
