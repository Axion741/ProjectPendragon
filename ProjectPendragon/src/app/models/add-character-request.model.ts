import { EGender } from "./e-gender";

export interface AddCharacterRequest {
    name: string;
    age: number;
    gender: EGender;
}