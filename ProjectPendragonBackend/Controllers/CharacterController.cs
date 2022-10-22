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
        public async Task<IActionResult> GetCharactersAsync()
        {
            var characters = await _projectPendragonDbContext.Characters.ToListAsync();

            return Ok(characters);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCharacterByIdAsync([FromRoute] Guid id)
        {
            var character = await this._projectPendragonDbContext.Characters.FirstOrDefaultAsync(x => x.Id == id);

            if (character == null)
                return NotFound();

            return Ok(character);
        }

        [HttpPost]
        public async Task<IActionResult> AddCharacterAsync(CreateCharacterRequest request)
        {
            var character = this._mapper.Map<Character>(request);
            character.Id = Guid.NewGuid();

            await _projectPendragonDbContext.Characters.AddAsync(character);
            await _projectPendragonDbContext.SaveChangesAsync();

            return Ok(character);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCharacterAsync([FromRoute] Guid id, UpdateCharacterRequest request)
        {
            var character = await _projectPendragonDbContext.Characters.FindAsync(id);

            if (character == null)
                return NotFound();

            character.Name = request.Name;
            character.Age = request.Age;
            character.Gender = request.Gender;

            await _projectPendragonDbContext.SaveChangesAsync();

            return Ok(character);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCharacterAsync([FromRoute] Guid id)
        {
            var character = await _projectPendragonDbContext.Characters.FindAsync(id);

            if (character == null)
                return NotFound();

            _projectPendragonDbContext.Characters.Remove(character);
            await _projectPendragonDbContext.SaveChangesAsync();

            return Ok();
        }
    }
}