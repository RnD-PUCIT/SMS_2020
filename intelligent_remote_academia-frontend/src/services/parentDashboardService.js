const dashboard = {
  user_info: {
    id: 1,
    first_name: "Salman",
    last_name: "Sadiq",
    profile_picture: "",
  },
  subjects: [
    {
      id: 1,
      subject_name: "Maths",
      teacher_id: 1,
      teacher_name: "Nademm Abbass",
    },
    {
      id: 2,
      subject_name: "Physics",
      teacher_id: 2,
      teacher_name: "Muhammad Imran Afzal",
    },
    {
      id: 3,
      subject_name: "Computer Science",
      teacher_id: 3,
      teacher_name: "Iftikhar Butt",
    },
    {
      id: 4,
      subject_name: "Urdu",
      teacher_id: 4,
      teacher_name: "Muhammad Tahir",
    },
  ],
};

export function getDashboardInfo() {
  return dashboard;
}
