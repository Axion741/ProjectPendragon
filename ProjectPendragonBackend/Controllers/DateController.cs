using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectPendragonBackend.Data;

namespace ProjectPendragonBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DateController : ControllerBase
    {
        private readonly ProjectPendragonDbContext _projectPendragonDbContext;
        private readonly IMapper _mapper;

        public DateController(ProjectPendragonDbContext projectPendragonDbContext, IMapper mapper)
        {
            _projectPendragonDbContext = projectPendragonDbContext;
            _mapper = mapper;
        }

        [HttpGet("current")]
        public async Task<IActionResult> GetCurrentYear()
        {
            var year = await this._projectPendragonDbContext.Dates.SingleOrDefaultAsync(f => f.Current == true);

            if (year == null)
                return NotFound();

            return Ok(year.Year);
        }
    }
}