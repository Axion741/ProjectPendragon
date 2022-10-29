using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectPendragonBackend.Migrations
{
    public partial class FurtherCharacterChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Wealth_WealthId",
                table: "Characters");

            migrationBuilder.AlterColumn<Guid>(
                name: "WealthId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "LiegeLord",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Wealth_WealthId",
                table: "Characters",
                column: "WealthId",
                principalTable: "Wealth",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Wealth_WealthId",
                table: "Characters");

            migrationBuilder.AlterColumn<Guid>(
                name: "WealthId",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<Guid>(
                name: "LiegeLord",
                table: "Characters",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Wealth_WealthId",
                table: "Characters",
                column: "WealthId",
                principalTable: "Wealth",
                principalColumn: "Id");
        }
    }
}
