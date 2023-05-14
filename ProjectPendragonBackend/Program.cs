using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using ProjectPendragonBackend;
using ProjectPendragonBackend.Data;

var opts = new WebApplicationOptions { WebRootPath = "wwwroot" };

var builder = WebApplication.CreateBuilder(opts);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ProjectPendragonDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("ProjectPendragonConnectionString")));

// Auto Mapper Configurations
var mappingConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MappingProfile());
});

IMapper mapper = mappingConfig.CreateMapper();
builder.Services.AddSingleton(mapper);

builder.Services.AddScoped<ProjectPendragonBackend.Services.Interfaces.IUploadService, ProjectPendragonBackend.Services.UploadService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.UseAuthorization();

app.UseStaticFiles();

string uploadsDir = Path.Combine(app.Environment.WebRootPath, "Uploads");
if (!Directory.Exists(uploadsDir))
    Directory.CreateDirectory(uploadsDir);

app.UseStaticFiles(new StaticFileOptions()
{
    RequestPath = "/Images",
    FileProvider = new PhysicalFileProvider(uploadsDir)
});

app.MapControllers();

app.Run();
