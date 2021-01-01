using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class studentApplicationandStudentApplicationFilesAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AcademicCalenders",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    @event = table.Column<string>(name: "event", type: "nvarchar(max)", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    session_id = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValue: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AcademicCalenders", x => x.id);
                    table.ForeignKey(
                        name: "FK_AcademicCalenders_Sessions_session_id",
                        column: x => x.session_id,
                        principalTable: "Sessions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StudentApplications",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValue: "(newid())"),
                    student_id = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "(GETDATE())"),
                    subject = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    end_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentApplications", x => x.id);
                    table.ForeignKey(
                        name: "FK_StudentApplications_Students_student_id",
                        column: x => x.student_id,
                        principalTable: "Students",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StudentApplicationFiles",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValue: "(newid())"),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "(GETDATE())"),
                    orignal_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    logical_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    path = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    extension = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    size = table.Column<double>(type: "float", nullable: false),
                    application_id = table.Column<int>(type: "int", nullable: false),
                    StudentApplicationId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentApplicationFiles", x => x.id);
                    table.ForeignKey(
                        name: "FK_StudentApplicationFiles_StudentApplications_StudentApplicationId",
                        column: x => x.StudentApplicationId,
                        principalTable: "StudentApplications",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AcademicCalenders_session_id",
                table: "AcademicCalenders",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_StudentApplicationFiles_StudentApplicationId",
                table: "StudentApplicationFiles",
                column: "StudentApplicationId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentApplications_student_id",
                table: "StudentApplications",
                column: "student_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AcademicCalenders");

            migrationBuilder.DropTable(
                name: "StudentApplicationFiles");

            migrationBuilder.DropTable(
                name: "StudentApplications");
        }
    }
}
