using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class gradeactivitymodeladded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GradeActivities",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValue: "(newid())"),
                    grade_type_id = table.Column<int>(type: "int", nullable: false),
                    grade_title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    grade_date = table.Column<DateTime>(type: "date", nullable: false),
                    total_marks = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GradeActivities", x => x.id);
                    table.ForeignKey(
                        name: "FK_GradeActivities_Grade_Types_grade_type_id",
                        column: x => x.grade_type_id,
                        principalTable: "Grade_Types",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GradeActivities_grade_type_id",
                table: "GradeActivities",
                column: "grade_type_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GradeActivities");
        }
    }
}
