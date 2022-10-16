namespace ProjectPendragonBackend.Models
{
    public class CreateCharacterRequest
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public EGender Gender { get; set; }
    }
}