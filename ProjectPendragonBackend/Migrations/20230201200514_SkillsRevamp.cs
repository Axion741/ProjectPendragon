using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPendragonBackend.Migrations
{
    public partial class SkillsRevamp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropForeignKey(
                name: "FK_Passion_Characters_CharacterId",
                table: "Passion");

            migrationBuilder.DropForeignKey(
                name: "FK_Skills_CombatSkills_CombatId",
                table: "Skills");

            migrationBuilder.DropTable(
                name: "CombatSkills");

            migrationBuilder.DropIndex(
                name: "IX_Skills_CombatId",
                table: "Skills");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Characters",
                table: "Characters");

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
                name: "Awareness",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Boating",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Chirurgury",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Compose",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Courtesy",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Dancing",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Distaff",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "FaerieLore",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Falconry",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Fashion",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "FirstAid",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Flirting",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Folklore",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Gaming",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Heraldry",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Hunting",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Industry",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Intrigue",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Orate",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "PlayInstrument",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "ReadLatin",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Recognize",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Religion",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Romance",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Singing",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Stewardship",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Swimming",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Tourney",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "AttributesId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "SkillsId",
                table: "Characters");

            migrationBuilder.DropColumn(
                name: "TraitsId",
                table: "Characters");

            migrationBuilder.RenameColumn(
                name: "CombatId",
                table: "Skills",
                newName: "CharacterId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Skills",
                newName: "SkillsId");

            migrationBuilder.RenameColumn(
                name: "WealthId",
                table: "Characters",
                newName: "CharacterId");

            migrationBuilder.AddColumn<Guid>(
                name: "CharacterId",
                table: "Wealth",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "CharacterId",
                table: "Traits",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AlterColumn<Guid>(
                name: "CharacterId",
                table: "Passion",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CharacterId",
                table: "Attributes",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Characters",
                table: "Characters",
                column: "CharacterId");

            migrationBuilder.CreateTable(
                name: "CombatSkill",
                columns: table => new
                {
                    CombatSkillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SkillsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    Checked = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CombatSkill", x => x.CombatSkillId);
                    table.ForeignKey(
                        name: "FK_CombatSkill_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "SkillsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoreSkill",
                columns: table => new
                {
                    CoreSkillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SkillsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Value = table.Column<int>(type: "int", nullable: false),
                    Checked = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoreSkill", x => x.CoreSkillId);
                    table.ForeignKey(
                        name: "FK_CoreSkill_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "SkillsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Wealth_CharacterId",
                table: "Wealth",
                column: "CharacterId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Traits_CharacterId",
                table: "Traits",
                column: "CharacterId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Skills_CharacterId",
                table: "Skills",
                column: "CharacterId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Attributes_CharacterId",
                table: "Attributes",
                column: "CharacterId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CombatSkill_SkillsId",
                table: "CombatSkill",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_CoreSkill_SkillsId",
                table: "CoreSkill",
                column: "SkillsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Attributes_Characters_CharacterId",
                table: "Attributes",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Passion_Characters_CharacterId",
                table: "Passion",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Characters_CharacterId",
                table: "Skills",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Traits_Characters_CharacterId",
                table: "Traits",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Wealth_Characters_CharacterId",
                table: "Wealth",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "CharacterId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attributes_Characters_CharacterId",
                table: "Attributes");

            migrationBuilder.DropForeignKey(
                name: "FK_Passion_Characters_CharacterId",
                table: "Passion");

            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Characters_CharacterId",
                table: "Skills");

            migrationBuilder.DropForeignKey(
                name: "FK_Traits_Characters_CharacterId",
                table: "Traits");

            migrationBuilder.DropForeignKey(
                name: "FK_Wealth_Characters_CharacterId",
                table: "Wealth");

            migrationBuilder.DropTable(
                name: "CombatSkill");

            migrationBuilder.DropTable(
                name: "CoreSkill");

            migrationBuilder.DropIndex(
                name: "IX_Wealth_CharacterId",
                table: "Wealth");

            migrationBuilder.DropIndex(
                name: "IX_Traits_CharacterId",
                table: "Traits");

            migrationBuilder.DropIndex(
                name: "IX_Skills_CharacterId",
                table: "Skills");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Characters",
                table: "Characters");

            migrationBuilder.DropIndex(
                name: "IX_Attributes_CharacterId",
                table: "Attributes");

            migrationBuilder.DropColumn(
                name: "CharacterId",
                table: "Wealth");

            migrationBuilder.DropColumn(
                name: "CharacterId",
                table: "Traits");

            migrationBuilder.DropColumn(
                name: "CharacterId",
                table: "Attributes");

            migrationBuilder.RenameColumn(
                name: "CharacterId",
                table: "Skills",
                newName: "CombatId");

            migrationBuilder.RenameColumn(
                name: "SkillsId",
                table: "Skills",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CharacterId",
                table: "Characters",
                newName: "WealthId");

            migrationBuilder.AddColumn<int>(
                name: "Awareness",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Boating",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Chirurgury",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Compose",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Courtesy",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Dancing",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Distaff",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FaerieLore",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Falconry",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Fashion",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FirstAid",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Flirting",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Folklore",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Gaming",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Heraldry",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Hunting",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Industry",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Intrigue",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Orate",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlayInstrument",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ReadLatin",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Recognize",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Religion",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Romance",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Singing",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Stewardship",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Swimming",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Tourney",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<Guid>(
                name: "CharacterId",
                table: "Passion",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "AttributesId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

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

            migrationBuilder.AddPrimaryKey(
                name: "PK_Characters",
                table: "Characters",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CombatSkills",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Battle = table.Column<int>(type: "int", nullable: false),
                    Dagger = table.Column<int>(type: "int", nullable: false),
                    GreatSpear = table.Column<int>(type: "int", nullable: false),
                    GreatWeapon = table.Column<int>(type: "int", nullable: false),
                    Horsemanship = table.Column<int>(type: "int", nullable: false),
                    Lance = table.Column<int>(type: "int", nullable: false),
                    Siege = table.Column<int>(type: "int", nullable: false),
                    Spear = table.Column<int>(type: "int", nullable: false),
                    SpearExpertise = table.Column<int>(type: "int", nullable: false),
                    Sword = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CombatSkills", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Skills_CombatId",
                table: "Skills",
                column: "CombatId");

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
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Passion_Characters_CharacterId",
                table: "Passion",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_CombatSkills_CombatId",
                table: "Skills",
                column: "CombatId",
                principalTable: "CombatSkills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
