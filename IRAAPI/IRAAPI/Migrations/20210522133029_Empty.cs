using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class Empty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTM_Participants_Parents_ptm_id",
                table: "PTM_Participants");

            migrationBuilder.AddColumn<int>(
                name: "parent_id",
                table: "PTM_Participants",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_PTM_Participants_parent_id",
                table: "PTM_Participants",
                column: "parent_id");

            migrationBuilder.AddForeignKey(
                name: "FK_PTM_Participants_Parents_parent_id",
                table: "PTM_Participants",
                column: "parent_id",
                principalTable: "Parents",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTM_Participants_Parents_parent_id",
                table: "PTM_Participants");

            migrationBuilder.DropIndex(
                name: "IX_PTM_Participants_parent_id",
                table: "PTM_Participants");

            migrationBuilder.DropColumn(
                name: "parent_id",
                table: "PTM_Participants");

            migrationBuilder.AddForeignKey(
                name: "FK_PTM_Participants_Parents_ptm_id",
                table: "PTM_Participants",
                column: "ptm_id",
                principalTable: "Parents",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
