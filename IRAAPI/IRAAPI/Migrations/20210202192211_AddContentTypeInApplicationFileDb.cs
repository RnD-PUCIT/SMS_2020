using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class AddContentTypeInApplicationFileDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "content_type",
                table: "StudentApplicationFiles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "content_type",
                table: "StudentApplicationFiles");
        }
    }
}
