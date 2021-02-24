using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class gradechanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Classes",
                table: "Grades");

            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Grade_Types",
                table: "Grades");

            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Sessions",
                table: "Grades");

            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Subjects",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_Grades_class_id",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_Grades_grade_type_id",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_Grades_session_id",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_Grades_subject_id",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "class_id",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "grade_date",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "grade_title",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "grade_type_id",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "session_id",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "subject_id",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "total_marks",
                table: "Grades");

            migrationBuilder.AlterColumn<string>(
                name: "remarks",
                table: "Grades",
                type: "varchar(max)",
                unicode: false,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldUnicode: false,
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "grade_activity_id",
                table: "Grades",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Grades_grade_activity_id",
                table: "Grades",
                column: "grade_activity_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_GradeActivities_grade_activity_id",
                table: "Grades",
                column: "grade_activity_id",
                principalTable: "GradeActivities",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_GradeActivities_grade_activity_id",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_Grades_grade_activity_id",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "grade_activity_id",
                table: "Grades");

            migrationBuilder.AlterColumn<string>(
                name: "remarks",
                table: "Grades",
                type: "varchar(max)",
                unicode: false,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldUnicode: false);

            migrationBuilder.AddColumn<int>(
                name: "class_id",
                table: "Grades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "grade_date",
                table: "Grades",
                type: "date",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "grade_title",
                table: "Grades",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "grade_type_id",
                table: "Grades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "session_id",
                table: "Grades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "subject_id",
                table: "Grades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "total_marks",
                table: "Grades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Grades_class_id",
                table: "Grades",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_grade_type_id",
                table: "Grades",
                column: "grade_type_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_session_id",
                table: "Grades",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_subject_id",
                table: "Grades",
                column: "subject_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Classes",
                table: "Grades",
                column: "class_id",
                principalTable: "Classes",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Grade_Types",
                table: "Grades",
                column: "grade_type_id",
                principalTable: "Grade_Types",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Sessions",
                table: "Grades",
                column: "session_id",
                principalTable: "Sessions",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Subjects",
                table: "Grades",
                column: "subject_id",
                principalTable: "Subjects",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
