import { Pipe, PipeTransform } from "@angular/core";
import { EGender } from "../models/e-gender";

@Pipe({
    name: 'genderPipe'
})

export class GenderPipe implements PipeTransform {
    transform(value: EGender) : string {
        switch (value) {
            case EGender.Male:
                return "Male";
        
            case EGender.Female:
                return "Female";
                
            default:
                return "";
        }
    }
}