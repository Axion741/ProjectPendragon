namespace ProjectPendragonBackend.Models
{
    public class Wealth
    {
        public Guid Id { get; set; }
        public Guid CharacterId { get; set; }
        public int Libra { get; set; }
        public int Shilling { get; set; }
        public int Denari { get; set; }
    }
}