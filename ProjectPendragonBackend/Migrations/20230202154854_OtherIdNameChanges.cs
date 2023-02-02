using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPendragonBackend.Migrations
{
    public partial class OtherIdNameChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SkillsId",
                table: "Skills",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CharacterId",
                table: "Characters",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Skills",
                newName: "SkillsId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Characters",
                newName: "CharacterId");
        }
    }
}
