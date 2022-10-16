using AutoMapper;
using ProjectPendragonBackend.Models;

namespace ProjectPendragonBackend
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateCharacterRequest, Character>();
        }
    }
}
