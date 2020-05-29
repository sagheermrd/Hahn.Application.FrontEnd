import { IApplicant } from "./model/IApplicant";
import {HttpClient, json} from 'aurelia-fetch-client';
import { Applicant } from "components/applicant";

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


export class App {
  public header="Applicant"
  public applicants:IApplicant[]=[]

  constructor(){
    this.ListAllApplicants();
  }
   ListAllApplicants(){

    httpClient.fetch(`${root}applicant`)
    .then(response => {
      response.text().then((data) => {
        var json= JSON.parse(data);
        this.applicants=json.data;
        console.log("data:" + data);
      });
    });
      return this.applicants;
  }
  
  edit(applicant:IApplicant){
    var app=new Applicant(applicant);
  }
  deleteApplicant(applicant:IApplicant){
    debugger;
    httpClient.fetch(root+'applicant/'+applicant.id, {
       method: "DELETE"
    }).then(response => {
      response.text().then((data) => {
        var json=JSON.parse(data);
        window.location.reload();
      });
  });
}

}
