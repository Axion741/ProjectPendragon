namespace ProjectPendragonBackend.Models
{
    public class CombatSkill
    {
        public Guid CombatSkillId { get; set; }
        public Guid SkillsId { get; set; }
        public Skills Skills { get; set; }
        public string Name { get; set; }
        public int Value { get; set; }
        public bool Checked { get; set; }

        public CombatSkill()
        {
        }
    }
}