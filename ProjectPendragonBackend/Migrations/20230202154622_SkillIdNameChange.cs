using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPendragonBackend.Migrations
{
    public partial class SkillIdNameChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CoreSkillId",
                table: "CoreSkill",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CombatSkillId",
                table: "CombatSkill",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CoreSkill",
                newName: "CoreSkillId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CombatSkill",
                newName: "CombatSkillId");
        }
    }
}
