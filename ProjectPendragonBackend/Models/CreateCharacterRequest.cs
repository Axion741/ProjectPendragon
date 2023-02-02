namespace ProjectPendragonBackend.Models
{
    public class CreateCharacterRequest
    {
        public string Name { get; set; }
        public int YearBorn { get; set; }
        public int Gender { get; set; }
        public int BirthNumber { get; set; }
        public string Home { get; set; }
        public int Culture { get; set; }
        public string? FathersName { get; set; }
        public int Religion { get; set; }
        public Guid? LiegeLord { get; set ;}
        public int Class { get; set; } 
        public Traits Traits { get; set; }
        public List<Passion> Passions { get; set; }
        public Attributes Attributes { get; set; }
        public string? DistinctiveFeatures { get; set; }
        public Skills Skills { get; set; }
        public int Glory { get; set; }
        public Wealth? Wealth { get; set; }
    }
}