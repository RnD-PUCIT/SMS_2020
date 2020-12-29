using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class academiccalenderadded : Migration
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
                    session_id = table.Column<int>(type: "int", nullable: false)
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

            migrationBuilder.CreateIndex(
                name: "IX_AcademicCalenders_session_id",
                table: "AcademicCalenders",
                column: "session_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AcademicCalenders");
        }
    }
}
