USE [IRA_API]
GO
/****** Object:  Table [dbo].[Terms]    Script Date: 05/04/2021 21:54:46 ******/
SET IDENTITY_INSERT [dbo].[Terms] ON
INSERT [dbo].[Terms] ([id], [name], [guid]) VALUES (1, N'First term', N'dac70ad8-cae0-492b-b179-262d6f44814b')
INSERT [dbo].[Terms] ([id], [name], [guid]) VALUES (2, N'Second Term', N'90895d17-dbec-4dda-9a5a-584c5d1448ff')
INSERT [dbo].[Terms] ([id], [name], [guid]) VALUES (3, N'Third Term', N'f3d4f0e2-34f5-46f8-beb0-ce788508c2bd')
SET IDENTITY_INSERT [dbo].[Terms] OFF
/****** Object:  Table [dbo].[Days]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Days] ON
INSERT [dbo].[Days] ([id], [day]) VALUES (1, N'Monday')
INSERT [dbo].[Days] ([id], [day]) VALUES (2, N'Tuesday')
INSERT [dbo].[Days] ([id], [day]) VALUES (3, N'Wednesday')
INSERT [dbo].[Days] ([id], [day]) VALUES (4, N'Thursday')
INSERT [dbo].[Days] ([id], [day]) VALUES (5, N'Friday')
INSERT [dbo].[Days] ([id], [day]) VALUES (6, N'Saturday')
INSERT [dbo].[Days] ([id], [day]) VALUES (7, N'Sunday')
SET IDENTITY_INSERT [dbo].[Days] OFF
/****** Object:  Table [dbo].[Classes]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Classes] ON
INSERT [dbo].[Classes] ([id], [class_name], [section], [guid]) VALUES (1, N'8th', N'Blue', N'765715a9-c1c9-40b2-a186-5b6b05467825')
INSERT [dbo].[Classes] ([id], [class_name], [section], [guid]) VALUES (2, N'5th', N'Red', N'f102465f-f705-460f-b1f7-eb1199ea9b8f')
SET IDENTITY_INSERT [dbo].[Classes] OFF
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 05/04/2021 21:54:47 ******/
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'4e6bfc66-effa-46da-a0f7-31d8ae5e3f2e', N'Admin', N'ADMIN', N'ca5e9730-5b55-48b1-80c7-a0bf81194cb2')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'720a5695-83e6-4a02-84ed-dffb017bafa9', N'Teacher', N'TEACHER', N'5fced202-eb18-483c-baa6-17c53a7c19c4')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'dae8357e-cbe2-4742-abcc-3bbb1eb8d47c', N'Student', N'STUDENT', N'b013c008-bedc-4e0e-9e74-801a725c909b')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'fadcb3a1-86c8-4d9d-ad44-738474a64e58', N'Parent', N'PARENT', N'2d0e7fe8-7158-4d1f-812f-a9566ae73b69')
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 05/04/2021 21:54:47 ******/
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201206165333_initial Migration', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222103709_days+timetable-models-added', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222104949_days+timetable-updated', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222105317_timetable-updated', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222105737_days-timetable-nullable-false', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222173408_academic-calender-added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222183557_academic-calender-guid-added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222184758_guid-added-in-timetable-model', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201224085030_TimeTableAdded', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201231171629_termstableAdded', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201231185817_termstableAdded', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201231193722_termstableadded', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210101165518_files_lecture_content_table_created', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210101190347_course_outline_added', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210101212000_files_course_outline_tableAdded', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210101235128_studentApplication-and-StudentApplicationFiles-Added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210102093347_files_course_outline_tableAdded', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210116080626_RemoveExtraColumnFromStudentApplication', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210202190713_RemovePathFromStudentApplicationFile', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210202192211_AddContentTypeInApplicationFileDb', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210209121534_identity-added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210209192413_userId-added-in-parent', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210209200826_userId-added-in-teacher', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210209201542_userId-added-in-student', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210218102315_gradetype-model-updated', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210218105254_gradeactivity-model-added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210224180411_grade-changes', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210325033731_CreateAdminTable', N'5.0.2')
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 05/04/2021 21:54:47 ******/
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'250101a3-24a6-496d-bfc5-da9ea0cbd211', N'nadeem.abbass', N'NADEEM.ABBASS', N'nadeem@ira.com', N'NADEEM@IRA.COM', 0, N'AQAAAAEAACcQAAAAECjrtbvUYq1wRFLfpg74gHYuoXiw4BxBLYFsbCQrmKp366EMHsDXzrLo7qoKHTp5ag==', N'2CJXIDY54JFNVK3YV7BTVSHJLMKSD4WJ', N'0499c620-b183-44e4-aefc-e668f61d5dd4', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'97294e73-bec0-4383-b0b6-9d3a4c55072c', N'1234', N'1234', NULL, NULL, 0, N'AQAAAAEAACcQAAAAEPLg3KFFytDfyb9MCiymW9YKKKCmYzLSvMZoipciILVVJI0WDIp1O+9lLdrN9svXNQ==', N'BKFBWEA5YKPI7DF7VNDNVAMWEKH3Q3J2', N'c68c4acb-f344-457a-a0fb-006d6b4954ff', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'bfe748c9-de72-4b30-8bc3-bb945a1b8494', N'4321', N'4321', NULL, NULL, 0, N'AQAAAAEAACcQAAAAEMX/0OVN5LTpfJdhthKL5bTmS3qVvujkM44WnKRR4CImsfvNOkcuGnUecc/nlG9Y5A==', N'ITB7FUVTGD252NJX33DJ75SXGEUBW2PN', N'5a62cc32-e03d-494d-9ccf-c4dc64837b36', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'e515e0a9-f2ff-426d-9ad4-0d01e2dd866f', N'admin', N'ADMIN', N'admin@ira.com', N'ADMIN@IRA.COM', 0, N'AQAAAAEAACcQAAAAEPPnupedKeAK7xPKDfG6/IU4GBcFgdwXTelI/2b12R6gTfroxF4S8CtlKCeZKGUjqQ==', N'PEXPB7MPJNCGPV437HUI6ZEMK64WEWFG', N'48512168-33b9-48fb-acdf-28a64fdfa8a8', NULL, 0, 0, NULL, 1, 0)
/****** Object:  Table [dbo].[Subjects]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Subjects] ON
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (1, N'8th-physics', N'Physics', N'physics', N'8a004bfd-c7f8-4cd0-ab87-759e614ddc49')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (2, N'8th-math', N'Math', N'math', N'c9b88e44-65c1-4949-a7bb-3f32bef782c9')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (3, N'8th-english', N'English', N'english', N'ba850e46-fbef-4df7-86b3-965e5bb8d412')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (4, N'5th-science', N'Science', N'science', N'5d48183d-61e1-4820-a056-128581286820')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (5, N'5th-urdu', N'Urdu', N'urdu', N'4419acfa-4139-4970-9b4d-bd38d6ed7d06')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (6, N'5th-social', N'Social Studies', N'social-studies', N'f237281a-00c4-46bb-8a4a-4ecabfff77d2')
SET IDENTITY_INSERT [dbo].[Subjects] OFF
/****** Object:  Table [dbo].[Bank_Details]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Bank_Details] ON
INSERT [dbo].[Bank_Details] ([id], [bank_name], [bank_branch], [account_no], [guid]) VALUES (1, N'HBL', N'Mall Road', 1234567, N'0a1413e2-2320-4c79-8bda-31c54e81bd38')
SET IDENTITY_INSERT [dbo].[Bank_Details] OFF
/****** Object:  Table [dbo].[StudentApplicationFiles]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[StudentApplicationFiles] ON
INSERT [dbo].[StudentApplicationFiles] ([id], [guid], [date], [orignal_name], [logical_name], [extension], [size], [application_id], [content_type]) VALUES (1, N'48e7b294-1ee2-40c0-a5b2-b7347ff88d5f', CAST(0x0758FC21E5C326420B AS DateTime2), N'Arslan Yousaf_Resume.pdf', N'cc89c6d0-ec56-49ce-92c1-eb68e8c59755_Arslan-You', N'.pdf', 53996, 1, N'application/pdf')
SET IDENTITY_INSERT [dbo].[StudentApplicationFiles] OFF
/****** Object:  Table [dbo].[Sessions]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Sessions] ON
INSERT [dbo].[Sessions] ([id], [session_year], [guid]) VALUES (1, N'2019-2020', N'89d9f08c-3d1f-40f0-8a01-0200a150af09')
SET IDENTITY_INSERT [dbo].[Sessions] OFF
/****** Object:  Table [dbo].[Security_Questions]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Security_Questions] ON
INSERT [dbo].[Security_Questions] ([id], [question], [guid]) VALUES (1, N'What is favorite color? ', N'516cc674-c3b9-4afc-b49c-0de774297f18')
SET IDENTITY_INSERT [dbo].[Security_Questions] OFF
/****** Object:  Table [dbo].[Parents]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Parents] ON
INSERT [dbo].[Parents] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [occupation], [job_address], [profile_picture], [guid], [UserId1], [user_id]) VALUES (1, N'Arslan', N'Yousaf', N'arslan77@gmail.com', N'35302-2812955-9', N'Lahore', N'0322787811', NULL, N'Job', N'Lhr', NULL, N'0387cb41-2a49-40ff-8244-6425a061fdc4', NULL, N'97294e73-bec0-4383-b0b6-9d3a4c55072c')
INSERT [dbo].[Parents] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [occupation], [job_address], [profile_picture], [guid], [UserId1], [user_id]) VALUES (2, N'Zeeshan', N'Yousaf', N'arslan78@gmail.com', N'35302-2812955-9', N'Lahore', N'0322787811', NULL, N'Job', N'Lhr', NULL, N'78d9644b-666f-416c-8e80-82152fb652bc', NULL, N'bfe748c9-de72-4b30-8bc3-bb945a1b8494')
SET IDENTITY_INSERT [dbo].[Parents] OFF
/****** Object:  Table [dbo].[Parent_Login]    Script Date: 05/04/2021 21:54:47 ******/
/****** Object:  Table [dbo].[Students]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Students] ON
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid], [UserId1], [user_id]) VALUES (1, N'1', N'Ali', N'Ahmad', CAST(0xB5410B00 AS Date), 1, 1, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'829407a4-c872-40bc-b2ed-4f6024b75fd8', NULL, N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid], [UserId1], [user_id]) VALUES (2, N'2', N'Waseem', N'Akhroti', CAST(0xB5410B00 AS Date), 1, 2, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'84f7214f-ecd4-42d4-8af9-f9d42b5e76ce', NULL, N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid], [UserId1], [user_id]) VALUES (3, N'3', N'Iqrar', N'Ali', CAST(0xB5410B00 AS Date), 1, 2, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'533854dd-1490-4651-ae5d-e63e48031712', NULL, N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid], [UserId1], [user_id]) VALUES (4, N'12', N'Arslan', N'Yousaf', CAST(0xB5410B00 AS Date), 1, 1, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'bef212da-fd88-4999-ab39-0530fc249956', NULL, N'00000000-0000-0000-0000-000000000000')
SET IDENTITY_INSERT [dbo].[Students] OFF
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 05/04/2021 21:54:47 ******/
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'e515e0a9-f2ff-426d-9ad4-0d01e2dd866f', N'4e6bfc66-effa-46da-a0f7-31d8ae5e3f2e')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'250101a3-24a6-496d-bfc5-da9ea0cbd211', N'720a5695-83e6-4a02-84ed-dffb017bafa9')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'97294e73-bec0-4383-b0b6-9d3a4c55072c', N'fadcb3a1-86c8-4d9d-ad44-738474a64e58')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'bfe748c9-de72-4b30-8bc3-bb945a1b8494', N'fadcb3a1-86c8-4d9d-ad44-738474a64e58')
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 05/04/2021 21:54:47 ******/
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 05/04/2021 21:54:47 ******/
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 05/04/2021 21:54:47 ******/
/****** Object:  Table [dbo].[Admins]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Admins] ON
INSERT [dbo].[Admins] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [profile_picture], [guid], [user_id], [UserId1]) VALUES (2, N'Admin', N'Admin', N'admin@ira.com', N'1234-1231231-1', N'Lahore', N'03164141068', NULL, NULL, N'd810a74c-51ba-4b9a-ba02-a2be8427917f', N'e515e0a9-f2ff-426d-9ad4-0d01e2dd866f', NULL)
SET IDENTITY_INSERT [dbo].[Admins] OFF
/****** Object:  Table [dbo].[AcademicCalenders]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[AcademicCalenders] ON
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (1, N'First term Exams', CAST(0x07000000000053430B AS DateTime2), 1, N'69f505b8-8b10-4185-93c4-401eafc5135d')
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (2, N'Second Term Exams', CAST(0x07000000000053430B AS DateTime2), 1, N'0161f9f8-a022-451a-9d73-a9e6eb9f5944')
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (3, N'Third Term Exams', CAST(0x070000000000DA420B AS DateTime2), 1, N'1dc4b0ea-72f5-45c0-a8e0-106347a2d3f2')
SET IDENTITY_INSERT [dbo].[AcademicCalenders] OFF
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 05/04/2021 21:54:47 ******/
/****** Object:  Table [dbo].[Class_Subject_Alloc]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Class_Subject_Alloc] ON
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (1, 1, 1)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (2, 1, 2)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (3, 1, 3)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (4, 2, 4)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (5, 2, 5)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (6, 2, 6)
SET IDENTITY_INSERT [dbo].[Class_Subject_Alloc] OFF
/****** Object:  Table [dbo].[Charges]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Charges] ON
INSERT [dbo].[Charges] ([id], [amount], [class_id], [guid]) VALUES (1, 1000, 1, N'500040c8-8912-47a8-a620-ce3ed45e1873')
INSERT [dbo].[Charges] ([id], [amount], [class_id], [guid]) VALUES (2, 2000, 2, N'47d0824d-96d9-4784-a48f-8db2ae040766')
SET IDENTITY_INSERT [dbo].[Charges] OFF
/****** Object:  Table [dbo].[CourseOutlines]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[CourseOutlines] ON
INSERT [dbo].[CourseOutlines] ([id], [guid], [subject_id], [class_id], [session_id], [term_id], [title], [description], [date], [status], [references]) VALUES (1, N'c9432a15-9c9d-4215-8dd6-19be0eaf2ab6', 1, 1, 1, 1, N'Chapter 01', N'DMAS Rules', CAST(0x070000000000FF410B AS DateTime2), 0, N'https://www.youtube.com/watch?v=B4yJzsPBe9o')
INSERT [dbo].[CourseOutlines] ([id], [guid], [subject_id], [class_id], [session_id], [term_id], [title], [description], [date], [status], [references]) VALUES (2, N'e6bf4e1d-a47c-48bf-ac7b-ff2fc3595099', 1, 1, 1, 1, N'Chapter 02', N'Multiplication And Division', CAST(0x0700000000001E420B AS DateTime2), 0, N'https://www.youtube.com/watch?v=B4yJzsPBe9o')
INSERT [dbo].[CourseOutlines] ([id], [guid], [subject_id], [class_id], [session_id], [term_id], [title], [description], [date], [status], [references]) VALUES (3, N'c845c85a-aa9e-411a-8708-d5849f8cdd35', 1, 1, 1, 1, N'Chapter 03', N'Geometry Concepts', CAST(0x07000000000035420B AS DateTime2), 0, N'https://www.youtube.com/watch?v=B4yJzsPBe9o')
INSERT [dbo].[CourseOutlines] ([id], [guid], [subject_id], [class_id], [session_id], [term_id], [title], [description], [date], [status], [references]) VALUES (4, N'67c58d7e-0f40-43e6-897f-268e63590ab4', 2, 1, 1, 1, N'Chapter 01', N'Human Rights and Laws', CAST(0x070000000000FF410B AS DateTime2), 0, N'https://www.google.com/search?q=human+rights+in+pakistan&oq=human+rights&aqs=chrome.1.69i57j0j0i433j0j46j0l3.4348j0j7&sourceid=chrome&ie=UTF-8')
INSERT [dbo].[CourseOutlines] ([id], [guid], [subject_id], [class_id], [session_id], [term_id], [title], [description], [date], [status], [references]) VALUES (5, N'0d1d906b-9bb2-4140-a9e0-48df6e8151ce', 2, 1, 1, 1, N'Chapter 02', N'Ethical Behavior and its Obligations ', CAST(0x0700000000001E420B AS DateTime2), 0, N'www.tutorialspoint.com')
INSERT [dbo].[CourseOutlines] ([id], [guid], [subject_id], [class_id], [session_id], [term_id], [title], [description], [date], [status], [references]) VALUES (7, N'00000000-0000-0000-0000-000000000000', 1, 1, 1, 1, N'Chapter 04', N'Application And Letters', CAST(0x07000000000015420B AS DateTime2), 0, N'https://www.c-sharpcorner.com/UploadFile/mahesh/insert-item-into-a-C-Sharp-list/#:~:text=Add()%20method%20adds%20an,using%20Add%20method.')
SET IDENTITY_INSERT [dbo].[CourseOutlines] OFF
/****** Object:  Table [dbo].[Grade_Types]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Grade_Types] ON
INSERT [dbo].[Grade_Types] ([id], [grade_type], [grade_type_slug], [guid], [class_id], [session_id], [subject_id]) VALUES (1, N'Quiz', N'quiz', N'125eccf3-3b61-4fd9-8798-225fec164259', 1, 1, 1)
SET IDENTITY_INSERT [dbo].[Grade_Types] OFF
/****** Object:  Table [dbo].[TimeTables]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[TimeTables] ON
INSERT [dbo].[TimeTables] ([id], [guid], [class_id], [session_id], [subject_id], [day_id], [time_slot]) VALUES (3, N'9a09fa22-f9c4-4db5-85de-4334b6fe4c6d', 1, 1, 1, 1, N'8:00 - 8:30')
INSERT [dbo].[TimeTables] ([id], [guid], [class_id], [session_id], [subject_id], [day_id], [time_slot]) VALUES (4, N'dec6b032-425b-4b31-8031-4181ddc7c200', 1, 1, 2, 1, N'8:30 - 9:00')
INSERT [dbo].[TimeTables] ([id], [guid], [class_id], [session_id], [subject_id], [day_id], [time_slot]) VALUES (5, N'a51c11e6-7246-41cb-a1ee-08f326db2722', 1, 1, 3, 1, N'9:00 - 10:00')
INSERT [dbo].[TimeTables] ([id], [guid], [class_id], [session_id], [subject_id], [day_id], [time_slot]) VALUES (6, N'3df86351-36b1-4c86-9119-dcb3611ec589', 1, 1, 1, 2, N'8:00 - 8:30')
INSERT [dbo].[TimeTables] ([id], [guid], [class_id], [session_id], [subject_id], [day_id], [time_slot]) VALUES (7, N'3986b0ae-f8ec-4083-a5bb-243a91a93a58', 1, 1, 2, 2, N'8:30 - 9:00')
INSERT [dbo].[TimeTables] ([id], [guid], [class_id], [session_id], [subject_id], [day_id], [time_slot]) VALUES (8, N'1b1db4e6-5c7d-4f03-91ef-c6a19ebc9ada', 1, 1, 3, 2, N'9:00 - 10:00')
SET IDENTITY_INSERT [dbo].[TimeTables] OFF
/****** Object:  Table [dbo].[Diary]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Diary] ON
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (1, 1, 1, CAST(0xB5410B00 AS Date), N'Data Mining Reading', N'Read Chapter 3 and 4 and 5 and 6', 1, N'88e6a8d5-5a4b-45a8-b738-a21dde0986b5')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (2, 1, 1, CAST(0xB6410B00 AS Date), N'Regular Expression', N'Practice Reglar Expressions', 1, N'2045dce6-e764-482c-a1f2-0baa3168988a')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (3, 1, 1, CAST(0xB7410B00 AS Date), N'Network Hack', N'Write ways to hack a network.', 1, N'f2f132af-fcd9-460e-b51e-04f068f8938c')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (4, 1, 1, CAST(0xAD410B00 AS Date), N'Cost Analysis', N'Practice Formulas od cost analysis', 1, N'78c76636-5ef2-407c-a98d-b6c426fb89f6')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (5, 1, 1, CAST(0x8E410B00 AS Date), N'Requirement Analysis', N'Read processes of Requirement Analysis', 1, N'e75fb688-f0cc-4051-825f-a2b93df8f9f5')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (6, 1, 1, CAST(0x92410B00 AS Date), N'Stackholder', N'Stackholder Definitions', 1, N'9980a171-0c7e-4022-a325-877daecc81b9')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (7, 1, 1, CAST(0x93410B00 AS Date), N'Good vs Bad Websites', N'Write features and drawbacks and improvements for good and bad websites', 1, N'8d9ad5ff-4cf8-47ef-8471-b761af562c4b')
INSERT [dbo].[Diary] ([id], [class_id], [subject_id], [diary_date], [diary_title], [diary_content], [session_id], [guid]) VALUES (10, 1, 1, CAST(0x94410B00 AS Date), N'SQL', N'Read SQL Functions', 1, N'83b44919-40f4-4618-a145-8f916ed3626c')
SET IDENTITY_INSERT [dbo].[Diary] OFF
/****** Object:  Table [dbo].[Teachers]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Teachers] ON
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid], [UserId1], [user_id]) VALUES (1, N'Nadeem', N'Abbas', N'13897293', CAST(0x03140B00 AS Date), N'nadeem@gmai.com', N'abc', N'09218901', N'08078787', N'Math', CAST(0x8D410B00 AS Date), 15000, NULL, N'2dc57719-1909-497e-8f56-8818f8d7e1e2', NULL, N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid], [UserId1], [user_id]) VALUES (3, N'Shahvez', N'Ali', N'2356622', CAST(0xDC160B00 AS Date), N'shah@gmail.com', N'bxc', N'3478959739', N'786868', N'Physics', CAST(0x78410B00 AS Date), 500000000, NULL, N'7c783310-918b-4a1a-b6cc-9cb42f1ee343', NULL, N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid], [UserId1], [user_id]) VALUES (4, N'Shakeel', N'Zafar', N'420', CAST(0x39180B00 AS Date), N'shakeel@gmail.com', N'Chand py', N'090078601', N'090078701', N'Computer++', CAST(0x5B950A00 AS Date), 10, NULL, N'185e2b4b-0b49-4024-a0dc-574fb082e6e0', NULL, N'00000000-0000-0000-0000-000000000000')
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid], [UserId1], [user_id]) VALUES (5, N'Nadeem', N'Abbass', N'12345678901', CAST(0x83070B00 AS Date), N'nadeem@ira.com', N'Lahore', N'03164141068', NULL, N'Maths', CAST(0x283F0B00 AS Date), 30000, NULL, N'05e1adf5-6c3d-4946-bf62-0e89b5fe0181', NULL, N'250101a3-24a6-496d-bfc5-da9ea0cbd211')
SET IDENTITY_INSERT [dbo].[Teachers] OFF
/****** Object:  Table [dbo].[Teacher_Subject_Alloc]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Teacher_Subject_Alloc] ON
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (7, 3, 2, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (8, 4, 3, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (9, 1, 4, 2)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (10, 3, 5, 2)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (11, 4, 6, 2)
SET IDENTITY_INSERT [dbo].[Teacher_Subject_Alloc] OFF
/****** Object:  Table [dbo].[Fee_Challan]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Fee_Challan] ON
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (1, 1, CAST(0xDF410B00 AS Date), CAST(0xED410B00 AS Date), 1, N'dfhigvndufhbji', 0, 2000, N'52748d86-d776-40bd-8363-1ff553484f6d')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (2, 1, CAST(0xE3410B00 AS Date), CAST(0xF7410B00 AS Date), 1, N'gfjhfkjfghjkhfgjk', 0, 500, N'822c29fa-849b-4377-ba49-05ab9a3d5535')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (3, 1, CAST(0xC5410B00 AS Date), CAST(0xD9410B00 AS Date), 1, N'fjkytgkughk.h.p;', 0, 100, N'd48e2d0d-a428-4f25-bb80-a23a9dbcf35d')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (5, 1, CAST(0xA6410B00 AS Date), CAST(0xBA410B00 AS Date), 1, N'igytfg7867i', 0, 500, N'e1066f49-aae6-44a6-bbd8-71b1696b954a')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (6, 2, CAST(0xF5410B00 AS Date), CAST(0xFE410B00 AS Date), 1, N'fyhierufhieruULL', 0, 0, N'6c7b0a71-8625-4a0d-9948-eee9917db91a')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (7, 2, CAST(0xF5410B00 AS Date), CAST(0x1B420B00 AS Date), 1, N'hgjmyfmyfjfyuf', 0, 500, N'f7da74a5-e027-4bd9-8710-fd9fb9507467')
SET IDENTITY_INSERT [dbo].[Fee_Challan] OFF
/****** Object:  Table [dbo].[Announcements]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Announcements] ON
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (1, 1, 1, N'Fee Submission', N'Its your second reminder to kindly submit your fee before the Due Date.   ', 0, 1, N'74531975-986a-4fd6-8d2a-d8a436643b57', CAST(0x0780671AB773F4410B AS DateTime2))
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (2, 1, 2, N'Attendence ', N'Ahmad Ali is absent today.', 1, 1, N'512dc23d-7963-404f-92d7-0b98dadbb981', CAST(0x07B0DC1AB773F4410B AS DateTime2))
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (3, NULL, 1, N'Maths Class Timing Changed', N'Now Your Maths lecture is scheduled from 11:30 AM to 12:20PM .', 1, 1, N'0acf10ab-74ca-4bb8-877f-f420e4819eeb', CAST(0x07B0DC1AB773F4410B AS DateTime2))
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (4, NULL, NULL, N'Winter Vocations', N'Annual winter holidays have been announced for the institue. The institue will remain close from Deceember 25,2020 till january 10,2020. Online Classes will be resumed from January 11,2020. Make your vocations productive. Good Luck. ', 1, 1, N'0a26ed2e-e014-4437-b301-be77f1e20c54', CAST(0x07B0DC1AB773F4410B AS DateTime2))
SET IDENTITY_INSERT [dbo].[Announcements] OFF
/****** Object:  Table [dbo].[Subject_GradeType_Alloc]    Script Date: 05/04/2021 21:54:47 ******/
/****** Object:  Table [dbo].[StudentApplications]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[StudentApplications] ON
INSERT [dbo].[StudentApplications] ([id], [guid], [student_id], [date], [subject], [content], [start_date], [end_date], [status]) VALUES (1, N'e81e6eb2-72a0-42a2-88ea-76b1f3a9acce', 2, CAST(0x074562ABE4C326420B AS DateTime2), N'Sick Leave', N'<p>ABC</p>', CAST(0x070000000000000000 AS DateTime2), CAST(0x070000000000000000 AS DateTime2), N'Pending')
SET IDENTITY_INSERT [dbo].[StudentApplications] OFF
/****** Object:  Table [dbo].[GradeActivities]    Script Date: 05/04/2021 21:54:47 ******/
INSERT [dbo].[GradeActivities] ([id], [grade_type_id], [grade_title], [grade_date], [total_marks]) VALUES (N'765715a9-c1c9-40b2-a186-5b6b05465435', 1, N'Quiz 01', CAST(0x34420B00 AS Date), 50)
/****** Object:  Table [dbo].[Attendance]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Attendance] ON
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (1, 1, 1, NULL, CAST(0xA2410B00 AS Date), N'P', 1, N'6ff98c79-84c5-43ba-8ca7-53b01ae57029')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (2, 1, 1, NULL, CAST(0xA3410B00 AS Date), N'P', 1, N'e244851c-48e9-4f87-9a5e-88d7acc957a6')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (3, 1, 1, NULL, CAST(0xA4410B00 AS Date), N'A', 1, N'641ca04c-85c0-4f4a-87d3-cb849884603c')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (8, 1, 1, NULL, CAST(0xA6410B00 AS Date), N'L', 1, N'4be84b31-4003-437f-97dc-d4932e3ff731')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (10, 1, 1, NULL, CAST(0xA7410B00 AS Date), N'P', 1, N'98278003-59b0-41e5-97e3-363d2f65808d')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (11, 1, 1, NULL, CAST(0xA8410B00 AS Date), N'P', 1, N'c705bb1d-f7cf-4c37-a51a-827094a63249')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (12, 1, 1, NULL, CAST(0xA9410B00 AS Date), N'A', 1, N'95f98e21-018c-440e-a82a-8050c5fb2002')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (15, 1, 1, NULL, CAST(0xAA410B00 AS Date), N'P', 1, N'f85e8c09-d35c-4058-bcc6-6922c140dc7e')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (16, 1, 1, NULL, CAST(0xAB410B00 AS Date), N'L', 1, N'3bed1351-660c-47b4-9fb7-27848634da55')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (17, 1, 1, NULL, CAST(0x8E410B00 AS Date), N'P', 1, N'cef4ff95-3e43-431e-afd4-250ebb8c21b4')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (18, 1, 1, NULL, CAST(0x8F410B00 AS Date), N'P', 1, N'7b076038-7e2a-4999-8a16-27d268089bd4')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (19, 1, 1, NULL, CAST(0x91410B00 AS Date), N'A', 1, N'1212694f-9ac6-4432-945c-80ddbc8b4f34')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (20, 1, 1, NULL, CAST(0x92410B00 AS Date), N'P', 1, N'897cefd7-4ae1-499c-9e3c-bc4f87960e0f')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (21, 1, 1, NULL, CAST(0x93410B00 AS Date), N'L', 1, N'04b8d7f8-e6fd-40f6-b068-1413d3ae4d1b')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (22, 1, 1, NULL, CAST(0x94410B00 AS Date), N'P', 1, N'dea5736d-cdde-4e3a-904e-5c7d2cfcd854')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (23, 1, 1, NULL, CAST(0x95410B00 AS Date), N'P', 1, N'351a4b8e-c81b-4e28-ba54-9e45278d0770')
INSERT [dbo].[Attendance] ([id], [student_id], [class_id], [subject_id], [attendance_date], [status], [session_id], [guid]) VALUES (24, 1, 1, NULL, CAST(0x96410B00 AS Date), N'L', 1, N'2d492668-ab76-400f-b260-32fb88b9e3f7')
SET IDENTITY_INSERT [dbo].[Attendance] OFF
/****** Object:  Table [dbo].[LectureContentFiles]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[LectureContentFiles] ON
INSERT [dbo].[LectureContentFiles] ([id], [guid], [original_name], [logical_name], [extension], [date], [size], [path], [course_outline_id]) VALUES (1, N'99899206-b1a7-475b-9964-87846f0cc19c', N'abc', N'69f505b8-8b10-4185-93c4-401eafc5135dabc', N'.txt', CAST(0x070000000000FF410B AS DateTime2), 20, N'/Documents/abc.txt', 1)
SET IDENTITY_INSERT [dbo].[LectureContentFiles] OFF
/****** Object:  Table [dbo].[Grades]    Script Date: 05/04/2021 21:54:47 ******/
SET IDENTITY_INSERT [dbo].[Grades] ON
INSERT [dbo].[Grades] ([id], [student_id], [obtained_marks], [remarks], [guid], [grade_activity_id]) VALUES (3, 1, 45, N'Good', N'829407a4-c872-40bc-b2ed-4f6024b75fd8', N'765715a9-c1c9-40b2-a186-5b6b05465435')
SET IDENTITY_INSERT [dbo].[Grades] OFF
