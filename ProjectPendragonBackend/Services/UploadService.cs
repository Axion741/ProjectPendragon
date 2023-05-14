using Microsoft.EntityFrameworkCore;
using ProjectPendragonBackend.Data;
using ProjectPendragonBackend.Services.Interfaces;

namespace ProjectPendragonBackend.Services
{
    public class UploadService: IUploadService
    {
        private readonly List<string> _fileTypes = new List<string> { ".jpeg", ".jpg", ".png" };

        private readonly ProjectPendragonDbContext _projectPendragonDbContext;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public UploadService(ProjectPendragonDbContext projectPendragonDbContext, IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
            _projectPendragonDbContext = projectPendragonDbContext;
        }

        public async Task<bool> DeleteUploadAsync(Guid id)
        {
            var upload = await this._projectPendragonDbContext.Uploads.SingleOrDefaultAsync(s => s.Id == id);

            if (upload == null)
                return false;

            //TODO: Return Image
            string webRootPath = _webHostEnvironment.WebRootPath;
            string uploadsDir = Path.Combine(webRootPath, "Uploads");
            string imageDir = Path.Combine(uploadsDir, "Images");
            string filePath = Path.Combine(imageDir, upload.FilePath);

            if (!System.IO.File.Exists(filePath))
                return false;

            System.IO.File.Delete(filePath);
            this._projectPendragonDbContext.Remove(upload);
            await this._projectPendragonDbContext.SaveChangesAsync();

            return true;
        }
    }
}
