import { EGender } from "./e-gender";

export interface UpdateCharacterRequest {
    id: string,
    name: string;
    age: number;
    gender: EGender;
}