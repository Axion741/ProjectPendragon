namespace ProjectPendragonBackend.Models
{
    public class Passion
    {
        public Guid Id { get; set; }
        public int Value { get; set; }
        public string Description { get; set; }
        public Guid CharacterId { get; set; }
        public Character Character { get; set; }
    }
}