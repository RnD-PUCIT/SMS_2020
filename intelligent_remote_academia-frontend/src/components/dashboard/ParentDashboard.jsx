import React, { useEffect, useState } from 'react';
import http from '../../services/httpService';
import MainContent from '../layouts/mainContent/mainContent';

const ParentDashboard = () => {
  //   State variables
  const [dashboardInfo, setDashboardInfo] = useState(null);
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);

  //   function to call api
  useEffect(async () => {
    // Get parent personal info from the service
    const { data } = await http.get(`/subjects`);

    // Get selected student's index from browsers local storage
    let index = localStorage.getItem('selectedChildIndex');

    if (!index) index = 0;

    const { dashboard } = data;
    setDashboardInfo(dashboard);
    setStudentList(dashboard.students);
    setSubjects(dashboard.subjects[index]);
    setSelectedStudent(dashboard.students[index]);
  }, []);

  const handleClick = (value) => {
    if (value) {
      const seletedID = value.id;

      const studentsList = [...studentList];
      setSelectedStudent(studentsList.filter((s) => s.id === seletedID)[0]);

      const index = studentsList.indexOf(selectedStudent);

      setSubjects(dashboardInfo.subjects[index]);

      /* 
      Add selected index to browser's local storage
      to maintain the selected student on page refresh.
      */
      localStorage.setItem('selectedChildIndex', index);
    }
  };

  return (
    <MainContent
      studentList={studentList}
      subjects={subjects}
      selectedStudent={selectedStudent}
      studentId={selectedStudent.id}
      classId={selectedStudent.classId}
      sessionId={selectedStudent.sessionId}
      onClick={handleClick}
    />
  );
};

export default ParentDashboard;
