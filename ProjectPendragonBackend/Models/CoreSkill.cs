namespace ProjectPendragonBackend.Models
{
    public class CoreSkill
    {
        public Guid Id { get; set; }
        public Guid SkillsId { get; set; }
        public string Name { get; set; }
        public int Value { get; set; }
        public bool Checked { get; set; }

        public CoreSkill()
        {
        }
    }
}