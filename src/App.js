import logo from './logo.svg';
import './styles/App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ContactDetails from './components/ContactDetails.js';
import Education from './components/Education.js';
import EducationForm from './components/EducationForm.js';
import WorkExperienceForm from './components/WorkExperienceForm.js';
import WorkExperience from './components/WorkExperience.js';
import Skills from './components/Skills.js';
import SkillsForm from './components/SkillsForm.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      workExperienceForm:[],
      educationForm:[],
      skillsForm:[],
      recordEducation:[],
      recordWorkExperience:[],
      recordSkills:[],

    }

    this.addEducationForm=this.addEducationForm.bind(this);
    this.addWorkExperienceForm=this.addWorkExperienceForm.bind(this);
    this.addSkillsForm=this.addSkillsForm.bind(this);
    this.removeWorkExperienceForm=this.removeWorkExperienceForm.bind(this);
    this.removeEducationForm=this.removeEducationForm.bind(this);
    this.removeSkillsForm=this.removeSkillsForm.bind(this);
    this.recordWorkExperience=this.recordWorkExperience.bind(this);
    this.recordEducation=this.recordEducation.bind(this);
    this.recordSkills=this.recordSkills.bind(this);

  };

  addEducationForm(){ 
    const add_education_btn = document.querySelector(".add-education");
    add_education_btn.style.display="none";

    this.setState({
      educationForm:[<EducationForm removeEducationForm={this.removeEducationForm} recordEducation={this.recordEducation}/>],
    });
  }

  removeEducationForm(){
    this.setState({
      educationForm:[],
    });

    const add_education_btn = document.querySelector(".add-education");
    add_education_btn.style.display="block";
  }

  recordEducation(formObj){
    this.removeEducationForm();
    const newArr = this.state.recordEducation.concat(<Education formObj={formObj}/>);
    this.setState({
      recordEducation:[newArr],
    });
  }

  addWorkExperienceForm(){ 
    const add_work_btn = document.querySelector(".add-work-experience");
    add_work_btn.style.display="none";

    this.setState({
      workExperienceForm:[<WorkExperienceForm removeWorkExperienceForm={this.removeWorkExperienceForm} recordWorkExperience={this.recordWorkExperience}/>],
    });
  } 

  removeWorkExperienceForm(){
    this.setState({
      workExperienceForm:[],
    });

    const add_work_btn = document.querySelector(".add-work-experience");
    add_work_btn.style.display="block";
  }

  recordWorkExperience(formObj){
    this.removeWorkExperienceForm();
    const newArr = this.state.recordWorkExperience.concat(<WorkExperience formObj={formObj}/>);
    this.setState({
      recordWorkExperience:[newArr],
    });
  }

  addSkillsForm(){ 
    //console.log(this);
    const add_skills_btn = document.querySelector(".add-skills");
    add_skills_btn.style.display="none";

    this.setState({
      skillsForm:[<SkillsForm removeSkillsForm={this.removeSkillsForm}/>],
    });
  }

  removeSkillsForm(){
    this.setState({
      skillsForm:[],
    });

    const add_skills_btn = document.querySelector(".add-skills");
    add_skills_btn.style.display="block";
  }  

  recordSkills(){

  }

  render(){
    return (
      <div className="App">
        
        <div className="contact-container">
          <ContactDetails></ContactDetails>
        </div>

        <div className="education-container">
          <div className="title">EDUCATION</div>
          {this.state.recordEducation}
          {this.state.educationForm}
          <button className="add-education" onClick={this.addEducationForm}>+ Add Education</button>
        </div>

        <div className="work-experience-container">
          <div className="title">WORK EXPERIENCE</div>
          {this.state.recordWorkExperience}
          {this.state.workExperienceForm}
          <button className="add-work-experience" onClick={this.addWorkExperienceForm}>+ Add Work Experience</button>
        </div>

        <div className="skills-container">
          <div className="title">SKILLS</div>
          {this.state.skillsForm}
          <button className="add-skills" onClick={this.addSkillsForm}>+ Add Skills</button>       
        </div>


      </div>
    );
  }
}

export default App;
