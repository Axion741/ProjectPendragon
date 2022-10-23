namespace ProjectPendragonBackend.Models
{
    public class UpdateCharacterRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int YearBorn { get; set; }
        public EGender Gender { get; set; }
        public int BirthNumber { get; set; }
        public string Home { get; set; }
        public ECulture Culture { get; set; }
        public string? FathersName { get; set; }
        public EReligion Religion { get; set; }
        public Guid LiegeLord { get; set ;}
        public EClass Class { get; set; } 
        public Traits Traits { get; set; }
        public List<Passion> Passions { get; set; }
        public Attributes Attributes { get; set; }
        public string? DistinctiveFeatures { get; set; }
        public Skills Skills { get; set; }
        public int Glory { get; set; }
        public Wealth? Wealth { get; set; }
    }
}