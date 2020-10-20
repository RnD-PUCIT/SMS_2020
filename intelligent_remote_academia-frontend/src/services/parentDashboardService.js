const dashboard = {
  user_info: {
    id: 1,
    first_name: "Salman",
    last_name: "Sadiq",
    profile_picture: "",
  },

  students: [
    {
      id: 1,
      first_name: "Saad",
      last_name: "Salman",
      roll_no: "HU8046",
      profile_picture: "",
      class_id: 1,
      class_name: "BSCS",
      section: "Fall 14",
    },
    {
      id: 2,
      first_name: "Sohasib",
      last_name: "Salman",
      roll_no: "BITF17A040",
      profile_picture: "",
      class_id: 2,
      class_name: "BS IT F17",
      section: "Afternoon",
    },
  ],

  // subjects: [
  //   [
  //     {
  //       id: 1,
  //       subject_name: "Maths",
  //       teacher_id: 1,
  //       teacher_name: "Nademm Abbass",
  //     },
  //     {
  //       id: 2,
  //       subject_name: "Physics",
  //       teacher_id: 2,
  //       teacher_name: "Muhammad Imran Afzal",
  //     },
  //     {
  //       id: 3,
  //       subject_name: "Computer Science",
  //       teacher_id: 3,
  //       teacher_name: "Iftikhar Butt",
  //     },
  //     {
  //       id: 4,
  //       subject_name: "Urdu",
  //       teacher_id: 4,
  //       teacher_name: "Muhammad Tahir",
  //     },
  //   ],
  //   [
  //     {
  //       id: 1,
  //       subject_name: "Maths",
  //       teacher_id: 1,
  //       teacher_name: "Nademm Abbass",
  //     },
  //     {
  //       id: 2,
  //       subject_name: "Physics",
  //       teacher_id: 2,
  //       teacher_name: "Muhammad Imran Afzal",
  //     },
  //     {
  //       id: 3,
  //       subject_name: "Computer Science",
  //       teacher_id: 3,
  //       teacher_name: "Iftikhar Butt",
  //     },
  //     {
  //       id: 4,
  //       subject_name: "Urdu",
  //       teacher_id: 4,
  //       teacher_name: "Muhammad Tahir",
  //     },
  //   ],
  // ],

  subjects: [
    {
      id: 1,
      subject_name: "Maths",
      slug: "maths",
      teacher_id: 1,
      teacher_name: "Nademm Abbass",
    },
    {
      id: 2,
      subject_name: "Physics",
      slug: "physics",
      teacher_id: 2,
      teacher_name: "Muhammad Imran Afzal",
    },
    {
      id: 3,
      subject_name: "Computer Science",
      slug: "computer",
      teacher_id: 3,
      teacher_name: "Iftikhar Butt",
    },
    {
      id: 4,
      subject_name: "Urdu",
      slug: "urdu",
      teacher_id: 4,
      teacher_name: "Muhammad Tahir",
    },
  ],
};

export function getDashboardInfo() {
  return dashboard;
}
