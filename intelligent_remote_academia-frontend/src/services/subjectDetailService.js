const subject = {
  subjectDetails: {
    subjectId: 1,
    subjectCode: "8th-physics",
    subjectName: "Physics",
    subjectSlug: "physics",
    teacherId: 1,
    teacherName: "Nadeem Abbas",
  },
  gradeTypes: [
    {
      gradeTypeId: 1,
      gradeTypeName: "Test",
    },
    {
      gradeTypeId: 2,
      gradeTypeName: "Exam",
    },
  ],
  diary: [
    {
      id: 1,
      diaryDate: "03/05/2020",
      diaryTitle: "Test 01 on 05/05/2020",
      diaryContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum magni commodi tenetur, ad eos ab maiores culpa. Impedit nulla maxime dolorum nesciunt enim odit porro deserunt provident. Assumenda, minima!",
    },
    {
      id: 2,
      diaryDate: "05/05/2020",
      diaryTitle: "Read page # 13 of the book",
    },
    {
      id: 3,
      diaryDate: "07/05/2020",
      diaryTitle: "Solve Exercise Questoin 1-3 of chapter 01",
      diaryContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum magni commodi tenetur, ad eos ab maiores culpa. Impedit nulla maxime dolorum nesciunt enim odit porro deserunt provident. Assumenda, minima!",
    },
    {
      id: 4,
      diaryDate: "11/05/2020",
      diaryTitle: "Solve Excersise Questions 4-7 of chapter 01",
    },
    {
      id: 5,
      diaryDate: "13/05/2020",
      diaryTitle: "Learn Topic # 2 of chapter 01",
    },
    {
      id: 6,
      diaryDate: "15/05/2020",
      diaryTitle: "Read first 2 pages of chapter 02",
    },
    {
      id: 7,
      diaryDate: "21/05/2020",
      diaryTitle: "Read page # 26 of the book",
    },
    {
      id: 8,
      diaryDate: "22/05/2020",
      diaryTitle: "Learn Topic # 4 of chapter 02",
    },
    {
      id: 9,
      diaryDate: "25/05/2020",
      diaryTitle: "Solve Excercise question 1-4 of chapter 02",
    },
    {
      id: 10,
      diaryDate: "03/06/2020",
      diaryTitle: "Learn short answers of Chapter #2",
    },
    {
      id: 11,
      diaryDate: "05/06/2020",
      diaryTitle: "Test 02 of chapter # 1 complete on 10/06/2020",
    },
    {
      id: 12,
      diaryDate: "07/06/2020",
      diaryTitle: "Solve Excercise question 6-9 of chapter 02",
    },
  ],
};

export function getSubjectData() {
  return subject;
}

export function getTestDetails() {
  return subject.grades.tests;
}

export function getExamDetails() {
  return subject.grades.exams;
}
