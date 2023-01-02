export class Traits {
    id: string;
    chaste: number;
    energetic: number;
    forgiving: number;
    generous: number;
    honest: number;
    just: number;
    merciful: number;
    modest: number;
    pious: number;
    prudent: number;
    temperate: number;
    trusting: number;
    valorous: number;

    constructor() {
        this.id = crypto.randomUUID();
        this.chaste = 10;
        this.energetic = 10;
        this.forgiving = 10;
        this.generous = 10;
        this.honest = 10;
        this.just = 10;
        this.merciful = 10;
        this.modest = 10;
        this.pious = 10;
        this.prudent = 10;
        this.temperate = 10;
        this.trusting = 10;
        this.valorous = 10;
    }

    getTrait(trait: string): number {
        var traitValue = 0;

        switch (trait) {
            case "chaste":
                traitValue = this.chaste;
                break;
             
            case "energetic":
                traitValue = this.energetic;
                break;
                
            case "forgiving":
                traitValue = this.forgiving;
                break;
            
            case "generous":
                traitValue = this.generous;
                break;
                
            case "honest":
                traitValue = this.honest;
                break;
                
            case "just":
                traitValue = this.just;
                break;
                
            case "merciful":
                traitValue = this.merciful;
                break;
                
            case "modest":
                traitValue = this.modest;   
                break;
                
            case "pious":
                traitValue = this.pious;  
                break;

            case "prudent":
                traitValue = this.prudent;  
                break; 
                
            case "temperate":
                traitValue = this.temperate; 
                break;

            case "trusting":
                traitValue = this.trusting;  
                break; 
                
            case "valorous":
                traitValue = this.valorous; 
                break;

            case "lustful":
                traitValue = 20 - this.chaste;
                break;
                
            case "lazy":
                traitValue = 20 - this.energetic;
                break;
                
            case "vengeful":
                traitValue = 20 - this.forgiving;
                break;
            
            case "selfish":
                traitValue = 20 - this.generous;
                break;
                
            case "deceitful":
                traitValue = 20 - this.honest;
                break;
                
            case "arbitrary":
                traitValue = 20 - this.just;
                break;
                
            case "cruel":
                traitValue = 20 - this.merciful;
                break;
                
            case "proud":
                traitValue = 20 - this.modest;   
                break;
                
            case "worldly":
                traitValue = 20 - this.pious;  
                break;

            case "reckless":
                traitValue = 20 - this.prudent;  
                break; 
                
            case "indulgent":
                traitValue = 20 - this.temperate; 
                break;

            case "suspicious":
                traitValue = 20 - this.trusting;  
                break; 
                
            case "cowardly":
                traitValue = 20 - this.valorous; 
                break;
        
            default:
                break;
        }

        return traitValue;
    }
}