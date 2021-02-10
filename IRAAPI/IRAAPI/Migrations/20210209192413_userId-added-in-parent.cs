using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class userIdaddedinparent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Parents",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "user_id",
                table: "Parents",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Parents_UserId1",
                table: "Parents",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Parents_AspNetUsers_UserId1",
                table: "Parents",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Parents_AspNetUsers_UserId1",
                table: "Parents");

            migrationBuilder.DropIndex(
                name: "IX_Parents_UserId1",
                table: "Parents");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Parents");

            migrationBuilder.DropColumn(
                name: "user_id",
                table: "Parents");
        }
    }
}
