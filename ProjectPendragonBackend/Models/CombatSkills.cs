namespace ProjectPendragonBackend.Models
{
    public class CombatSkills
    {
        public Guid Id { get; set; }
        public int Battle { get; set; }
        public int Siege { get; set; }
        public int Horsemanship { get; set; }
        public int Sword { get; set; }
        public int Lance { get; set; }
        public int Spear { get; set; }
        public int GreatSpear { get; set; }
        public int Dagger { get; set; }
        public int SpearExpertise { get; set; }
        public int GreatWeapon { get; set; }
    }
}