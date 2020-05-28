import { IApplicant } from "model/IApplicant";

export class Applicant {
  applicantModel:IApplicant;
  constructor() {
    
  }

  addApplicant(){
    console.log(this.applicantModel.name);
  }
  validateApplicant(applicant:IApplicant){

  }
}
