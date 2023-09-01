using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace TodoApp.Data.Migrations
{
    public partial class AddColumn_categoryIdOnTodoTask : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoTask_Category_Id",
                table: "TodoTask");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "TodoTask",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "TodoTask",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_TodoTask_CategoryId",
                table: "TodoTask",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_TodoTask_Category_CategoryId",
                table: "TodoTask",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TodoTask_Category_CategoryId",
                table: "TodoTask");

            migrationBuilder.DropIndex(
                name: "IX_TodoTask_CategoryId",
                table: "TodoTask");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "TodoTask");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "TodoTask",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddForeignKey(
                name: "FK_TodoTask_Category_Id",
                table: "TodoTask",
                column: "Id",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
