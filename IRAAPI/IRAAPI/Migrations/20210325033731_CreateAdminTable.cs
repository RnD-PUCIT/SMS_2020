using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class CreateAdminTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    first_name = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    last_name = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    cnic = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contact_primary = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    contact_secondary = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    profile_picture = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    user_id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.id);
                    table.ForeignKey(
                        name: "FK_Admins_AspNetUsers_UserId1",
                        column: x => x.UserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Admins_UserId1",
                table: "Admins",
                column: "UserId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");
        }
    }
}
