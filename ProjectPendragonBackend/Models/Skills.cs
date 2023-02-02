namespace ProjectPendragonBackend.Models
{
    public class Skills
    {
        public Guid SkillsId { get; set; }
        public Guid CharacterId { get; set; }
        public Character Character { get; set; }
        public List<CoreSkill> Core { get; set; }
        public List<CombatSkill> Combat { get; set; }

        public Skills()
        {
        }

        public void SetIds(Guid id)
        {
            this.CharacterId = id;

            foreach (var skill in this.Core)
            {
                skill.SkillsId = this.SkillsId;
            }

            foreach (var skill in this.Combat)
            {
                skill.SkillsId = this.SkillsId;
            }
        }
    }
}