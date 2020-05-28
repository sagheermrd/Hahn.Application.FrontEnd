import { IApplicant } from "model/IApplicant";

import {HttpClient, json} from 'aurelia-fetch-client';
let httpClient = new HttpClient();
const root:string='https://localhost:5000/api/';

export class Applicant {
  applicantModel:IApplicant;
  Error:IApplicant;
  constructor() {
    this.Error=null;
  }

  addApplicant(){
console.log(this.applicantModel)
    if(this.applicantModel!==undefined){

    httpClient.fetch(root+'applicant', {
       method: "POST",
       body: JSON.stringify(this.applicantModel),
       mode:'no-cors',
    })
  
    .then(response => response.json())
    .then(data => {
       console.log(data);
    });
  }
  }
  updateApplicant(){
    httpClient.fetch(root+'applicant/'+this.applicantModel.id, {
       method: "PUT",
       body: JSON.stringify(this.applicantModel)
    })
  
    .then(response => response.json())
    .then(data => {
       console.log(data);
    });
  }
  deleteApplicant(){
    httpClient.fetch(root+'applicant/'+this.applicantModel.id, {
       method: "DELETE"
    })
  
    .then(response => response.json())
    .then(data => {
       console.log(data);
    });
  }
  
  validate(model:IApplicant){
      httpClient.fetch(`https://restcountries.eu/rest/v2/name/${model.countryOfOrigin}?fullText=true`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
   }
  
}
