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

        public CharacterController(ProjectPendragonDbContext projectPendragonDbContext)
        {
            _projectPendragonDbContext = projectPendragonDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetCharacters()
        {
            var characters = await _projectPendragonDbContext.Characters.ToListAsync();

            return Ok(characters);
        }
    }
}