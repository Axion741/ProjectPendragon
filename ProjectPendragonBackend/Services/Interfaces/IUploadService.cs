namespace ProjectPendragonBackend.Services.Interfaces
{
    public interface IUploadService
    {
        Task<bool> DeleteUploadAsync(Guid id);
    }
}
