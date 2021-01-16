using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class RemoveExtraColumnFromStudentApplication : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentApplicationFiles_StudentApplications_StudentApplicationId",
                table: "StudentApplicationFiles");

            migrationBuilder.DropIndex(
                name: "IX_StudentApplicationFiles_StudentApplicationId",
                table: "StudentApplicationFiles");

            migrationBuilder.DropColumn(
                name: "StudentApplicationId",
                table: "StudentApplicationFiles");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StudentApplicationId",
                table: "StudentApplicationFiles",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_StudentApplicationFiles_StudentApplicationId",
                table: "StudentApplicationFiles",
                column: "StudentApplicationId");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentApplicationFiles_StudentApplications_StudentApplicationId",
                table: "StudentApplicationFiles",
                column: "StudentApplicationId",
                principalTable: "StudentApplications",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
