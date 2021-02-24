import logo from './logo.svg';
import './styles/App.css';
import uniqid from "uniqid";

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ContactDetails from './components/ContactDetails.js';
import ContactDetailsForm from './components/ContactDetailsForm.js';
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
      recordContactDetails:[],
      recordEducation:[],
      recordWorkExperience:[],
      recordSkills:[],

    }

    this.addContactDetailsForm=this.addContactDetailsForm.bind(this);
    this.addEducationForm=this.addEducationForm.bind(this);
    this.addWorkExperienceForm=this.addWorkExperienceForm.bind(this);
    this.addSkillsForm=this.addSkillsForm.bind(this);

    this.removeContactDetailsForm=this.removeContactDetailsForm.bind(this);
    this.removeEducationForm=this.removeEducationForm.bind(this);
    this.removeWorkExperienceForm=this.removeWorkExperienceForm.bind(this);
    this.removeSkillsForm=this.removeSkillsForm.bind(this);

    this.recordContactDetails=this.recordContactDetails.bind(this);
    this.recordEducation=this.recordEducation.bind(this);
    this.recordWorkExperience=this.recordWorkExperience.bind(this);
    this.recordSkills=this.recordSkills.bind(this);

    this.modifyStateFormObj=this.modifyStateFormObj.bind(this);
    this.deleteComponentsFromState=this.deleteComponentsFromState.bind(this);

  };

  addContactDetailsForm(){ 
    const add_contact_btn = document.querySelector(".add-contact-details");
    add_contact_btn.style.display="none";

    this.setState({
      contactDetailsForm:true,
   });
  }

  recordContactDetails(formObj){
    this.removeContactDetailsForm();

    const newArr = this.state.recordContactDetails.concat({
      key:uniqid(),
      id:uniqid(),
      formObj:formObj,
    });

    this.setState({
      recordContactDetails:newArr,
    });
  }

  removeContactDetailsForm(){
    this.setState({
      contactDetailsForm:false,
    });

    const add_contact_btn = document.querySelector(".add-contact-details");
    add_contact_btn.style.display="block";
  }

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

  deleteComponentsFromState(id,stateKey){
    let recordCounter = 0;
    let toDeleteIndex;

    this.state.[stateKey].forEach((record)=>{
      if(record.id==id)
      {
        toDeleteIndex = recordCounter;
      }
      recordCounter++;
    });

    const newState = this.state.[stateKey];
    newState.splice(toDeleteIndex,1);

    this.setState({
      [stateKey]:newState,
    });
  }

  modifyStateFormObj(id,stateKey,formObjKey,newValue,optional){

    console.log(id,stateKey,formObjKey,newValue,optional);
    let bulletPointKey = optional || "NoBulletPointKey";

    if(bulletPointKey === "NoBulletPointKey")
    {
      let recordCounter = 0;
      this.state.[stateKey].forEach((record)=>{

        if(record.id==id)
        {
          let newRecordObj = record;
          newRecordObj.formObj[formObjKey]=newValue;
          let newStateObj = this.state.[stateKey];
          newStateObj[recordCounter] = newRecordObj;

          this.setState({
            [stateKey]:newStateObj,
          },function(){
            this.state.[stateKey].forEach((record)=>{
              console.log(record);
            })
          });
          
        }
        recordCounter++;
      });
    }
    //change workexperience formobj bulletpoint array
    else{
      let recordCounter = 0;
      this.state.[stateKey].forEach((record)=>{

        if(record.id==id)
        {
          let newRecordObj = record;
          newRecordObj.formObj[formObjKey][bulletPointKey]=newValue;
          let newStateObj = this.state.[stateKey];
          newStateObj[recordCounter] = newRecordObj;

          this.setState({
            [stateKey]:newStateObj,
          });
          
        }
        recordCounter++;
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

  addSkillsForm(){ 

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

  recordSkills(formObj){
    const newArr = this.state.recordSkills.concat({
      key:uniqid(),
      id:uniqid(),
      formObj:formObj,
    });

    this.setState({
      recordSkills:newArr,
    });
  }

  render(){
    //console.log(this.state.educationForm);
    return (
      <div className="App">        
        <div className="contact-container">
          {this.state.recordContactDetails.map((entry)=>{
            return <ContactDetails key={entry.key} id={entry.id} formObj={entry.formObj} modifyStateFormObj={this.modifyStateFormObj}/>
          })}
          {this.state.contactDetailsForm && <ContactDetailsForm removeContactDetailsForm={this.removeContactDetailsForm} recordContactDetails={this.recordContactDetails}/>}
          <button className="add-contact-details" onClick={this.addContactDetailsForm}>+ Add Contact Details</button>
        </div>

        <div className="education-container">
          <div className="title">EDUCATION</div>
          {this.state.recordEducation.map((entry)=>{
            return <Education key={entry.key} id={entry.id} formObj={entry.formObj} modifyStateFormObj={this.modifyStateFormObj} deleteComponentsFromState={this.deleteComponentsFromState}/>
          })}
          {this.state.educationForm && <EducationForm removeEducationForm={this.removeEducationForm} recordEducation={this.recordEducation}/>}
          <button className="add-education" onClick={this.addEducationForm}>+ Add Education</button>
        </div>

        <div className="work-experience-container">
          <div className="title">WORK EXPERIENCE</div>
          {this.state.recordWorkExperience.map((entry)=>{
            return <WorkExperience key={entry.key} id={entry.id} formObj={entry.formObj} modifyStateFormObj={this.modifyStateFormObj} deleteComponentsFromState={this.deleteComponentsFromState}/>
          })}
          {this.state.workExperienceForm && <WorkExperienceForm removeWorkExperienceForm={this.removeWorkExperienceForm} recordWorkExperience={this.recordWorkExperience}/>}
          <button className="add-work-experience" onClick={this.addWorkExperienceForm}>+ Add Work Experience</button>
        </div>

        <div className="skills-container">
          <div className="title">SKILLS</div>
          {this.state.recordSkills.map((entry)=>{
            return <Skills key={entry.key} id={entry.id} formObj={entry.formObj} modifyStateFormObj={this.modifyStateFormObj} deleteComponentsFromState={this.deleteComponentsFromState}/>
          })}
          {this.state.skillsForm && <SkillsForm removeSkillsForm={this.removeSkillsForm} recordSkills={this.recordSkills}/>}
          <button className="add-skills" onClick={this.addSkillsForm}>+ Add Skills</button>       
        </div>
      </div>
    );
  }
}

export default App;
