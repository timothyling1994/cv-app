import logo from './logo.svg';
import './styles/App.css';
import uniqid from "uniqid";

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
      workExperienceForm:false,
      educationForm:false,
      skillsForm:false,
      recordEducation:[],
      recordWorkExperience:[],
      recordSkills:[],

    }

    this.addEducationForm=this.addEducationForm.bind(this);
    this.removeEducationForm=this.removeEducationForm.bind(this);
    this.modifyStateFormObj=this.modifyStateFormObj.bind(this);
    this.addWorkExperienceForm=this.addWorkExperienceForm.bind(this);
    this.addSkillsForm=this.addSkillsForm.bind(this);
    this.removeWorkExperienceForm=this.removeWorkExperienceForm.bind(this);
    this.removeSkillsForm=this.removeSkillsForm.bind(this);
    this.recordWorkExperience=this.recordWorkExperience.bind(this);
    this.recordEducation=this.recordEducation.bind(this);
    this.recordSkills=this.recordSkills.bind(this);

  };

  addEducationForm(){ 
    const add_education_btn = document.querySelector(".add-education");
    add_education_btn.style.display="none";

    this.setState({
      educationForm:true,
   });
  }

  removeEducationForm(){
    this.setState({
      educationForm:false,
    });

    const add_education_btn = document.querySelector(".add-education");
    add_education_btn.style.display="block";
  }

  recordEducation(formObj){
    this.removeEducationForm();
  
    const newArr = this.state.recordEducation.concat({
      key:uniqid(),
      id:uniqid(),
      formObj:formObj,
    });

    this.setState({
      recordEducation:newArr,
    });
  }

  modifyStateFormObj(id,stateKey,formObjKey,newValue,optional){


    let bulletPointKey = optional;

    this.state.[stateKey].forEach((record)=>{
      console.log(record.key);
    })

    if(bulletPointKey == undefined)
    {
      let recordCounter = 0;
      this.state.[stateKey].forEach((record)=>{

        console.log(recordCounter);
        if(record.id==id)
        {
          let newEducationObj = record;
          newEducationObj.formObj[formObjKey]=newValue;
          let newStateObj = this.state.[stateKey];
          newStateObj[recordCounter] = newEducationObj;

          this.setState({
            recordEducation:newStateObj,
          });

          
        }
        recordCounter++;
      });
    }
    //change workexperience formobj bulletpoint array
    else{
      this.state.[stateKey].forEach((record)=>{
        if(record.id==id)
        {
          //record.formObj[formObjKey] = {
          //  [bulletPointKey]
          //};
        }
      });
    }

  

  }

  addWorkExperienceForm(){ 
    const add_work_btn = document.querySelector(".add-work-experience");
    add_work_btn.style.display="none";

    this.setState({
      workExperienceForm:true,
    });
  } 

  removeWorkExperienceForm(){
    this.setState({
      workExperienceForm:false,
    });

    const add_work_btn = document.querySelector(".add-work-experience");
    add_work_btn.style.display="block";
  }

  recordWorkExperience(formObj){
    this.removeWorkExperienceForm();
    const newArr = this.state.recordWorkExperience.concat({
      key:uniqid(),
      id:uniqid(),
      formObj:formObj,
    });
    this.setState({
      recordWorkExperience:newArr,
    });
  }

  modifyWorkExperience(id,objField,newValue){

    this.state.recordWorkExperience.forEach((record)=>{
      if(record.id==id)
      {
        record.formObj[objField] = newValue;
      }
    });

  }

  addSkillsForm(){ 
    //console.log(this);
    const add_skills_btn = document.querySelector(".add-skills");
    add_skills_btn.style.display="none";

    this.setState({
      skillsForm:true,
    });
  }

  removeSkillsForm(){
    this.setState({
      skillsForm:false,
    });

    const add_skills_btn = document.querySelector(".add-skills");
    add_skills_btn.style.display="block";
  }  

  recordSkills(){

  }

  render(){
    //console.log(this.state.educationForm);
    return (
      <div className="App">        
        <div className="contact-container">
          <ContactDetails></ContactDetails>
        </div>

        <div className="education-container">
          <div className="title">EDUCATION</div>
          {this.state.recordEducation.map((entry)=>{
            return <Education key={entry.key} id={entry.id} formObj={entry.formObj} modifyStateFormObj={this.modifyStateFormObj}/>
          })}
          {this.state.educationForm && <EducationForm removeEducationForm={this.removeEducationForm} recordEducation={this.recordEducation}/>}
          <button className="add-education" onClick={this.addEducationForm}>+ Add Education</button>
        </div>

        <div className="work-experience-container">
          <div className="title">WORK EXPERIENCE</div>
          {this.state.recordWorkExperience.map((entry)=>{
            return <WorkExperience key={entry.key} id={entry.id} formObj={entry.formObj} modifyStateFormObj={this.modifyStateFormObj}/>
          })}
          {this.state.workExperienceForm && <WorkExperienceForm removeWorkExperienceForm={this.removeWorkExperienceForm} recordWorkExperience={this.recordWorkExperience}/>}
          <button className="add-work-experience" onClick={this.addWorkExperienceForm}>+ Add Work Experience</button>
        </div>

        <div className="skills-container">
          <div className="title">SKILLS</div>
          {this.state.skillsForm && <SkillsForm removeSkillsForm={this.removeSkillsForm}/>}
          <button className="add-skills" onClick={this.addSkillsForm}>+ Add Skills</button>       
        </div>
      </div>
    );
  }
}

export default App;
