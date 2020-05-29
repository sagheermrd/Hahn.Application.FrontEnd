import { IApplicant } from "model/IApplicant";
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
const root:string='https://localhost:5000/api/';


httpClient.configure(config => {
  config
    .withDefaults({
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT'
      }
    })
});

export class Applicant {
  applicantModel:IApplicant;
  Error:IApplicant;
  age:number;
  constructor(applicant:IApplicant) {
    this.Error=null;
    this.applicantModel=applicant;
  }

  addApplicant(){
    var valid=this.validate(this.applicantModel);

    if(this.applicantModel!==undefined){
      this.applicantModel.age=this.age*1;
    httpClient.fetch(root+'applicant', {
       method: "POST",
       body: JSON.stringify(this.applicantModel)
    }).then(response => {
      if(response.status==201){
        window.location.reload();
      }
      response.text().then((data) => {
        console.log("data:" + data);
      });
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
  
  validate(model:IApplicant){
      httpClient.fetch(`https://restcountries.eu/rest/v2/name/${model.countryOfOrigin}?fullText=true`)
      .then(response => {
        response.text().then((data) => {
          console.log("data:" + data);
        });
      });
   }
  
}
