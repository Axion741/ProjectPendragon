import { EGender } from "./e-gender";

export interface Character {
    id: string;
    name: string;
    age: number;
    gender: EGender;
}