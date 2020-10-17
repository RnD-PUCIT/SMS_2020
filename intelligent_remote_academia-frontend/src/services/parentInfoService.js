const parent_info = {
    user_info: {
        id: 1,
        first_name: "Salman",
        last_name: "Sadiq",
        profile_picture: ""
    },
    subjects: [
        {
            id: 1,
            subject_name: "Maths",
            teacher_id: 1,
            teacher_name: "Nadeem Abbass",
        },
        {
            id: 1,
            subject_name: "Maths",
            teacher_id: 1,
            teacher_name: "Nadeem Abbass",
        },
        {
            id: 1,
            subject_name: "Maths",
            teacher_id: 1,
            teacher_name: "Nadeem Abbass",
        },
        {
            id: 1,
            subject_name: "Maths",
            teacher_id: 1,
            teacher_name: "Nadeem Abbass",
        },
    ]
}

export function getParentInfo() {
    return parent_info;
}