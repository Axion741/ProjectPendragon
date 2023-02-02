namespace ProjectPendragonBackend.Models
{
    public class Attributes
    {
        public Guid Id { get; set; }
        public Guid CharacterId { get; set; }
        public Character Character { get; set; }
        public int Siz { get; set; }
        public int Dex { get; set; }
        public int Str { get; set; }
        public int Con { get; set; }
        public int App { get; set; }
    }
}