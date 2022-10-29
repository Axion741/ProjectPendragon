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

            character = SetCharacterIds(character, character.Id);

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
            character.YearBorn = request.YearBorn;
            character.Gender = request.Gender;
            character.BirthNumber = request.BirthNumber;
            character.Home = request.Home;
            character.Culture = request.Culture;
            character.FathersName = request.FathersName;
            character.Religion = request.Religion;
            character.LiegeLord = request.LiegeLord;
            character.Class = request.Class;
            character.Traits = request.Traits;
            character.Passions = request.Passions;
            character.Attributes = request.Attributes;
            character.DistinctiveFeatures = request.DistinctiveFeatures;
            character.Skills = request.Skills;
            character.Glory = request.Glory;
            character.Wealth = request.Wealth;

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

        private Character SetCharacterIds(Character character, Guid id)
        {
            character.Attributes.Id = id;
            character.Skills.Id = id;
            character.Skills.Combat.Id = id;
            character.Traits.Id = id;
            character.Wealth.Id = id;

            return character;
        }
    }
}