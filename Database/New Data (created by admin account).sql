USE [IRA_API]
GO
/****** Object:  Table [dbo].[Terms]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Days]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Classes]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Classes] ON
INSERT [dbo].[Classes] ([id], [class_name], [section], [guid]) VALUES (1, N'9th', N'Blue', N'f50d97c2-03dd-4fde-8c38-0f0f40f3c276')
INSERT [dbo].[Classes] ([id], [class_name], [section], [guid]) VALUES (2, N'5th', N'Red', N'4a75a298-fb3c-45ee-a391-b9617d9271e0')
SET IDENTITY_INSERT [dbo].[Classes] OFF
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 05/22/2021 17:10:13 ******/
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'542df979-4259-4aa3-a349-630b0709430c', N'Admin', N'ADMIN', N'3fc88b1e-ae68-4fdb-b271-793f76a263a4')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'a02242fe-4891-4944-9f58-3daba80102b9', N'Student', N'STUDENT', N'15d76f30-5174-4654-aea1-64bf77ee2f9a')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'b73326f8-3381-4ed3-8bb5-fdf06e2e3ac8', N'Teacher', N'TEACHER', N'2af8fd8c-109b-4997-9476-70f0bdc7b1f6')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'd5780211-eb82-48d4-b754-64fe21bf02e7', N'Parent', N'PARENT', N'1c80ba4c-dcd2-469f-b18a-4a489ca87997')
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 05/22/2021 17:10:13 ******/
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201206165333_initial Migration', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222173408_academic-calender-added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222183557_academic-calender-guid-added', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201224085030_TimeTableAdded', N'5.0.2')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201231193722_termstableadded', N'5.0.2')
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
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 05/22/2021 17:10:13 ******/
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'1e5061ca-7883-4131-941d-b73c6850ea30', N'admin', N'ADMIN', N'admin@ira.com', N'ADMIN@IRA.COM', 0, N'AQAAAAEAACcQAAAAENy1ppKmv6mhAsK66htDJqj8EJ8uEa3ez5r0NWiCajVlbCaTPjvbxIycUkfN/W9YKA==', N'SM3W5C5CQSKL4GTTZNYRU7TV6XUDLUIX', N'07a60967-6096-4135-be35-18a165b3e546', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'6b20350c-4742-4189-b381-18d83446b574', N'1234', N'1234', N'emad.hassan@gmail.com', N'EMAD.HASSAN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEJfKiGya2CqPTFUfhWg9kH6etPhrRNR6ktt+jz4jT2VeieWwNUO5KrCco77zF2FWdw==', N'U6VSNETVSXTL4CW6AOMDMTELY2PLEKP4', N'2e059151-b1e3-4213-8473-1794f337d6ba', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'bc2adf00-6fa2-43dc-966d-4deef12dd993', N'ira001', N'IRA001', NULL, NULL, 0, N'AQAAAAEAACcQAAAAED2kW6h0VZpwFbYV+EFz5AOnQ6mAVnkGVCmZJDmhrABUj0F+sXARyVnd9OQi2pCBQw==', N'H5GP7R6B7Q3UZGQQSON6BVI36ZM52AXF', N'f9ab7959-db6b-4eef-b47d-a9dc0eb3a75d', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'e0652a55-63c4-4ece-9f83-f3de0dfa7626', N'ira002', N'IRA002', NULL, NULL, 0, N'AQAAAAEAACcQAAAAEG3WJcg/Ka425vgdWjEx/uxGlfdD28nRjY7fB+zBFKtmoklHpOq8mYi2jYXNcaOUQw==', N'O5PRZBANWALGKTDASEPXOLV2JNXM2CC7', N'932fd618-a976-4390-9bec-ff75f04b135d', NULL, 0, 0, NULL, 1, 0)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'e57efcbf-f191-4a0e-9c96-f62ab824d8a5', N'nadeem.abbass', N'NADEEM.ABBASS', N'nadeem.abbass@ira.com', N'NADEEM.ABBASS@IRA.COM', 0, N'AQAAAAEAACcQAAAAEJ0lJeQWENFw9cVr/XJtT/RdrH/fcfbKxgC9gbEjYotGDEI41whRo4jifPnvrgLsKw==', N'TKW7RQPOPJ6XP2SPFTLI7XSWIGM55JQZ', N'708ede75-c1e2-4112-81ee-cf5f6cbefa53', NULL, 0, 0, NULL, 1, 0)
/****** Object:  Table [dbo].[Subjects]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Subjects] ON
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (1, N'maths8th', N'Mathematics', N'maths', N'4048f6c9-3cae-4b5c-9c31-d189cdb38199')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (2, N'computer8th', N'Computer Science', N'computer', N'021a208f-9f88-412e-9d85-6f03b0ef77f5')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (3, N'urdu8th', N'Urdu', N'urdu', N'c7041b6e-19ea-4807-bd10-f7a720491b8c')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (4, N'english8th', N'English', N'english', N'ca0500ce-c90e-40a7-bb48-d7a24b59b9d9')
SET IDENTITY_INSERT [dbo].[Subjects] OFF
/****** Object:  Table [dbo].[Bank_Details]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[StudentApplicationFiles]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Sessions]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Sessions] ON
INSERT [dbo].[Sessions] ([id], [session_year], [guid]) VALUES (1, N'2021-2022', N'860cfe88-1ace-4c38-b061-3c6b7defa6b3')
SET IDENTITY_INSERT [dbo].[Sessions] OFF
/****** Object:  Table [dbo].[Security_Questions]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Parents]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Parents] ON
INSERT [dbo].[Parents] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [occupation], [job_address], [profile_picture], [guid], [UserId1], [user_id]) VALUES (1, N'Emad', N'Hassan', N'emad.hassan@gmail.com', N'1234', N'Lahore, Punjab', N'16321236213', N'', N'Business Man', N'Lahore, Pakistan', NULL, N'881dd417-e0e2-4f79-941c-6cce260cc267', NULL, N'6b20350c-4742-4189-b381-18d83446b574')
SET IDENTITY_INSERT [dbo].[Parents] OFF
/****** Object:  Table [dbo].[Parent_Login]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Students]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Students] ON
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid], [UserId1], [user_id]) VALUES (1, N'ira001', N'Irtaza', N'Nadeem', CAST(0xBE2C0B00 AS Date), 1, 1, 1, NULL, 1, CAST(0x00000000 AS Date), N'7bf08a15-2a57-4dbf-a6bc-08813b61e8d4', NULL, N'bc2adf00-6fa2-43dc-966d-4deef12dd993')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid], [UserId1], [user_id]) VALUES (2, N'ira002', N'Faizan', N'Malik', CAST(0xDF360B00 AS Date), 1, 2, 1, NULL, 1, CAST(0x00000000 AS Date), N'7017ebf2-da51-47b1-a82c-df000995ec6f', NULL, N'e0652a55-63c4-4ece-9f83-f3de0dfa7626')
SET IDENTITY_INSERT [dbo].[Students] OFF
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 05/22/2021 17:10:13 ******/
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'1e5061ca-7883-4131-941d-b73c6850ea30', N'542df979-4259-4aa3-a349-630b0709430c')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'bc2adf00-6fa2-43dc-966d-4deef12dd993', N'a02242fe-4891-4944-9f58-3daba80102b9')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'e0652a55-63c4-4ece-9f83-f3de0dfa7626', N'a02242fe-4891-4944-9f58-3daba80102b9')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'e57efcbf-f191-4a0e-9c96-f62ab824d8a5', N'b73326f8-3381-4ed3-8bb5-fdf06e2e3ac8')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'6b20350c-4742-4189-b381-18d83446b574', N'd5780211-eb82-48d4-b754-64fe21bf02e7')
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Admins]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Admins] ON
INSERT [dbo].[Admins] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [profile_picture], [guid], [user_id], [UserId1]) VALUES (1, N'Admin', N'Admin', N'admin@ira.com', N'1234-1231231-1', N'Lahore', N'03164141068', NULL, NULL, N'733cf630-950b-40c1-8cac-effd74be12da', N'1e5061ca-7883-4131-941d-b73c6850ea30', NULL)
SET IDENTITY_INSERT [dbo].[Admins] OFF
/****** Object:  Table [dbo].[AcademicCalenders]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Class_Subject_Alloc]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Class_Subject_Alloc] ON
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (1, 1, 1)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (2, 1, 3)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (3, 1, 2)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (4, 1, 4)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (5, 2, 1)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (6, 2, 4)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (7, 2, 3)
SET IDENTITY_INSERT [dbo].[Class_Subject_Alloc] OFF
/****** Object:  Table [dbo].[Charges]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[CourseOutlines]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Grade_Types]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[TimeTables]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Diary]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Teachers]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Teachers] ON
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid], [UserId1], [user_id]) VALUES (1, N'Nadeem', N'Abbass', N'12345678901', CAST(0x150C0B00 AS Date), N'nadeem.abbass@ira.com', N'Lahore, Punjab', N'03164141068', N'', N'Maths', CAST(0x8A420B00 AS Date), 50000, NULL, N'd05f0caa-424f-44f9-b161-7ec7dbe4d7bc', NULL, N'e57efcbf-f191-4a0e-9c96-f62ab824d8a5')
SET IDENTITY_INSERT [dbo].[Teachers] OFF
/****** Object:  Table [dbo].[Teacher_Subject_Alloc]    Script Date: 05/22/2021 17:10:13 ******/
SET IDENTITY_INSERT [dbo].[Teacher_Subject_Alloc] ON
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (2, 1, 2, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (3, 1, 3, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (4, 1, 4, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (5, 1, 1, 2)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (6, 1, 3, 2)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (7, 1, 4, 2)
SET IDENTITY_INSERT [dbo].[Teacher_Subject_Alloc] OFF
/****** Object:  Table [dbo].[Fee_Challan]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Announcements]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Subject_GradeType_Alloc]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[StudentApplications]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[GradeActivities]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Attendance]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[LectureContentFiles]    Script Date: 05/22/2021 17:10:13 ******/
/****** Object:  Table [dbo].[Grades]    Script Date: 05/22/2021 17:10:13 ******/
