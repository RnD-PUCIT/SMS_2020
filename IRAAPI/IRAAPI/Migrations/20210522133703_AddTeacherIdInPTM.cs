using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class AddTeacherIdInPTM : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "teacher_id",
                table: "PTM",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_PTM_teacher_id",
                table: "PTM",
                column: "teacher_id");

            migrationBuilder.AddForeignKey(
                name: "FK_PTM_Teachers_teacher_id",
                table: "PTM",
                column: "teacher_id",
                principalTable: "Teachers",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTM_Teachers_teacher_id",
                table: "PTM");

            migrationBuilder.DropIndex(
                name: "IX_PTM_teacher_id",
                table: "PTM");

            migrationBuilder.DropColumn(
                name: "teacher_id",
                table: "PTM");
        }
    }
}
