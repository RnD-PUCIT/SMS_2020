const dashboard = {
    user_info: {
        id: 1,
        first_name: "Harry",
        last_name: "Potter",
        profile_picture: ""
    },
    subjects: [
        {
            id: 1,
            subject_name: "Defence Against Dark Arts",
            teacher_id: 1,
            teacher_name: "Severous Snape",
        },
        {
            id: 2,
            subject_name: "Potions",
            teacher_id: 2,
            teacher_name: "Mad Eye",
        },
        {
            id: 3,
            subject_name: "Dark Arts",
            teacher_id: 3,
            teacher_name: "Albus Dumberldore",
        },
        {
            id: 4,
            subject_name: "Muggle Studies",
            teacher_id: 4,
            teacher_name: "Remus Lupin",
        },
    ]
}

export function getDashboardInfo() {
    return dashboard;
}