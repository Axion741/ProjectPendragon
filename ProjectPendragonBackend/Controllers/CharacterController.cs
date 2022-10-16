using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectPendragonBackend.Data;
using ProjectPendragonBackend.Models;

namespace ProjectPendragonBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ProjectPendragonDbContext _projectPendragonDbContext;
        private readonly IMapper _mapper;

        public CharacterController(ProjectPendragonDbContext projectPendragonDbContext, IMapper mapper)
        {
            _projectPendragonDbContext = projectPendragonDbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetCharacters()
        {
            var characters = await _projectPendragonDbContext.Characters.ToListAsync();

            return Ok(characters);
        }

        [HttpPost]
        public async Task<IActionResult> AddCharacter(CreateCharacterRequest request)
        {
            var character = this._mapper.Map<Character>(request);
            character.Id = Guid.NewGuid();

            await _projectPendragonDbContext.Characters.AddAsync(character);
            await _projectPendragonDbContext.SaveChangesAsync();

            return Ok(character);
        }
    }
}