using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class termstableadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "AcademicCalenders",
            //    columns: table => new
            //    {
            //        id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        @event = table.Column<string>(name: "event", type: "nvarchar(max)", nullable: false),
            //        date = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        session_id = table.Column<int>(type: "int", nullable: false),
            //        guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_AcademicCalenders", x => x.id);
            //        table.ForeignKey(
            //            name: "FK_AcademicCalenders_Sessions_session_id",
            //            column: x => x.session_id,
            //            principalTable: "Sessions",
            //            principalColumn: "id",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            migrationBuilder.CreateTable(
                name: "Terms",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Terms", x => x.id);
                });

            //migrationBuilder.CreateIndex(
            //    name: "IX_AcademicCalenders_session_id",
            //    table: "AcademicCalenders",
            //    column: "session_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "AcademicCalenders");

            migrationBuilder.DropTable(
                name: "Terms");
        }
    }
}
