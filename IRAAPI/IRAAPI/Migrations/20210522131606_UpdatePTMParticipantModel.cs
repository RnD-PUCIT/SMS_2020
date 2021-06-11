using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class UpdatePTMParticipantModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTM_Participants_PTM_meeting_id",
                table: "PTM_Participants");

            migrationBuilder.RenameColumn(
                name: "meeting_id",
                table: "PTM_Participants",
                newName: "ptm_id");

            migrationBuilder.RenameIndex(
                name: "IX_PTM_Participants_meeting_id",
                table: "PTM_Participants",
                newName: "IX_PTM_Participants_ptm_id");

            migrationBuilder.AddColumn<DateTime>(
                name: "date",
                table: "PTM_Participants",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "duration",
                table: "PTM_Participants",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "start_time",
                table: "PTM_Participants",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PTM_Participants_PTM_ptm_id",
                table: "PTM_Participants",
                column: "ptm_id",
                principalTable: "PTM",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PTM_Participants_PTM_ptm_id",
                table: "PTM_Participants");

            migrationBuilder.DropColumn(
                name: "date",
                table: "PTM_Participants");

            migrationBuilder.DropColumn(
                name: "duration",
                table: "PTM_Participants");

            migrationBuilder.DropColumn(
                name: "start_time",
                table: "PTM_Participants");

            migrationBuilder.RenameColumn(
                name: "ptm_id",
                table: "PTM_Participants",
                newName: "meeting_id");

            migrationBuilder.RenameIndex(
                name: "IX_PTM_Participants_ptm_id",
                table: "PTM_Participants",
                newName: "IX_PTM_Participants_meeting_id");

            migrationBuilder.AddForeignKey(
                name: "FK_PTM_Participants_PTM_meeting_id",
                table: "PTM_Participants",
                column: "meeting_id",
                principalTable: "PTM",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
