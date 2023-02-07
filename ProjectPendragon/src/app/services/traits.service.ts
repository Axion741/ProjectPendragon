import { Injectable } from '@angular/core';
import { Traits } from '../models/character/traits';

@Injectable({
  providedIn: 'root'
})
export class TraitsService {

  constructor() { }

  public getTrait(trait: string, traits: Traits): number {
    var traitValue = 0;

    switch (trait) {
        case "chaste":
            traitValue = traits.chaste;
            break;
         
        case "energetic":
            traitValue = traits.energetic;
            break;
            
        case "forgiving":
            traitValue = traits.forgiving;
            break;
        
        case "generous":
            traitValue = traits.generous;
            break;
            
        case "honest":
            traitValue = traits.honest;
            break;
            
        case "just":
            traitValue = traits.just;
            break;
            
        case "merciful":
            traitValue = traits.merciful;
            break;
            
        case "modest":
            traitValue = traits.modest;   
            break;
            
        case "pious":
            traitValue = traits.pious;  
            break;

        case "prudent":
            traitValue = traits.prudent;  
            break; 
            
        case "temperate":
            traitValue = traits.temperate; 
            break;

        case "trusting":
            traitValue = traits.trusting;  
            break; 
            
        case "valorous":
            traitValue = traits.valorous; 
            break;

        case "lustful":
            traitValue = 20 - traits.chaste;
            break;
            
        case "lazy":
            traitValue = 20 - traits.energetic;
            break;
            
        case "vengeful":
            traitValue = 20 - traits.forgiving;
            break;
        
        case "selfish":
            traitValue = 20 - traits.generous;
            break;
            
        case "deceitful":
            traitValue = 20 - traits.honest;
            break;
            
        case "arbitrary":
            traitValue = 20 - traits.just;
            break;
            
        case "cruel":
            traitValue = 20 - traits.merciful;
            break;
            
        case "proud":
            traitValue = 20 - traits.modest;   
            break;
            
        case "worldly":
            traitValue = 20 - traits.pious;  
            break;

        case "reckless":
            traitValue = 20 - traits.prudent;  
            break; 
            
        case "indulgent":
            traitValue = 20 - traits.temperate; 
            break;

        case "suspicious":
            traitValue = 20 - traits.trusting;  
            break; 
            
        case "cowardly":
            traitValue = 20 - traits.valorous; 
            break;
    
        default:
            break;
    }

    return traitValue;
}
}
