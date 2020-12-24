using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class timetableupdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimeTables_Days_DaysId",
                table: "TimeTables");

            migrationBuilder.DropIndex(
                name: "IX_TimeTables_DaysId",
                table: "TimeTables");

            migrationBuilder.DropColumn(
                name: "DaysId",
                table: "TimeTables");

            migrationBuilder.CreateIndex(
                name: "IX_TimeTables_day_id",
                table: "TimeTables",
                column: "day_id");

            migrationBuilder.AddForeignKey(
                name: "FK_TimeTables_Days_day_id",
                table: "TimeTables",
                column: "day_id",
                principalTable: "Days",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimeTables_Days_day_id",
                table: "TimeTables");

            migrationBuilder.DropIndex(
                name: "IX_TimeTables_day_id",
                table: "TimeTables");

            migrationBuilder.AddColumn<int>(
                name: "DaysId",
                table: "TimeTables",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TimeTables_DaysId",
                table: "TimeTables",
                column: "DaysId");

            migrationBuilder.AddForeignKey(
                name: "FK_TimeTables_Days_DaysId",
                table: "TimeTables",
                column: "DaysId",
                principalTable: "Days",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
