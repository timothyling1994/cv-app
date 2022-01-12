(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,o){},16:function(e,t,o){},19:function(e,t,o){"use strict";o.r(t);var i=o(1),r=o.n(i),a=o(10),n=o.n(a),s=(o(15),o(7)),c=o(3),l=o(4),d=o(2),u=o(6),m=o(5),p=(o.p,o(16),o(8)),j=o.n(p),b=o(0),h=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){return Object(c.a)(this,o),t.call(this,e)}return Object(l.a)(o,[{key:"sendEditedForm",value:function(e){var t=e.target.parentElement.querySelector("input").value;this.props.modifyStateFormObj(this.props.id,this.props.stateKey,this.props.formObjKey,t,this.props.bulletpointKey),this.props.setEditStateFalse()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"editForm",children:[Object(b.jsx)("input",{className:this.props.className,type:"text",defaultValue:this.props.value}),Object(b.jsx)("button",{onClick:function(t){return e.sendEditedForm(t)},children:"Submit Edit"}),Object(b.jsx)("button",{onClick:function(){return e.props.setEditStateFalse()},children:"Cancel"})]})}}]),o}(i.Component),O=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var i;return Object(c.a)(this,o),(i=t.call(this,e)).state={editFullName:!1,editCellPhone:!1,editEmail:!1},i}return Object(l.a)(o,[{key:"setEditStateTrue",value:function(e){this.setState(Object(s.a)({},e,!0))}},{key:"setEditStateFalse",value:function(e){this.setState(Object(s.a)({},e,!1))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"contact-details-form",children:[this.state.editFullName?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordContactDetails",formObjKey:"full_name_input",setEditStateFalse:function(){return e.setEditStateFalse("editFullName")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.full_name_input}):Object(b.jsx)("div",{className:"full-name",onClick:function(){return e.setEditStateTrue("editFullName")},children:this.props.formObj.full_name_input}),Object(b.jsxs)("div",{className:"contact-info",children:[this.state.editCellPhone?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordContactDetails",formObjKey:"cell_phone_input",setEditStateFalse:function(){return e.setEditStateFalse("editCellPhone")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.cell_phone_input}):Object(b.jsx)("li",{className:"cell-phone",onClick:function(){return e.setEditStateTrue("editCellPhone")},children:this.props.formObj.cell_phone_input}),this.state.editEmail?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordContactDetails",formObjKey:"email_input",setEditStateFalse:function(){return e.setEditStateFalse("editEmail")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.email_input}):Object(b.jsx)("li",{className:"email",onClick:function(){return e.setEditStateTrue("editEmail")},children:this.props.formObj.email_input})]})]})}}]),o}(i.Component),y=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){return Object(c.a)(this,o),t.call(this,e)}return Object(l.a)(o,[{key:"sendFormData",value:function(e){var t=document.querySelector(".full-name-input").value,o=document.querySelector(".cell-phone-input").value,i=document.querySelector(".email-input").value;this.props.recordContactDetails({full_name_input:t,cell_phone_input:o,email_input:i}),document.querySelector(".add-contact-details").style.display="none"}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"contact-details",children:[Object(b.jsx)("input",{className:"full-name-input",placeholder:"Full Name"}),Object(b.jsxs)("div",{className:"contact-info-input",children:[Object(b.jsx)("input",{className:"cell-phone-input",placeholder:"Cell phone (xxx)-xxx-xxxx"}),Object(b.jsx)("input",{className:"email-input",placeholder:"Email"})]}),Object(b.jsx)("button",{id:"submit-contact-details",className:"submit",onClick:function(t){return e.sendFormData(t)},children:"Submit"}),Object(b.jsx)("button",{id:"cancel-contact-details",className:"cancel",onClick:function(){return e.props.removeContactDetailsForm()},children:"Cancel"})]})}}]),o}(i.Component),f=o.p+"static/media/close-btn.38279347.png",v=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var i;return Object(c.a)(this,o),(i=t.call(this,e)).state={editUniversity:!1,editFromDate:!1,editToDate:!1,editDegree:!1},i.setEditStateTrue=i.setEditStateTrue.bind(Object(d.a)(i)),i.setEditStateFalse=i.setEditStateFalse.bind(Object(d.a)(i)),i}return Object(l.a)(o,[{key:"setEditStateTrue",value:function(e,t){e.target.style.display="none";e.target.parentElement;this.setState(Object(s.a)({},t,!0))}},{key:"setEditStateFalse",value:function(e){console.log("keyName:"+e),this.setState(Object(s.a)({},e,!1))}},{key:"deleteComponent",value:function(e){console.log("to delete index:"+this.props.id),this.props.deleteComponentsFromState(this.props.id,e)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"education",children:[Object(b.jsx)("div",{className:"close-btn-row",children:Object(b.jsx)("img",{src:f,className:"close-btn",onClick:function(){return e.deleteComponent("recordEducation")}})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"university",children:this.state.editUniversity?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordEducation",formObjKey:"school_input",className:"display-university",setEditStateFalse:function(){return e.setEditStateFalse("editUniversity")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.school_input}):Object(b.jsx)("div",{id:this.props.id,className:"display-university",onClick:function(t){return e.setEditStateTrue(t,"editUniversity")},children:this.props.formObj.school_input})}),Object(b.jsxs)("div",{className:"display-university-date-range",children:[this.state.editFromDate?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordEducation",formObjKey:"school_from_date",setEditStateFalse:function(){return e.setEditStateFalse("editFromDate")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.school_from_date}):Object(b.jsx)("div",{onClick:function(t){return e.setEditStateTrue(t,"editFromDate")},children:this.props.formObj.school_from_date}),"-",this.state.editToDate?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordEducation",formObjKey:"school_to_date",setEditStateFalse:function(){return e.setEditStateFalse("editToDate")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.school_to_date}):Object(b.jsx)("div",{onClick:function(t){return e.setEditStateTrue(t,"editToDate")},children:this.props.formObj.school_to_date})]})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"display-degree",children:this.state.editDegree?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordEducation",formObjKey:"school_degree_input",setEditStateFalse:function(){return e.setEditStateFalse("editDegree")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.school_degree_input}):Object(b.jsx)("div",{onClick:function(t){return e.setEditStateTrue(t,"editDegree")},children:this.props.formObj.school_degree_input})})})]})}}]),o}(i.Component),S=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){return Object(c.a)(this,o),t.call(this,e)}return Object(l.a)(o,[{key:"sendFormData",value:function(){var e=document.querySelector("#school-input").value,t=document.querySelector("#school-from-date").value,o=document.querySelector("#school-to-date").value,i=document.querySelector("#school-degree-input").value;this.props.recordEducation({school_input:e,school_from_date:t,school_to_date:o,school_degree_input:i})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"educationForm",children:[Object(b.jsxs)("div",{className:"formGroup",children:[Object(b.jsx)("label",{children:"University or School Name"}),Object(b.jsx)("input",{id:"school-input",type:"text",placeholder:"University or School Name"}),Object(b.jsxs)("div",{className:"date-range",children:[Object(b.jsx)("label",{className:"label-from-date",children:"From"}),Object(b.jsx)("label",{className:"label-to-date",children:"To"}),Object(b.jsx)("input",{id:"school-from-date",className:"from-date",type:"text",placeholder:"YYYY"}),Object(b.jsx)("input",{id:"school-to-date",className:"to-date",type:"text",placeholder:"YYYY or Present"})]}),Object(b.jsx)("label",{children:"Degree"}),Object(b.jsx)("input",{id:"school-degree-input",type:"text",placeholder:"Degree"})]}),Object(b.jsx)("button",{id:"submit-education",className:"submit",onClick:function(){return e.sendFormData()},children:"Submit"}),Object(b.jsx)("button",{id:"cancel-education",className:"cancel",onClick:function(){return e.props.removeEducationForm()},children:"Cancel"})]})}}]),o}(i.Component),k=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){return Object(c.a)(this,o),t.call(this,e)}return Object(l.a)(o,[{key:"remove_linebreaks",value:function(e){return e.replace(/[\r\n]+/gm,"")}},{key:"sendFormData",value:function(){var e=document.querySelector("#company-name-input").value,t=document.querySelector("#company-city-input").value,o=document.querySelector("#company-from-date-input").value,i=document.querySelector("#company-to-date-input").value,r=document.querySelector("#company-role-input").value,a=document.querySelector("#company-role-description-input").value,n=this.remove_linebreaks(a).split("\u2022").filter((function(e){return""!==e})),s={};n.forEach((function(e){s[j()()]=e})),this.props.recordWorkExperience({company_name_input:e,company_city_input:t,company_from_date_input:o,company_to_date_input:i,company_role_input:r,company_role_description_obj:s})}},{key:"addBulletPoint",value:function(e){var t=document.querySelector("#company-role-description-input");"Enter"==e.key&&(e.preventDefault(),t.value.includes("\u2022")?t.value=t.value+"\n\u2022":t.value=t.value+"\u2022")}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"workExperienceForm",children:[Object(b.jsxs)("div",{className:"formGroup",children:[Object(b.jsx)("label",{children:"Company Name"}),Object(b.jsx)("input",{id:"company-name-input",type:"text",placeholder:"Company Name"}),Object(b.jsx)("label",{children:"City"}),Object(b.jsx)("input",{id:"company-city-input",type:"text",placeholder:"City"}),Object(b.jsxs)("div",{className:"date-range",children:[Object(b.jsx)("label",{className:"label-from-date",children:"From"}),Object(b.jsx)("label",{className:"label-to-date",children:"To"}),Object(b.jsx)("input",{id:"company-from-date-input",className:"from-date",type:"text",placeholder:"Month, YYYY"}),Object(b.jsx)("input",{id:"company-to-date-input",className:"to-date",type:"text",placeholder:"Month, YYYY or Present"})]}),Object(b.jsx)("label",{children:"Role"}),Object(b.jsx)("input",{id:"company-role-input",type:"text",placeholder:"Role"}),Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("textarea",{id:"company-role-description-input",onKeyDown:function(t){return e.addBulletPoint(t)},placeholder:"Press Enter to add bullet points"})]}),Object(b.jsx)("button",{id:"submit-work-experience",className:"submit",onClick:function(){return e.sendFormData()},children:"Submit"}),Object(b.jsx)("button",{id:"cancel-work-experience",className:"cancel",onClick:function(){return e.props.removeWorkExperienceForm()},children:"Cancel"})]})}}]),o}(i.Component),x=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var i;Object(c.a)(this,o),i=t.call(this,e);var r=Object.keys(i.props.formObj.company_role_description_obj).map((function(e){return Object(s.a)({},e,!1)}));return i.state={editCompany:!1,editCity:!1,editFromDate:!1,editToDate:!1,editRole:!1,editDescription:r},i.setEditStateTrue=i.setEditStateTrue.bind(Object(d.a)(i)),i.setEditStateFalse=i.setEditStateFalse.bind(Object(d.a)(i)),i}return Object(l.a)(o,[{key:"setEditStateTrue",value:function(e,t,o){var i=o;e.target.style.display="none";e.target.parentElement;void 0==i?this.setState(Object(s.a)({},t,!0)):this.setState(Object(s.a)({},t,Object(s.a)({},i,!0)))}},{key:"setEditStateFalse",value:function(e,t){var o=t;console.log("keyName:"+e),void 0==o?(console.log("undefined"),this.setState(Object(s.a)({},e,!1))):this.setState(Object(s.a)({},e,Object(s.a)({},o,!1)))}},{key:"deleteComponent",value:function(e){console.log("to delete index:"+this.props.id),this.props.deleteComponentsFromState(this.props.id,e)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{id:"work-exp-1",className:"work-experience",children:[Object(b.jsx)("div",{className:"close-btn-row",children:Object(b.jsx)("img",{src:f,className:"close-btn",onClick:function(){return e.deleteComponent("recordWorkExperience")}})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{id:"company-1",className:"company",children:[this.state.editCompany?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordWorkExperience",formObjKey:"company_name_input",setEditStateFalse:function(){return e.setEditStateFalse("editCompany")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.company_name_input}):Object(b.jsx)("div",{id:this.props.id,onClick:function(t){return e.setEditStateTrue(t,"editCompany")},children:this.props.formObj.company_name_input}),", ",this.state.editCity?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordWorkExperience",formObjKey:"company_city_input",setEditStateFalse:function(){return e.setEditStateFalse("editCity")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.company_city_input}):Object(b.jsx)("div",{id:this.props.id,onClick:function(t){return e.setEditStateTrue(t,"editCity")},children:this.props.formObj.company_city_input})]}),Object(b.jsxs)("div",{className:"display-company-date-range",children:[this.state.editFromDate?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordWorkExperience",formObjKey:"company_from_date_input",setEditStateFalse:function(){return e.setEditStateFalse("editFromDate")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.company_from_date_input}):Object(b.jsx)("div",{onClick:function(t){return e.setEditStateTrue(t,"editFromDate")},children:this.props.formObj.company_from_date_input})," - ",this.state.editToDate?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordWorkExperience",formObjKey:"company_to_date_input",setEditStateFalse:function(){return e.setEditStateFalse("editToDate")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.company_to_date_input}):Object(b.jsx)("div",{onClick:function(t){return e.setEditStateTrue(t,"editToDate")},children:this.props.formObj.company_to_date_input})]})]}),Object(b.jsx)("div",{className:"role",children:this.state.editRole?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordWorkExperience",formObjKey:"company_role_input",setEditStateFalse:function(){return e.setEditStateFalse("editRole")},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.company_role_input}):Object(b.jsx)("div",{id:this.props.id,onClick:function(t){return e.setEditStateTrue(t,"editRole")},children:this.props.formObj.company_role_input})}),Object(b.jsx)("div",{className:"work-description",children:Object(b.jsx)("ul",{id:this.props.id,children:Object.keys(this.props.formObj.company_role_description_obj).map((function(t){return e.state.editDescription[t]?Object(b.jsx)(h,{id:e.props.id,bulletpointKey:t,stateKey:"recordWorkExperience",formObjKey:"company_role_description_obj",setEditStateFalse:function(){return e.setEditStateFalse("editDescription",t)},modifyStateFormObj:e.props.modifyStateFormObj,value:e.props.formObj.company_role_description_obj[t]},t):Object(b.jsx)("li",{onClick:function(o){return e.setEditStateTrue(o,"editDescription",t)},children:e.props.formObj.company_role_description_obj[t]},t)}))})})]})}}]),o}(i.Component),F=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var i;return Object(c.a)(this,o),(i=t.call(this,e)).state={editSkill:!1},i}return Object(l.a)(o,[{key:"setEditStateTrue",value:function(){this.setState({editSkill:!0})}},{key:"setEditStateFalse",value:function(){this.setState({editSkill:!1})}},{key:"deleteComponent",value:function(e){console.log("to delete index:"+this.props.id),this.props.deleteComponentsFromState(this.props.id,e)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"skillSet",children:[Object(b.jsx)("div",{className:"close-btn-row",children:Object(b.jsx)("img",{src:f,className:"close-btn",onClick:function(){return e.deleteComponent("recordSkills")}})}),this.state.editSkill?Object(b.jsx)(h,{id:this.props.id,stateKey:"recordSkills",formObjKey:"skill_input",setEditStateFalse:function(){return e.setEditStateFalse()},modifyStateFormObj:this.props.modifyStateFormObj,value:this.props.formObj.skill_input}):Object(b.jsxs)("li",{id:this.props.id,onClick:function(){return e.setEditStateTrue()},children:[this.props.formObj.skill_input," "]})]})}}]),o}(i.Component),E=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){return Object(c.a)(this,o),t.call(this,e)}return Object(l.a)(o,[{key:"sendFormData",value:function(e){if("Enter"==e.key||"Click"==e){var t=document.querySelector("#skill-input");console.log(t.value),this.props.recordSkills({skill_input:t.value}),t.value=""}}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"skillsForm",children:[Object(b.jsx)("div",{className:"formGroup",children:Object(b.jsx)("input",{id:"skill-input",type:"text",onKeyDown:function(t){return e.sendFormData(t)},placeholder:"Share your top skills"})}),Object(b.jsx)("button",{id:"submit-skills",className:"submit",onClick:function(){return e.sendFormData("Click")},children:"Submit"}),Object(b.jsx)("button",{id:"cancel-skills",className:"cancel",onClick:function(){return e.props.removeSkillsForm()},children:"Cancel"})]})}}]),o}(i.Component),_=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var i;return Object(c.a)(this,o),(i=t.call(this,e)).state={workExperienceForm:!1,educationForm:!1,skillsForm:!1,recordContactDetails:[],recordEducation:[],recordWorkExperience:[],recordSkills:[]},i.addContactDetailsForm=i.addContactDetailsForm.bind(Object(d.a)(i)),i.addEducationForm=i.addEducationForm.bind(Object(d.a)(i)),i.addWorkExperienceForm=i.addWorkExperienceForm.bind(Object(d.a)(i)),i.addSkillsForm=i.addSkillsForm.bind(Object(d.a)(i)),i.removeContactDetailsForm=i.removeContactDetailsForm.bind(Object(d.a)(i)),i.removeEducationForm=i.removeEducationForm.bind(Object(d.a)(i)),i.removeWorkExperienceForm=i.removeWorkExperienceForm.bind(Object(d.a)(i)),i.removeSkillsForm=i.removeSkillsForm.bind(Object(d.a)(i)),i.recordContactDetails=i.recordContactDetails.bind(Object(d.a)(i)),i.recordEducation=i.recordEducation.bind(Object(d.a)(i)),i.recordWorkExperience=i.recordWorkExperience.bind(Object(d.a)(i)),i.recordSkills=i.recordSkills.bind(Object(d.a)(i)),i.modifyStateFormObj=i.modifyStateFormObj.bind(Object(d.a)(i)),i.deleteComponentsFromState=i.deleteComponentsFromState.bind(Object(d.a)(i)),i}return Object(l.a)(o,[{key:"addContactDetailsForm",value:function(){document.querySelector(".add-contact-details").style.display="none",this.setState({contactDetailsForm:!0})}},{key:"recordContactDetails",value:function(e){this.removeContactDetailsForm();var t=this.state.recordContactDetails.concat({key:j()(),id:j()(),formObj:e});this.setState({recordContactDetails:t})}},{key:"removeContactDetailsForm",value:function(){this.setState({contactDetailsForm:!1}),document.querySelector(".add-contact-details").style.display="block"}},{key:"addEducationForm",value:function(){document.querySelector(".add-education").style.display="none",this.setState({educationForm:!0})}},{key:"removeEducationForm",value:function(){this.setState({educationForm:!1}),document.querySelector(".add-education").style.display="block"}},{key:"recordEducation",value:function(e){this.removeEducationForm();var t=this.state.recordEducation.concat({key:j()(),id:j()(),formObj:e});this.setState({recordEducation:t})}},{key:"deleteComponentsFromState",value:function(e,t){var o,i=0;this.state[t].forEach((function(t){t.id==e&&(o=i),i++}));var r=this.state[t];r.splice(o,1),this.setState(Object(s.a)({},t,r))}},{key:"modifyStateFormObj",value:function(e,t,o,i,r){var a=this;console.log(e,t,o,i,r);var n=r||"NoBulletPointKey";if("NoBulletPointKey"===n){var c=0;this.state[t].forEach((function(r){if(r.id==e){var n=r;n.formObj[o]=i;var l=a.state[t];l[c]=n,a.setState(Object(s.a)({},t,l),(function(){this.state[t].forEach((function(e){console.log(e)}))}))}c++}))}else{var l=0;this.state[t].forEach((function(r){if(r.id==e){var c=r;c.formObj[o][n]=i;var d=a.state[t];d[l]=c,a.setState(Object(s.a)({},t,d))}l++}))}}},{key:"addWorkExperienceForm",value:function(){document.querySelector(".add-work-experience").style.display="none",this.setState({workExperienceForm:!0})}},{key:"removeWorkExperienceForm",value:function(){this.setState({workExperienceForm:!1}),document.querySelector(".add-work-experience").style.display="block"}},{key:"recordWorkExperience",value:function(e){this.removeWorkExperienceForm();var t=this.state.recordWorkExperience.concat({key:j()(),id:j()(),formObj:e});this.setState({recordWorkExperience:t})}},{key:"addSkillsForm",value:function(){document.querySelector(".add-skills").style.display="none",this.setState({skillsForm:!0})}},{key:"removeSkillsForm",value:function(){this.setState({skillsForm:!1}),document.querySelector(".add-skills").style.display="block"}},{key:"recordSkills",value:function(e){var t=this.state.recordSkills.concat({key:j()(),id:j()(),formObj:e});this.setState({recordSkills:t})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"contact-container",children:[this.state.recordContactDetails.map((function(t){return Object(b.jsx)(O,{id:t.id,formObj:t.formObj,modifyStateFormObj:e.modifyStateFormObj},t.key)})),this.state.contactDetailsForm&&Object(b.jsx)(y,{removeContactDetailsForm:this.removeContactDetailsForm,recordContactDetails:this.recordContactDetails}),Object(b.jsx)("button",{className:"add-contact-details",onClick:this.addContactDetailsForm,children:"+ Add Contact Details"})]}),Object(b.jsxs)("div",{className:"education-container",children:[Object(b.jsx)("div",{className:"title",children:"EDUCATION"}),this.state.recordEducation.map((function(t){return Object(b.jsx)(v,{id:t.id,formObj:t.formObj,modifyStateFormObj:e.modifyStateFormObj,deleteComponentsFromState:e.deleteComponentsFromState},t.key)})),this.state.educationForm&&Object(b.jsx)(S,{removeEducationForm:this.removeEducationForm,recordEducation:this.recordEducation}),Object(b.jsx)("button",{className:"add-education",onClick:this.addEducationForm,children:"+ Add Education"})]}),Object(b.jsxs)("div",{className:"work-experience-container",children:[Object(b.jsx)("div",{className:"title",children:"WORK EXPERIENCE"}),this.state.recordWorkExperience.map((function(t){return Object(b.jsx)(x,{id:t.id,formObj:t.formObj,modifyStateFormObj:e.modifyStateFormObj,deleteComponentsFromState:e.deleteComponentsFromState},t.key)})),this.state.workExperienceForm&&Object(b.jsx)(k,{removeWorkExperienceForm:this.removeWorkExperienceForm,recordWorkExperience:this.recordWorkExperience}),Object(b.jsx)("button",{className:"add-work-experience",onClick:this.addWorkExperienceForm,children:"+ Add Work Experience"})]}),Object(b.jsxs)("div",{className:"skills-container",children:[Object(b.jsx)("div",{className:"title",children:"SKILLS"}),this.state.recordSkills.map((function(t){return Object(b.jsx)(F,{id:t.id,formObj:t.formObj,modifyStateFormObj:e.modifyStateFormObj,deleteComponentsFromState:e.deleteComponentsFromState},t.key)})),this.state.skillsForm&&Object(b.jsx)(E,{removeSkillsForm:this.removeSkillsForm,recordSkills:this.recordSkills}),Object(b.jsx)("button",{className:"add-skills",onClick:this.addSkillsForm,children:"+ Add Skills"})]})]})}}]),o}(i.Component);n.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a1880f4b.chunk.js.map