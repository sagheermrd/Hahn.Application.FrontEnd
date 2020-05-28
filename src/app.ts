import { IApplicant } from "./model/IApplicant";
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
const root:string='https://localhost:5000/api';

export class App {
  public header="Applicant"
  public applicants:IApplicant[]=[]

  constructor(){
    this.ListAllApplicants();
  }
   ListAllApplicants(){

    httpClient.fetch(`${root}/applicant`,{mode:'no-cors'})
    .then(response => {
      console.log(response)
     return response.json()
    })
    .then(data => {
      console.log(data);
    });

      this.applicants=[
        {id:12,name:"aaaaa",familyName:"fsfafdf",address:"dfsfdasffdsf",age:45,emailAddress:"sfdsf@dd.co",hired:true,countryOfOrigin:"England"},
        {id:11,name:"bbbbb",familyName:"fsfafdf",address:"dfsfdasffdsf",age:35,emailAddress:"sfdsf@dd.co",hired:true,countryOfOrigin:"England"},
        {id:13,name:"aasdddaaa",familyName:"fsfafdf",address:"dfsfdasffdsf",age:25,emailAddress:"sfdsf@dd.co",hired:true,countryOfOrigin:"England"}
      ]
      return this.applicants;
  }

}
