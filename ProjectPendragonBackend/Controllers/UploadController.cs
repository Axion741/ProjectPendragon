using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using ProjectPendragonBackend.Data;
using ProjectPendragonBackend.Models;
using System.Net.Http.Headers;

namespace ProjectPendragonBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly List<string> _fileTypes = new List<string> { ".jpeg", ".jpg", ".png" };

        private readonly ProjectPendragonDbContext _projectPendragonDbContext;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public UploadController(ProjectPendragonDbContext projectPendragonDbContext, IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
            _projectPendragonDbContext = projectPendragonDbContext;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUpload(Guid id)
        {
            var upload = await this._projectPendragonDbContext.Uploads.SingleOrDefaultAsync(s => s.Id == id);

            if (upload == null)
                return Ok(null);

            //TODO: Return Image
            string webRootPath = _webHostEnvironment.WebRootPath;
            string uploadsDir = Path.Combine(webRootPath, "Uploads");
            string imageDir = Path.Combine(uploadsDir, "Images");
            string filePath = Path.Combine(imageDir, upload.FilePath);

            if (!System.IO.File.Exists(filePath))
                return NotFound();

            var image = System.IO.File.OpenRead(filePath);
            new FileExtensionContentTypeProvider().TryGetContentType(image.Name, out var contentType);

            if (contentType == null)
                return BadRequest("Invalid ContentType");

            return File(image, contentType);
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> UploadAsync([FromRoute] string id)
        {
            if (!Request.Form.Files.Any())
                return BadRequest("No files found in the request");

            if (Request.Form.Files.Count > 1)
                return BadRequest("Cannot upload more than one file at a time");

            if (Request.Form.Files[0].Length <= 0)
                return BadRequest("Invalid file length, seems to be empty");

            if (Guid.TryParse(id, out var guid) == false)
                return BadRequest("Invalid ID");

            try
            {
                string webRootPath = _webHostEnvironment.WebRootPath;
                string uploadsDir = Path.Combine(webRootPath, "Uploads");
                string imageDir = Path.Combine(uploadsDir, "Images");

                // wwwroot/uploads/
                if (!Directory.Exists(uploadsDir))
                    Directory.CreateDirectory(uploadsDir);

                if (!Directory.Exists(imageDir))
                    Directory.CreateDirectory(imageDir);

                IFormFile file = Request.Form.Files[0];
                string ext = System.IO.Path.GetExtension(file.FileName);

                if (!this._fileTypes.Contains(ext.ToLowerInvariant()))
                    return BadRequest("Invalid FileType");

                string fileName = id + ext;
                string fullPath = Path.Combine(imageDir, fileName);

                var buffer = 1024 * 1024;
                using var stream = new FileStream(fullPath, FileMode.Create, FileAccess.Write, FileShare.None, buffer, useAsync: false);
                await file.CopyToAsync(stream);
                await stream.FlushAsync();

                var result = await this._projectPendragonDbContext.Uploads.SingleOrDefaultAsync(s => s.Id == guid);

                if (result == null)
                {
                    result = new Upload
                    {
                        Id = guid,
                        FilePath = fileName
                    };

                    await _projectPendragonDbContext.Uploads.AddAsync(result);
                }
                else
                {
                    result.FilePath = fileName;
                }
            
                await _projectPendragonDbContext.SaveChangesAsync();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Upload failed: " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUpload(Guid id)
        {
            var upload = await this._projectPendragonDbContext.Uploads.SingleOrDefaultAsync(s => s.Id == id);

            if (upload == null)
                return NotFound();

            //TODO: Return Image
            string webRootPath = _webHostEnvironment.WebRootPath;
            string uploadsDir = Path.Combine(webRootPath, "Uploads");
            string imageDir = Path.Combine(uploadsDir, "Images");
            string filePath = Path.Combine(imageDir, upload.FilePath);

            if (!System.IO.File.Exists(filePath))
                return NotFound();

            System.IO.File.Delete(filePath);
            this._projectPendragonDbContext.Remove(upload);
            await this._projectPendragonDbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
