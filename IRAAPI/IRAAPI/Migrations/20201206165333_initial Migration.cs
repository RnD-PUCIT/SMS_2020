using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IRAAPI.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bank_Details",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    bank_name = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    bank_branch = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    account_no = table.Column<long>(type: "bigint", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bank_Details", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Classes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    class_name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    section = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Grade_Types",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    grade_type = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    grade_type_slug = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grade_Types", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Parents",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    first_name = table.Column<string>(type: "varchar(75)", unicode: false, maxLength: 75, nullable: false),
                    last_name = table.Column<string>(type: "varchar(75)", unicode: false, maxLength: 75, nullable: false),
                    email = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    cnic = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    address = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    contact_primary = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    contact_secondary = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    occupation = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    job_address = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    profile_picture = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parents", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Security_Questions",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    question = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Security_Questions", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Sessions",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    session_year = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sessions", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Subjects",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    subject_code = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    subject_name = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    subject_slug = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subjects", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Teachers",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    first_name = table.Column<string>(type: "varchar(70)", unicode: false, maxLength: 70, nullable: false),
                    last_name = table.Column<string>(type: "varchar(75)", unicode: false, maxLength: 75, nullable: false),
                    cnic = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    dob = table.Column<DateTime>(type: "date", nullable: false),
                    email = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    address = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    contact_primary = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    contact_secondary = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    specialization = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    joining_date = table.Column<DateTime>(type: "date", nullable: false),
                    salary = table.Column<int>(type: "int", nullable: true),
                    profile_picture = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teachers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Charges",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    amount = table.Column<int>(type: "int", nullable: false),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Charges", x => x.id);
                    table.ForeignKey(
                        name: "FK_Charges_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Parent_Login",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cnic = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    password = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: false),
                    parent_id = table.Column<int>(type: "int", nullable: false),
                    sq_id = table.Column<int>(type: "int", nullable: true),
                    sq_answer = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parent_Login", x => x.id);
                    table.ForeignKey(
                        name: "FK_Parent_Login_Security_Questions",
                        column: x => x.sq_id,
                        principalTable: "Security_Questions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    roll_no = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    first_name = table.Column<string>(type: "varchar(75)", unicode: false, maxLength: 75, nullable: false),
                    last_name = table.Column<string>(type: "varchar(75)", unicode: false, maxLength: 75, nullable: false),
                    dob = table.Column<DateTime>(type: "date", nullable: false),
                    parent_id = table.Column<int>(type: "int", nullable: false),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    is_active = table.Column<bool>(type: "bit", nullable: false),
                    profile_picture = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    session_id = table.Column<int>(type: "int", nullable: false),
                    enrollment_date = table.Column<DateTime>(type: "date", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.id);
                    table.ForeignKey(
                        name: "FK_Students_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Students_Sessions",
                        column: x => x.session_id,
                        principalTable: "Sessions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Class_Subject_Alloc",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    subject_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Class_Subject_Alloc", x => x.id);
                    table.ForeignKey(
                        name: "FK_Class_Subject_Alloc_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Class_Subject_Alloc_Subjects",
                        column: x => x.subject_id,
                        principalTable: "Subjects",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Diary",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    subject_id = table.Column<int>(type: "int", nullable: false),
                    diary_date = table.Column<DateTime>(type: "date", nullable: false),
                    diary_title = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: false),
                    diary_content = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    session_id = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diary", x => x.id);
                    table.ForeignKey(
                        name: "FK_Diary_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Diary_Sessions",
                        column: x => x.session_id,
                        principalTable: "Sessions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Diary_Subjects",
                        column: x => x.subject_id,
                        principalTable: "Subjects",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Subject_GradeType_Alloc",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    subject_id = table.Column<int>(type: "int", nullable: false),
                    grade_type_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject_GradeType_Alloc", x => x.id);
                    table.ForeignKey(
                        name: "FK_Subject_GradeType_Alloc_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Subject_GradeType_Alloc_Grade_Types",
                        column: x => x.grade_type_id,
                        principalTable: "Grade_Types",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Subject_GradeType_Alloc_Subjects",
                        column: x => x.subject_id,
                        principalTable: "Subjects",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Teacher_Subject_Alloc",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    teacher_id = table.Column<int>(type: "int", nullable: false),
                    subject_id = table.Column<int>(type: "int", nullable: false),
                    class_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teacher_Subject_Alloc", x => x.id);
                    table.ForeignKey(
                        name: "FK_Teacher_Subject_Alloc_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Teacher_Subject_Alloc_Subjects",
                        column: x => x.subject_id,
                        principalTable: "Subjects",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Teacher_Subject_Alloc_Teachers",
                        column: x => x.teacher_id,
                        principalTable: "Teachers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Announcements",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    student_id = table.Column<int>(type: "int", nullable: true),
                    class_id = table.Column<int>(type: "int", nullable: true),
                    title = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: false),
                    announcment = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
                    read = table.Column<bool>(type: "bit", nullable: false),
                    session_id = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())"),
                    date = table.Column<DateTime>(type:"datetime2(7)", nullable: false, defaultValueSql: "(GETDATE())")


                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Announcements", x => x.id);
                    table.ForeignKey(
                        name: "FK_Announcements_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Announcements_Sessions",
                        column: x => x.session_id,
                        principalTable: "Sessions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Announcements_Students",
                        column: x => x.student_id,
                        principalTable: "Students",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Attendance",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    student_id = table.Column<int>(type: "int", nullable: false),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    subject_id = table.Column<int>(type: "int", nullable: true),
                    attendance_date = table.Column<DateTime>(type: "date", nullable: false),
                    status = table.Column<string>(type: "char(1)", unicode: false, fixedLength: true, maxLength: 1, nullable: false),
                    session_id = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attendance", x => x.id);
                    table.ForeignKey(
                        name: "FK_Attendance_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attendance_Sessions",
                        column: x => x.session_id,
                        principalTable: "Sessions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Attendance_Students",
                        column: x => x.student_id,
                        principalTable: "Students",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fee_Challan",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    student_id = table.Column<int>(type: "int", nullable: false),
                    issue_date = table.Column<DateTime>(type: "date", nullable: false),
                    due_date = table.Column<DateTime>(type: "date", nullable: false),
                    bank_id = table.Column<int>(type: "int", nullable: false),
                    instructions = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    is_paid = table.Column<bool>(type: "bit", nullable: false),
                    unpaid_charges = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fee_Challan", x => x.id);
                    table.ForeignKey(
                        name: "FK_Fee_Challan_Students",
                        column: x => x.student_id,
                        principalTable: "Students",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Grades",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    student_id = table.Column<int>(type: "int", nullable: false),
                    class_id = table.Column<int>(type: "int", nullable: false),
                    subject_id = table.Column<int>(type: "int", nullable: false),
                    grade_date = table.Column<DateTime>(type: "date", nullable: false),
                    total_marks = table.Column<int>(type: "int", nullable: false),
                    obtained_marks = table.Column<int>(type: "int", nullable: false),
                    grade_type_id = table.Column<int>(type: "int", nullable: false),
                    grade_title = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    remarks = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    session_id = table.Column<int>(type: "int", nullable: false),
                    guid = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "(newid())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grades", x => x.id);
                    table.ForeignKey(
                        name: "FK_Grades_Classes",
                        column: x => x.class_id,
                        principalTable: "Classes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Grades_Grade_Types",
                        column: x => x.grade_type_id,
                        principalTable: "Grade_Types",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Grades_Sessions",
                        column: x => x.session_id,
                        principalTable: "Sessions",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Grades_Students",
                        column: x => x.student_id,
                        principalTable: "Students",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Grades_Subjects",
                        column: x => x.subject_id,
                        principalTable: "Subjects",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_class_id",
                table: "Announcements",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_session_id",
                table: "Announcements",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Announcements_student_id",
                table: "Announcements",
                column: "student_id");

            migrationBuilder.CreateIndex(
                name: "IX_Attendance_class_id",
                table: "Attendance",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Attendance_session_id",
                table: "Attendance",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Attendance_student_id",
                table: "Attendance",
                column: "student_id");

            migrationBuilder.CreateIndex(
                name: "IX_Charges_class_id",
                table: "Charges",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Class_Subject_Alloc_class_id",
                table: "Class_Subject_Alloc",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Class_Subject_Alloc_subject_id",
                table: "Class_Subject_Alloc",
                column: "subject_id");

            migrationBuilder.CreateIndex(
                name: "IX_Diary_class_id",
                table: "Diary",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Diary_session_id",
                table: "Diary",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Diary_subject_id",
                table: "Diary",
                column: "subject_id");

            migrationBuilder.CreateIndex(
                name: "IX_Fee_Challan_student_id",
                table: "Fee_Challan",
                column: "student_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_class_id",
                table: "Grades",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_grade_type_id",
                table: "Grades",
                column: "grade_type_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_session_id",
                table: "Grades",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_student_id",
                table: "Grades",
                column: "student_id");

            migrationBuilder.CreateIndex(
                name: "IX_Grades_subject_id",
                table: "Grades",
                column: "subject_id");

            migrationBuilder.CreateIndex(
                name: "IX_Parent_Login_sq_id",
                table: "Parent_Login",
                column: "sq_id");

            migrationBuilder.CreateIndex(
                name: "IX_Students_class_id",
                table: "Students",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Students_session_id",
                table: "Students",
                column: "session_id");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_GradeType_Alloc_class_id",
                table: "Subject_GradeType_Alloc",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_GradeType_Alloc_grade_type_id",
                table: "Subject_GradeType_Alloc",
                column: "grade_type_id");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_GradeType_Alloc_subject_id",
                table: "Subject_GradeType_Alloc",
                column: "subject_id");

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_Subject_Alloc_class_id",
                table: "Teacher_Subject_Alloc",
                column: "class_id");

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_Subject_Alloc_subject_id",
                table: "Teacher_Subject_Alloc",
                column: "subject_id");

            migrationBuilder.CreateIndex(
                name: "IX_Teacher_Subject_Alloc_teacher_id",
                table: "Teacher_Subject_Alloc",
                column: "teacher_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Announcements");

            migrationBuilder.DropTable(
                name: "Attendance");

            migrationBuilder.DropTable(
                name: "Bank_Details");

            migrationBuilder.DropTable(
                name: "Charges");

            migrationBuilder.DropTable(
                name: "Class_Subject_Alloc");

            migrationBuilder.DropTable(
                name: "Diary");

            migrationBuilder.DropTable(
                name: "Fee_Challan");

            migrationBuilder.DropTable(
                name: "Grades");

            migrationBuilder.DropTable(
                name: "Parent_Login");

            migrationBuilder.DropTable(
                name: "Parents");

            migrationBuilder.DropTable(
                name: "Subject_GradeType_Alloc");

            migrationBuilder.DropTable(
                name: "Teacher_Subject_Alloc");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Security_Questions");

            migrationBuilder.DropTable(
                name: "Grade_Types");

            migrationBuilder.DropTable(
                name: "Subjects");

            migrationBuilder.DropTable(
                name: "Teachers");

            migrationBuilder.DropTable(
                name: "Classes");

            migrationBuilder.DropTable(
                name: "Sessions");
        }
    }
}
