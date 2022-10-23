using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPendragonBackend.Migrations
{
    public partial class UpdatedCharacter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Age",
                table: "Characters",
                newName: "YearBorn");

            migrationBuilder.AddColumn<Guid>(
                name: "AttributesId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "BirthNumber",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Class",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Culture",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "DistinctiveFeatures",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FathersName",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Glory",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Home",
                table: "Characters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<Guid>(
                name: "LiegeLord",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "Religion",
                table: "Characters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "SkillsId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "TraitsId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "WealthId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Attributes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Siz = table.Column<int>(type: "int", nullable: false),
                    Dex = table.Column<int>(type: "int", nullable: false),
                    Str = table.Column<int>(type: "int", nullable: false),
                    Con = table.Column<int>(type: "int", nullable: false),
                    App = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attributes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CombatSkills",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Battle = table.Column<int>(type: "int", nullable: false),
                    Siege = table.Column<int>(type: "int", nullable: false),
                    Horsemanship = table.Column<int>(type: "int", nullable: false),
                    Sword = table.Column<int>(type: "int", nullable: false),
                    Lance = table.Column<int>(type: "int", nullable: false),
                    Spear = table.Column<int>(type: "int", nullable: false),
                    GreatSpear = table.Column<int>(type: "int", nullable: false),
                    Dagger = table.Column<int>(type: "int", nullable: false),
                    SpearExpertise = table.Column<int>(type: "int", nullable: false),
                    GreatWeapon = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CombatSkills", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Passion",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CharacterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Passion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Passion_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Traits",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Chaste = table.Column<int>(type: "int", nullable: false),
                    Energetic = table.Column<int>(type: "int", nullable: false),
                    Forgiving = table.Column<int>(type: "int", nullable: false),
                    Generous = table.Column<int>(type: "int", nullable: false),
                    Honest = table.Column<int>(type: "int", nullable: false),
                    Just = table.Column<int>(type: "int", nullable: false),
                    Merciful = table.Column<int>(type: "int", nullable: false),
                    Modest = table.Column<int>(type: "int", nullable: false),
                    Pious = table.Column<int>(type: "int", nullable: false),
                    Prudent = table.Column<int>(type: "int", nullable: false),
                    Temperate = table.Column<int>(type: "int", nullable: false),
                    Trusting = table.Column<int>(type: "int", nullable: false),
                    Valorous = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Traits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Wealth",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Libra = table.Column<int>(type: "int", nullable: false),
                    Shilling = table.Column<int>(type: "int", nullable: false),
                    Denari = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wealth", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Awareness = table.Column<int>(type: "int", nullable: false),
                    Boating = table.Column<int>(type: "int", nullable: false),
                    Chirurgury = table.Column<int>(type: "int", nullable: false),
                    Compose = table.Column<int>(type: "int", nullable: false),
                    Courtesy = table.Column<int>(type: "int", nullable: false),
                    Dancing = table.Column<int>(type: "int", nullable: false),
                    FaerieLore = table.Column<int>(type: "int", nullable: false),
                    Falconry = table.Column<int>(type: "int", nullable: false),
                    Fashion = table.Column<int>(type: "int", nullable: false),
                    FirstAid = table.Column<int>(type: "int", nullable: false),
                    Flirting = table.Column<int>(type: "int", nullable: false),
                    Folklore = table.Column<int>(type: "int", nullable: false),
                    Gaming = table.Column<int>(type: "int", nullable: false),
                    Heraldry = table.Column<int>(type: "int", nullable: false),
                    Hunting = table.Column<int>(type: "int", nullable: false),
                    Industry = table.Column<int>(type: "int", nullable: false),
                    Intrigue = table.Column<int>(type: "int", nullable: false),
                    Orate = table.Column<int>(type: "int", nullable: false),
                    PlayInstrument = table.Column<int>(type: "int", nullable: false),
                    ReadLatin = table.Column<int>(type: "int", nullable: false),
                    Recognize = table.Column<int>(type: "int", nullable: false),
                    Religion = table.Column<int>(type: "int", nullable: false),
                    Romance = table.Column<int>(type: "int", nullable: false),
                    Singing = table.Column<int>(type: "int", nullable: false),
                    Stewardship = table.Column<int>(type: "int", nullable: false),
                    Swimming = table.Column<int>(type: "int", nullable: false),
                    Tourney = table.Column<int>(type: "int", nullable: false),
                    Distaff = table.Column<int>(type: "int", nullable: false),
                    CombatId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Skills_CombatSkills_CombatId",
                        column: x => x.CombatId,
                        principalTable: "CombatSkills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Characters_AttributesId",
                table: "Characters",
                column: "AttributesId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_SkillsId",
                table: "Characters",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_TraitsId",
                table: "Characters",
                column: "TraitsId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_WealthId",
                table: "Characters",
                column: "WealthId");

            migrationBuilder.CreateIndex(
                name: "IX_Passion_CharacterId",
                table: "Passion",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_Skills_CombatId",
                table: "Skills",
                column: "CombatId");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Attributes_AttributesId",
                table: "Characters",
                column: "AttributesId",
                principalTable: "Attributes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Skills_SkillsId",
                table: "Characters",
                column: "SkillsId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Traits_TraitsId",
                table: "Characters",
                column: "TraitsId",
                principalTable: "Traits",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Wealth_WealthId",
                table: "Characters",
                column: "WealthId",
                principalTable: "Wealth",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Attributes_AttributesId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Skills_SkillsId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Traits_TraitsId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Wealth_WealthId",
                table: "Characters");

            migrationBuilder.DropTable(
                name: "Attributes");

            migrationBuilder.DropTable(
                name: "Passion");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropTable(
                name: "Traits");

            migrationBuilder.DropTable(
                name: "Wealth");

            migrationBuilder.DropTable(
                name: "CombatSkills");

            migrationBuilder.DropIndex(
                name: "IX_Characters_AttributesId",
                table: "Characters");

            migrationBuilder.DropIndex(
                name: "IX_Characters_SkillsId",
                table: "Characters");

            migrationBuilder.DropIndex(
                name: "IX_Characters_TraitsId",
                table: "Characters");

            migrationBuilder.DropIndex(
                name: "IX_Characters_WealthId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "AttributesId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "BirthNumber",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Class",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Culture",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "DistinctiveFeatures",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "FathersName",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Glory",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Home",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "LiegeLord",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "Religion",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "SkillsId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "TraitsId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "WealthId",
                table: "Characters");

            migrationBuilder.RenameColumn(
                name: "YearBorn",
                table: "Characters",
                newName: "Age");
        }
    }
}
