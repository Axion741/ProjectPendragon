namespace ProjectPendragonBackend.Models
{
    public class Character
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public EGender Gender { get; set; }
    }
}