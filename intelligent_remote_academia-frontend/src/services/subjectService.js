const subject = {
  grades: {
    exams: [
      {
        id: 1,
        grade_date: "12/05/2020",
        total_marks: 100,
        obtained_marks: 85,
        grade_title: "First Term",
        remarks: "none",
      },
      {
        id: 2,
        grade_date: "01/08/2020",
        total_marks: 100,
        obtained_marks: 90,
        grade_title: "2nd Term",
        remarks: "none",
      },
      {
        id: 3,
        grade_date: "20/10/2020",
        total_marks: 100,
        obtained_marks: 70,
        grade_title: "Send-ups",
        remarks: "none",
      },
      {
        id: 4,
        grade_date: "10/01/2020",
        total_marks: 100,
        obtained_marks: 95,
        grade_title: "Pre-board",
        remarks: "none",
      },
      {
        id: 5,
        grade_date: "20/02/2020",
        total_marks: 100,
        obtained_marks: 98,
        grade_title: "Final Term",
        remarks: "none",
      },
    ],
    tests: [
      {
        id: 6,
        grade_date: "05/05/2020",
        total_marks: 50,
        obtained_marks: 15,
        grade_title: "Test 01",
        remarks: "none",
      },
      {
        id: 7,
        grade_date: "12/06/2020",
        total_marks: 50,
        obtained_marks: 32,
        grade_title: "Test 02",
        remarks: "none",
      },
      {
        id: 8,
        grade_date: "25/07/2020",
        total_marks: 50,
        obtained_marks: 45,
        grade_title: "Test 03",
        remarks: "none",
      },
      {
        id: 9,
        grade_date: "18/08/2020",
        total_marks: 50,
        obtained_marks: 20,
        grade_title: "Test 04",
        remarks: "none",
      },
      {
        id: 10,
        grade_date: "09/09/2020",
        total_marks: 50,
        obtained_marks: 46,
        grade_title: "Test 05",
        remarks: "none",
      },
      {
        id: 11,
        grade_date: "07/10/2020",
        total_marks: 50,
        obtained_marks: 38,
        grade_title: "Test 06",
        remarks: "none",
      },
      {
        id: 12,
        grade_date: "29/10/2020",
        total_marks: 50,
        obtained_marks: 14,
        grade_title: "Test 07",
        remarks: "none",
      },
      {
        id: 13,
        grade_date: "23/11/2020",
        total_marks: 50,
        obtained_marks: 37,
        grade_title: "Test 08",
        remarks: "none",
      },
      {
        id: 14,
        grade_date: "19/12/2020",
        total_marks: 50,
        obtained_marks: 30,
        grade_title: "Test 09",
        remarks: "none",
      },
      {
        id: 15,
        grade_date: "12/01/2020",
        total_marks: 50,
        obtained_marks: 48,
        grade_title: "Test 10",
        remarks: "none",
      },
    ],
  },
  diary: [
    {
      id: 1,
      diary_date: "03/05/2020",
      diary_title: "Test 01 on 05/05/2020",
      diary_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum magni commodi tenetur, ad eos ab maiores culpa. Impedit nulla maxime dolorum nesciunt enim odit porro deserunt provident. Assumenda, minima!",
    },
    {
      id: 2,
      diary_date: "05/05/2020",
      diary_title: "Read page # 13 of the book",
    },
    {
      id: 3,
      diary_date: "07/05/2020",
      diary_title: "Solve Exercise Questoin 1-3 of chapter 01",
      diary_content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum magni commodi tenetur, ad eos ab maiores culpa. Impedit nulla maxime dolorum nesciunt enim odit porro deserunt provident. Assumenda, minima!",
    },
    {
      id: 4,
      diary_date: "11/05/2020",
      diary_title: "Solve Excersise Questions 4-7 of chapter 01",
    },
    {
      id: 5,
      diary_date: "13/05/2020",
      diary_title: "Learn Topic # 2 of chapter 01",
    },
    {
      id: 6,
      diary_date: "15/05/2020",
      diary_title: "Read first 2 pages of chapter 02",
    },
    {
      id: 7,
      diary_date: "21/05/2020",
      diary_title: "Read page # 26 of the book",
    },
    {
      id: 8,
      diary_date: "22/05/2020",
      diary_title: "Learn Topic # 4 of chapter 02",
    },
    {
      id: 9,
      diary_date: "25/05/2020",
      diary_title: "Solve Excercise question 1-4 of chapter 02",
    },
    {
      id: 10,
      diary_date: "03/06/2020",
      diary_title: "Learn short answers of Chapter #2",
    },
    {
      id: 11,
      diary_date: "05/06/2020",
      diary_title: "Test 02 of chapter # 1 complete on 10/06/2020",
    },
    {
      id: 12,
      diary_date: "07/06/2020",
      diary_title: "Solve Excercise question 6-9 of chapter 02",
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
