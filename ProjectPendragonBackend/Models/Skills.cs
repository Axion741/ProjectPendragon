namespace ProjectPendragonBackend.Models
{
    public class Skills
    {
        public Guid Id { get; set; }
        public int Awareness { get; set; }
        public int Boating { get; set; }
        public int Chirurgury { get; set; }
        public int Compose { get; set; }
        public int Courtesy { get; set; }
        public int Dancing { get; set; }
        public int FaerieLore { get; set; }
        public int Falconry { get; set; }
        public int Fashion { get; set; }
        public int FirstAid { get; set; }
        public int Flirting { get; set; }
        public int Folklore { get; set; }
        public int Gaming { get; set; }
        public int Heraldry { get; set; }
        public int Hunting { get; set; }
        public int Industry { get; set; }
        public int Intrigue { get; set; }
        public int Orate { get; set; }
        public int PlayInstrument { get; set; }
        public int ReadLatin { get; set; }
        public int Recognize { get; set; }
        public int Religion { get; set; }
        public int Romance { get; set; }
        public int Singing { get; set; }
        public int Stewardship { get; set; }
        public int Swimming { get; set; }
        public int Tourney { get; set; }
        public int Distaff { get; set; }
        public CombatSkills Combat { get; set; }
    }
}