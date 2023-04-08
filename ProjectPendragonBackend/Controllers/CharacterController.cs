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
            var character = await this._projectPendragonDbContext.Characters
                .Include(i => i.Attributes)
                .Include(i => i.Skills)
                .ThenInclude(t => t.Core)
                .Include(i => i.Skills)
                .ThenInclude(t => t.Combat)
                .Include(i => i.Traits)
                .Include(i => i.Wealth)
                .Include(i => i.Passions)
                .FirstOrDefaultAsync(x => x.Id == id);

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
            var character = await this._projectPendragonDbContext.Characters
                .Include(i => i.Attributes)
                .Include(i => i.Skills)
                .ThenInclude(t => t.Core)
                .Include(i => i.Skills)
                .ThenInclude(t => t.Combat)
                .Include(i => i.Traits)
                .Include(i => i.Wealth)
                .Include(i => i.Passions)
                .FirstOrDefaultAsync(x => x.Id == id);

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
            character.Attributes = request.Attributes;
            character.DistinctiveFeatures = request.DistinctiveFeatures;
            character.Skills = request.Skills;
            character.Glory = request.Glory;
            character.Wealth = request.Wealth;

            var oldPassionIds = character.Passions.Select(s => s.Id);
            character.Passions = request.Passions;

            foreach (var passion in character.Passions)
            { 
                if (oldPassionIds.Contains(passion.Id) == false)
                {
                    passion.Id = Guid.Empty;
                }
            }

            character = this.SetCharacterIds(character, character.Id);

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
            character.Attributes.CharacterId = id;
            character.Skills.SetIds(id);
            character.Traits.CharacterId = id;
            character.Wealth.CharacterId = id;

            foreach (var passion in character.Passions)
            {
                passion.CharacterId = id;
            }

            return character;
        }
    }
}