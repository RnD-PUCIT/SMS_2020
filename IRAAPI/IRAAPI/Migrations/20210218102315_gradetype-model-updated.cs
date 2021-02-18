using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class gradetypemodelupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "class_id",
                table: "Grade_Types",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "session_id",
                table: "Grade_Types",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "subject_id",
                table: "Grade_Types",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Grade_Types_class_id",
                table: "Grade_Types",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grade_Types_session_id",
                table: "Grade_Types",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grade_Types_subject_id",
                table: "Grade_Types",
                column: "subject_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Grade_Types_Classes_class_id",
                table: "Grade_Types",
                column: "class_id",
                principalTable: "Classes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Grade_Types_Sessions_session_id",
                table: "Grade_Types",
                column: "session_id",
                principalTable: "Sessions",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Grade_Types_Subjects_subject_id",
                table: "Grade_Types",
                column: "subject_id",
                principalTable: "Subjects",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grade_Types_Classes_class_id",
                table: "Grade_Types");

            migrationBuilder.DropForeignKey(
                name: "FK_Grade_Types_Sessions_session_id",
                table: "Grade_Types");

            migrationBuilder.DropForeignKey(
                name: "FK_Grade_Types_Subjects_subject_id",
                table: "Grade_Types");

            migrationBuilder.DropIndex(
                name: "IX_Grade_Types_class_id",
                table: "Grade_Types");

            migrationBuilder.DropIndex(
                name: "IX_Grade_Types_session_id",
                table: "Grade_Types");

            migrationBuilder.DropIndex(
                name: "IX_Grade_Types_subject_id",
                table: "Grade_Types");

            migrationBuilder.DropColumn(
                name: "class_id",
                table: "Grade_Types");

            migrationBuilder.DropColumn(
                name: "session_id",
                table: "Grade_Types");

            migrationBuilder.DropColumn(
                name: "subject_id",
                table: "Grade_Types");
        }
    }
}
