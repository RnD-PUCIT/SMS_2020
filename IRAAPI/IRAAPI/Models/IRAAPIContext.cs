using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace IRAAPI.Models
{
    public partial class IRAAPIContext : DbContext
    {
        public IRAAPIContext()
        {
        }

        public IRAAPIContext(DbContextOptions<IRAAPIContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Announcement> Announcements { get; set; }
        public virtual DbSet<Attendance> Attendances { get; set; }
        public virtual DbSet<BankDetail> BankDetails { get; set; }
        public virtual DbSet<Charge> Charges { get; set; }
        public virtual DbSet<Class> Classes { get; set; }
        public virtual DbSet<ClassSubjectAlloc> ClassSubjectAllocs { get; set; }
        public virtual DbSet<Diary> Diaries { get; set; }
        public virtual DbSet<FeeChallan> FeeChallans { get; set; }
        public virtual DbSet<Grade> Grades { get; set; }
        public virtual DbSet<GradeType> GradeTypes { get; set; }
        public virtual DbSet<Parent> Parents { get; set; }
        public virtual DbSet<ParentLogin> ParentLogins { get; set; }
        public virtual DbSet<SecurityQuestion> SecurityQuestions { get; set; }
        public virtual DbSet<Session> Sessions { get; set; }
        public virtual DbSet<Student> Students { get; set; }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<SubjectGradeTypeAlloc> SubjectGradeTypeAllocs { get; set; }
        public virtual DbSet<Teacher> Teachers { get; set; }
        public virtual DbSet<TeacherSubjectAlloc> TeacherSubjectAllocs { get; set; }
        public virtual DbSet<Timetable> TimeTables { get; set; }
        public virtual DbSet<Days> Days { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Announcement>(entity =>
            {
                entity.Property(e => e.Announcment).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Title).IsUnicode(false);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Announcements)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("FK_Announcements_Classes");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Announcements)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Announcements_Sessions");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.Announcements)
                    .HasForeignKey(d => d.StudentId)
                    .HasConstraintName("FK_Announcements_Students");
            });

            modelBuilder.Entity<Attendance>(entity =>
            {
                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Status)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Attendances)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Attendance_Classes");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Attendances)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Attendance_Sessions");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.Attendances)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Attendance_Students");
            });

            modelBuilder.Entity<BankDetail>(entity =>
            {
                entity.Property(e => e.BankBranch).IsUnicode(false);

                entity.Property(e => e.BankName).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");
            });

            modelBuilder.Entity<Charge>(entity =>
            {
                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Charges)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Charges_Classes");
            });

            modelBuilder.Entity<Class>(entity =>
            {
                entity.Property(e => e.ClassName).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Section).IsUnicode(false);
            });

            modelBuilder.Entity<ClassSubjectAlloc>(entity =>
            {
                entity.HasOne(d => d.Class)
                    .WithMany(p => p.ClassSubjectAllocs)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Class_Subject_Alloc_Classes");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.ClassSubjectAllocs)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Class_Subject_Alloc_Subjects");
            });

            modelBuilder.Entity<Diary>(entity =>
            {
                entity.Property(e => e.DiaryContent).IsUnicode(false);

                entity.Property(e => e.DiaryTitle).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Diaries)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Diary_Classes");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Diaries)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Diary_Sessions");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Diaries)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Diary_Subjects");
            });

            modelBuilder.Entity<FeeChallan>(entity =>
            {
                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Instructions).IsUnicode(false);

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.FeeChallans)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Fee_Challan_Students");
            });

            modelBuilder.Entity<Grade>(entity =>
            {
                entity.Property(e => e.GradeTitle).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Remarks).IsUnicode(false);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Grades_Classes");

                entity.HasOne(d => d.GradeType)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.GradeTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Grades_Grade_Types");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Grades_Sessions");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Grades_Students");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Grades_Subjects");
            });

            modelBuilder.Entity<GradeType>(entity =>
            {
                entity.Property(e => e.GradeType1).IsUnicode(false);

                entity.Property(e => e.GradeTypeSlug).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");
            });

            modelBuilder.Entity<Parent>(entity =>
            {
                entity.Property(e => e.Address).IsUnicode(false);

                entity.Property(e => e.Cnic).IsUnicode(false);

                entity.Property(e => e.ContactPrimary).IsUnicode(false);

                entity.Property(e => e.ContactSecondary).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.JobAddress).IsUnicode(false);

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.Occupation).IsUnicode(false);

                entity.Property(e => e.ProfilePicture).IsUnicode(false);
            });

            modelBuilder.Entity<ParentLogin>(entity =>
            {
                entity.Property(e => e.Cnic).IsUnicode(false);

                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.SqAnswer).IsUnicode(false);

                entity.HasOne(d => d.Sq)
                    .WithMany(p => p.ParentLogins)
                    .HasForeignKey(d => d.SqId)
                    .HasConstraintName("FK_Parent_Login_Security_Questions");
            });

            modelBuilder.Entity<SecurityQuestion>(entity =>
            {
                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Question).IsUnicode(false);
            });

            modelBuilder.Entity<Session>(entity =>
            {
                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.SessionYear).IsUnicode(false);
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.ProfilePicture).IsUnicode(false);

                entity.Property(e => e.RollNo).IsUnicode(false);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Students_Classes");

                entity.HasOne(d => d.Session)
                    .WithMany(p => p.Students)
                    .HasForeignKey(d => d.SessionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Students_Sessions");
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.SubjectCode).IsUnicode(false);

                entity.Property(e => e.SubjectName).IsUnicode(false);

                entity.Property(e => e.SubjectSlug).IsUnicode(false);
            });

            modelBuilder.Entity<SubjectGradeTypeAlloc>(entity =>
            {
                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SubjectGradeTypeAllocs)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Subject_GradeType_Alloc_Classes");

                entity.HasOne(d => d.GradeType)
                    .WithMany(p => p.SubjectGradeTypeAllocs)
                    .HasForeignKey(d => d.GradeTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Subject_GradeType_Alloc_Grade_Types");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.SubjectGradeTypeAllocs)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Subject_GradeType_Alloc_Subjects");
            });

            modelBuilder.Entity<Teacher>(entity =>
            {
                entity.Property(e => e.Address).IsUnicode(false);

                entity.Property(e => e.Cnic).IsUnicode(false);

                entity.Property(e => e.ContactPrimary).IsUnicode(false);

                entity.Property(e => e.ContactSecondary).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.FirstName).IsUnicode(false);

                entity.Property(e => e.Guid).HasDefaultValueSql("(newid())");

                entity.Property(e => e.LastName).IsUnicode(false);

                entity.Property(e => e.ProfilePicture).IsUnicode(false);

                entity.Property(e => e.Specialization).IsUnicode(false);
            });

            modelBuilder.Entity<TeacherSubjectAlloc>(entity =>
            {
                entity.HasOne(d => d.Class)
                    .WithMany(p => p.TeacherSubjectAllocs)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Teacher_Subject_Alloc_Classes");

                entity.HasOne(d => d.Subject)
                    .WithMany(p => p.TeacherSubjectAllocs)
                    .HasForeignKey(d => d.SubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Teacher_Subject_Alloc_Subjects");

                entity.HasOne(d => d.Teacher)
                    .WithMany(p => p.TeacherSubjectAllocs)
                    .HasForeignKey(d => d.TeacherId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Teacher_Subject_Alloc_Teachers");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
