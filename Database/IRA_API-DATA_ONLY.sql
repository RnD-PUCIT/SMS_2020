USE [IRA_API]
GO
/****** Object:  Table [dbo].[Sessions]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Sessions] ON
INSERT [dbo].[Sessions] ([id], [session_year], [guid]) VALUES (1, N'2019-2020', N'89d9f08c-3d1f-40f0-8a01-0200a150af09')
SET IDENTITY_INSERT [dbo].[Sessions] OFF
/****** Object:  Table [dbo].[Security_Questions]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Security_Questions] ON
INSERT [dbo].[Security_Questions] ([id], [question], [guid]) VALUES (1, N'What is favorite color? ', N'516cc674-c3b9-4afc-b49c-0de774297f18')
SET IDENTITY_INSERT [dbo].[Security_Questions] OFF
/****** Object:  Table [dbo].[Parents]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Parents] ON
INSERT [dbo].[Parents] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [occupation], [job_address], [profile_picture], [guid]) VALUES (1, N'Ali', N'Raza', N'ali@gmail.com', N'1234', N'abc', N'09880', N'09090', N'busy', N'xyz', NULL, N'b1db1249-0dd6-4858-bc58-ee0df062ca29')
INSERT [dbo].[Parents] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [occupation], [job_address], [profile_picture], [guid]) VALUES (2, N'Ahmad', N'Raza', N'raza@gmail.com', N'6789', N'xzy', N'847298', N'8970', N'job', N'hgf', N'', N'db26133e-ab75-465d-beab-ecd5b8cf0fe1')
INSERT [dbo].[Parents] ([id], [first_name], [last_name], [email], [cnic], [address], [contact_primary], [contact_secondary], [occupation], [job_address], [profile_picture], [guid]) VALUES (4, N'Hammad', N'Saqib', N'hammaad@gmail.com', N'6534834', N'Iqbal Town, Lahore', N'03487563', N'0923473766', N'Job', N'GHF', NULL, N'389c742a-55bb-4ab3-b6e0-833b4dc19e78')
SET IDENTITY_INSERT [dbo].[Parents] OFF
/****** Object:  Table [dbo].[Subjects]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Subjects] ON
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (1, N'8th-physics', N'Physics', N'physics', N'8a004bfd-c7f8-4cd0-ab87-759e614ddc49')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (2, N'8th-math', N'Math', N'math', N'c9b88e44-65c1-4949-a7bb-3f32bef782c9')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (3, N'8th-english', N'English', N'english', N'ba850e46-fbef-4df7-86b3-965e5bb8d412')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (4, N'5th-science', N'Science', N'science', N'5d48183d-61e1-4820-a056-128581286820')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (5, N'5th-urdu', N'Urdu', N'urdu', N'4419acfa-4139-4970-9b4d-bd38d6ed7d06')
INSERT [dbo].[Subjects] ([id], [subject_code], [subject_name], [subject_slug], [guid]) VALUES (6, N'5th-social', N'Social Studies', N'social-studies', N'f237281a-00c4-46bb-8a4a-4ecabfff77d2')
SET IDENTITY_INSERT [dbo].[Subjects] OFF
/****** Object:  Table [dbo].[Grade_Types]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Grade_Types] ON
INSERT [dbo].[Grade_Types] ([id], [grade_type], [grade_type_slug], [guid]) VALUES (1, N'Quizzes', N'quizzes', N'c1d27970-3490-40c2-ac33-fad69b60d944')
INSERT [dbo].[Grade_Types] ([id], [grade_type], [grade_type_slug], [guid]) VALUES (2, N'Assignments', N'assignments', N'57529c75-241a-4761-9190-d9bbf0dc33ab')
INSERT [dbo].[Grade_Types] ([id], [grade_type], [grade_type_slug], [guid]) VALUES (3, N'Exams', N'exmas', N'428f1a6e-7ee3-47cd-a451-75e3dacb2ecd')
INSERT [dbo].[Grade_Types] ([id], [grade_type], [grade_type_slug], [guid]) VALUES (4, N'Presentations', N'presentations', N'6e09e40b-32a8-4337-841d-33f9d74768e2')
SET IDENTITY_INSERT [dbo].[Grade_Types] OFF
/****** Object:  Table [dbo].[Bank_Details]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Bank_Details] ON
INSERT [dbo].[Bank_Details] ([id], [bank_name], [bank_branch], [account_no], [guid]) VALUES (1, N'HBL', N'Mall Road', 1234567, N'0a1413e2-2320-4c79-8bda-31c54e81bd38')
SET IDENTITY_INSERT [dbo].[Bank_Details] OFF
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12/23/2020 01:09:21 ******/
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201206165333_initial Migration', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222103709_days+timetable-models-added', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222104949_days+timetable-updated', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222105317_timetable-updated', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222105737_days-timetable-nullable-false', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20201222184758_guid-added-in-timetable-model', N'5.0.0')
/****** Object:  Table [dbo].[Days]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Days] ON
INSERT [dbo].[Days] ([id], [day]) VALUES (1, N'Monday')
INSERT [dbo].[Days] ([id], [day]) VALUES (2, N'Tuesday')
INSERT [dbo].[Days] ([id], [day]) VALUES (3, N'Wednesday')
INSERT [dbo].[Days] ([id], [day]) VALUES (4, N'Thursday')
INSERT [dbo].[Days] ([id], [day]) VALUES (5, N'Friday')
INSERT [dbo].[Days] ([id], [day]) VALUES (6, N'Saturday')
INSERT [dbo].[Days] ([id], [day]) VALUES (7, N'Sunday')
SET IDENTITY_INSERT [dbo].[Days] OFF
/****** Object:  Table [dbo].[Classes]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Classes] ON
INSERT [dbo].[Classes] ([id], [class_name], [section], [guid]) VALUES (1, N'8th', N'Blue', N'765715a9-c1c9-40b2-a186-5b6b05467825')
INSERT [dbo].[Classes] ([id], [class_name], [section], [guid]) VALUES (2, N'5th', N'Red', N'f102465f-f705-460f-b1f7-eb1199ea9b8f')
SET IDENTITY_INSERT [dbo].[Classes] OFF
/****** Object:  Table [dbo].[Teachers]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Teachers] ON
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid]) VALUES (1, N'Nadeem', N'Abbas', N'13897293', CAST(0x03140B00 AS Date), N'nadeem@gmai.com', N'abc', N'09218901', N'08078787', N'Math', CAST(0x8D410B00 AS Date), 15000, NULL, N'2dc57719-1909-497e-8f56-8818f8d7e1e2')
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid]) VALUES (3, N'Shahvez', N'Ali', N'2356622', CAST(0xDC160B00 AS Date), N'shah@gmail.com', N'bxc', N'3478959739', N'786868', N'Physics', CAST(0x78410B00 AS Date), 500000000, NULL, N'7c783310-918b-4a1a-b6cc-9cb42f1ee343')
INSERT [dbo].[Teachers] ([id], [first_name], [last_name], [cnic], [dob], [email], [address], [contact_primary], [contact_secondary], [specialization], [joining_date], [salary], [profile_picture], [guid]) VALUES (4, N'Shakeel', N'Zafar', N'420', CAST(0x39180B00 AS Date), N'shakeel@gmail.com', N'Chand py', N'090078601', N'090078701', N'Computer++', CAST(0x5B950A00 AS Date), 10, NULL, N'185e2b4b-0b49-4024-a0dc-574fb082e6e0')
SET IDENTITY_INSERT [dbo].[Teachers] OFF
/****** Object:  Table [dbo].[TimeTables]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[TimeTables] ON
INSERT [dbo].[TimeTables] ([id], [class_id], [session_id], [subject_id], [day_id], [time_slot], [guid]) VALUES (3, 1, 1, 1, 1, N'8:00 - 8:30', N'9a09fa22-f9c4-4db5-85de-4334b6fe4c6d')
INSERT [dbo].[TimeTables] ([id], [class_id], [session_id], [subject_id], [day_id], [time_slot], [guid]) VALUES (4, 1, 1, 2, 1, N'8:30 - 9:00', N'dec6b032-425b-4b31-8031-4181ddc7c200')
INSERT [dbo].[TimeTables] ([id], [class_id], [session_id], [subject_id], [day_id], [time_slot], [guid]) VALUES (5, 1, 1, 3, 1, N'9:00 - 10:00', N'a51c11e6-7246-41cb-a1ee-08f326db2722')
INSERT [dbo].[TimeTables] ([id], [class_id], [session_id], [subject_id], [day_id], [time_slot], [guid]) VALUES (6, 1, 1, 1, 2, N'8:00 - 8:30', N'3df86351-36b1-4c86-9119-dcb3611ec589')
INSERT [dbo].[TimeTables] ([id], [class_id], [session_id], [subject_id], [day_id], [time_slot], [guid]) VALUES (7, 1, 1, 2, 2, N'8:30 - 9:00', N'3986b0ae-f8ec-4083-a5bb-243a91a93a58')
INSERT [dbo].[TimeTables] ([id], [class_id], [session_id], [subject_id], [day_id], [time_slot], [guid]) VALUES (8, 1, 1, 3, 2, N'9:00 - 10:00', N'1b1db4e6-5c7d-4f03-91ef-c6a19ebc9ada')
SET IDENTITY_INSERT [dbo].[TimeTables] OFF
/****** Object:  Table [dbo].[Teacher_Subject_Alloc]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Teacher_Subject_Alloc] ON
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (7, 3, 2, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (8, 4, 3, 1)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (9, 1, 4, 2)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (10, 3, 5, 2)
INSERT [dbo].[Teacher_Subject_Alloc] ([id], [teacher_id], [subject_id], [class_id]) VALUES (11, 4, 6, 2)
SET IDENTITY_INSERT [dbo].[Teacher_Subject_Alloc] OFF
/****** Object:  Table [dbo].[Class_Subject_Alloc]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Class_Subject_Alloc] ON
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (1, 1, 1)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (2, 1, 2)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (3, 1, 3)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (4, 2, 4)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (5, 2, 5)
INSERT [dbo].[Class_Subject_Alloc] ([id], [class_id], [subject_id]) VALUES (6, 2, 6)
SET IDENTITY_INSERT [dbo].[Class_Subject_Alloc] OFF
/****** Object:  Table [dbo].[Charges]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Charges] ON
INSERT [dbo].[Charges] ([id], [amount], [class_id], [guid]) VALUES (1, 1000, 1, N'500040c8-8912-47a8-a620-ce3ed45e1873')
INSERT [dbo].[Charges] ([id], [amount], [class_id], [guid]) VALUES (2, 2000, 2, N'47d0824d-96d9-4784-a48f-8db2ae040766')
SET IDENTITY_INSERT [dbo].[Charges] OFF
/****** Object:  Table [dbo].[Diary]    Script Date: 12/23/2020 01:09:21 ******/
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
/****** Object:  Table [dbo].[Subject_GradeType_Alloc]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Subject_GradeType_Alloc] ON
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (2, 1, 1, 2)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (3, 1, 1, 3)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (4, 1, 1, 4)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (5, 1, 2, 1)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (6, 1, 2, 2)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (7, 1, 2, 3)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (8, 1, 2, 4)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (9, 1, 3, 1)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (10, 1, 3, 2)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (11, 1, 3, 3)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (12, 1, 3, 4)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (14, 2, 4, 1)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (16, 2, 4, 2)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (17, 2, 4, 3)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (18, 2, 4, 4)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (19, 2, 5, 1)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (20, 2, 5, 2)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (21, 2, 5, 3)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (22, 2, 5, 4)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (23, 2, 6, 1)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (24, 2, 6, 2)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (25, 2, 6, 3)
INSERT [dbo].[Subject_GradeType_Alloc] ([id], [class_id], [subject_id], [grade_type_id]) VALUES (27, 2, 6, 4)
SET IDENTITY_INSERT [dbo].[Subject_GradeType_Alloc] OFF
/****** Object:  Table [dbo].[Students]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Students] ON
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid]) VALUES (1, N'1', N'Ali', N'Ahmad', CAST(0xB5410B00 AS Date), 1, 1, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'829407a4-c872-40bc-b2ed-4f6024b75fd8')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid]) VALUES (2, N'2', N'Waseem', N'Akhroti', CAST(0xB5410B00 AS Date), 1, 2, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'84f7214f-ecd4-42d4-8af9-f9d42b5e76ce')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid]) VALUES (3, N'3', N'Iqrar', N'Ali', CAST(0xB5410B00 AS Date), 1, 2, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'533854dd-1490-4651-ae5d-e63e48031712')
INSERT [dbo].[Students] ([id], [roll_no], [first_name], [last_name], [dob], [parent_id], [class_id], [is_active], [profile_picture], [session_id], [enrollment_date], [guid]) VALUES (4, N'12', N'Arslan', N'Yousaf', CAST(0xB5410B00 AS Date), 1, 1, 1, NULL, 1, CAST(0xB5410B00 AS Date), N'bef212da-fd88-4999-ab39-0530fc249956')
SET IDENTITY_INSERT [dbo].[Students] OFF
/****** Object:  Table [dbo].[Parent_Login]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Parent_Login] ON
INSERT [dbo].[Parent_Login] ([id], [cnic], [password], [parent_id], [sq_id], [sq_answer]) VALUES (1, N'1234', N'$2a$11$atjVPMkET4j1b6Skhcqaz.LQs0DV26Y9YIXqy2VVllZ215jf/mQNy', 1, 1, N'RED')
SET IDENTITY_INSERT [dbo].[Parent_Login] OFF
/****** Object:  Table [dbo].[Grades]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Grades] ON
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (3, 1, 1, 1, CAST(0xB5410B00 AS Date), 50, 30, 1, N'DSM', N'Good', 1, N'f091d67d-292c-420a-84db-90a9aba786a0')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (4, 1, 1, 1, CAST(0xB6410B00 AS Date), 40, 25, 1, N'Secure Servers', N'Improvement Needed', 1, N'9400bb1e-9cf9-4da6-b915-0cf0cc72fea0')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (5, 1, 1, 1, CAST(0x8D410B00 AS Date), 30, 25, 1, N'Cost Management', N'Well Done', 1, N'ac3d9747-66a0-48b5-95a9-66ec701e9b15')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (6, 1, 1, 2, CAST(0x7C410B00 AS Date), 20, 18, 1, N'Requirement Analysis', N'Very Good', 1, N'3c6de51c-7cf6-4e71-ad74-ac54f383c8fd')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (7, 1, 1, 2, CAST(0x8F410B00 AS Date), 25, 22, 1, N'Inheritance', N'Good', 1, N'7a0affd4-9685-4e2d-bfc3-752a2b343862')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (8, 1, 1, 3, CAST(0x50410B00 AS Date), 15, 12, 1, N'Abstract Classes', N'Good Effort', 1, N'8278b16c-5a77-4d43-81e7-c103b97f7e8b')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (9, 1, 1, 3, CAST(0x7B410B00 AS Date), 30, 29, 1, N'Interfaces', N'Well Done', 1, N'831a9e85-eca4-40f2-8fd6-425398a3836c')
INSERT [dbo].[Grades] ([id], [student_id], [class_id], [subject_id], [grade_date], [total_marks], [obtained_marks], [grade_type_id], [grade_title], [remarks], [session_id], [guid]) VALUES (10, 1, 1, 3, CAST(0x84410B00 AS Date), 15, 12, 1, N'Operator Overloading', N'Good', 1, N'ae684c11-4e38-49ad-a0e3-0e1f50d79280')
SET IDENTITY_INSERT [dbo].[Grades] OFF
/****** Object:  Table [dbo].[Fee_Challan]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Fee_Challan] ON
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (1, 1, CAST(0xDF410B00 AS Date), CAST(0xED410B00 AS Date), 1, N'dfhigvndufhbji', 0, 2000, N'52748d86-d776-40bd-8363-1ff553484f6d')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (2, 1, CAST(0xE3410B00 AS Date), CAST(0xF7410B00 AS Date), 1, N'gfjhfkjfghjkhfgjk', 0, 500, N'822c29fa-849b-4377-ba49-05ab9a3d5535')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (3, 1, CAST(0xC5410B00 AS Date), CAST(0xD9410B00 AS Date), 1, N'fjkytgkughk.h.p;', 0, 100, N'd48e2d0d-a428-4f25-bb80-a23a9dbcf35d')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (5, 1, CAST(0xA6410B00 AS Date), CAST(0xBA410B00 AS Date), 1, N'igytfg7867i', 0, 500, N'e1066f49-aae6-44a6-bbd8-71b1696b954a')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (6, 2, CAST(0xF5410B00 AS Date), CAST(0xFE410B00 AS Date), 1, N'fyhierufhieruULL', 0, 0, N'6c7b0a71-8625-4a0d-9948-eee9917db91a')
INSERT [dbo].[Fee_Challan] ([id], [student_id], [issue_date], [due_date], [bank_id], [instructions], [is_paid], [unpaid_charges], [guid]) VALUES (7, 2, CAST(0xF5410B00 AS Date), CAST(0x1B420B00 AS Date), 1, N'hgjmyfmyfjfyuf', 0, 500, N'f7da74a5-e027-4bd9-8710-fd9fb9507467')
SET IDENTITY_INSERT [dbo].[Fee_Challan] OFF
/****** Object:  Table [dbo].[Attendance]    Script Date: 12/23/2020 01:09:21 ******/
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
/****** Object:  Table [dbo].[Announcements]    Script Date: 12/23/2020 01:09:21 ******/
SET IDENTITY_INSERT [dbo].[Announcements] ON
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (1, 1, 1, N'Fee Submission', N'Its your second reminder to kindly submit your fee before the Due Date.   ', 0, 1, N'74531975-986a-4fd6-8d2a-d8a436643b57', CAST(0x0780671AB773F4410B AS DateTime2))
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (2, 1, 2, N'Attendence ', N'Ahmad Ali is absent today.', 1, 1, N'512dc23d-7963-404f-92d7-0b98dadbb981', CAST(0x07B0DC1AB773F4410B AS DateTime2))
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (3, NULL, 1, N'Maths Class Timing Changed', N'Now Your Maths lecture is scheduled from 11:30 AM to 12:20PM .', 1, 1, N'0acf10ab-74ca-4bb8-877f-f420e4819eeb', CAST(0x07B0DC1AB773F4410B AS DateTime2))
INSERT [dbo].[Announcements] ([id], [student_id], [class_id], [title], [announcment], [read], [session_id], [guid], [date]) VALUES (4, NULL, NULL, N'Winter Vocations', N'Annual winter holidays have been announced for the institue. The institue will remain close from Deceember 25,2020 till january 10,2020. Online Classes will be resumed from January 11,2020. Make your vocations productive. Good Luck. ', 1, 1, N'0a26ed2e-e014-4437-b301-be77f1e20c54', CAST(0x07B0DC1AB773F4410B AS DateTime2))
SET IDENTITY_INSERT [dbo].[Announcements] OFF
SET IDENTITY_INSERT [dbo].[AcademicCalenders] ON
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (5, N'First Term Exams', CAST(0x070000000000FE410B AS DateTime2), 1, N'dc454e94-c8f2-4403-806f-c88b3d20b234')
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (6, N'Second Term Exams', CAST(0x07000000000059420B AS DateTime2), 1, N'5a237159-82ad-4e04-9753-5b124095e986')
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (7, N'Third term Exams', CAST(0x070000000000F4420B AS DateTime2), 1, N'71da43ed-b505-4723-bd31-908742f8394c')
INSERT [dbo].[AcademicCalenders] ([id], [event], [date], [session_id], [guid]) VALUES (8, N'Summer Vacations', CAST(0x07000000000096420B AS DateTime2), 1, N'f1a9ab38-0937-4eb4-9e44-221eb5c9b34b')
SET IDENTITY_INSERT [dbo].[AcademicCalenders] OFF