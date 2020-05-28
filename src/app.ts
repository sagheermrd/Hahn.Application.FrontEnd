import { IApplicant } from "./model/IApplicant";

export class App {
  public header="Applicant"
  public applicants:IApplicant[]=[]
  public message: string = 'Hello World!';
  constructor(){
    this.ListAllApplicants();
  }
   ListAllApplicants(){
      this.applicants=[
        {id:12,name:"aaaaa",familyName:"fsfafdf",address:"dfsfdasffdsf",age:45,emailAddress:"sfdsf@dd.co",hired:true,countryOfOrigin:"England"},
        {id:11,name:"bbbbb",familyName:"fsfafdf",address:"dfsfdasffdsf",age:35,emailAddress:"sfdsf@dd.co",hired:true,countryOfOrigin:"England"},
        {id:13,name:"aasdddaaa",familyName:"fsfafdf",address:"dfsfdasffdsf",age:25,emailAddress:"sfdsf@dd.co",hired:true,countryOfOrigin:"England"}
      ]
      return this.applicants;
  }
 NavigateToAdd(){

 }
}
