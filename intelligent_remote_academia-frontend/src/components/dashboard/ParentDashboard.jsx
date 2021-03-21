import React, { useEffect, useState } from 'react';
import http from '../../services/httpService';
import ParentRouting from '../routing/ParentRouting';

const ParentDashboard = () => {
  //   State variables
  const [dashboardInfo, setDashboardInfo] = useState(null);
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);

  //   function to call api
  useEffect(async () => {
    try {
      // Get parent personal info from the service
      const { data } = await http.get(`/subjects`);

      // Get selected student's index from browsers local storage
      let index = localStorage.getItem('selectedChildIndex');

      if (!index) index = 0;

      const { dashboard } = data;
      const studentsList = dashboard.students;
      const subjectsList = dashboard.subjects[index];
      const studentSelected = dashboard.students[index];

      setStudentList(studentsList);
      setSelectedStudent(studentSelected);
      setSubjects(subjectsList);
      setDashboardInfo(dashboard);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.location = '/login';
      } else if (error.response && error.response.status === 404) {
        window.location = '/notFound';
      }
    }
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

  if (dashboardInfo) {
    return (
      <ParentRouting
        studentList={studentList}
        subjects={subjects}
        selectedStudent={selectedStudent}
        studentId={selectedStudent.id}
        classId={selectedStudent.classId}
        sessionId={selectedStudent.sessionId}
        onClick={handleClick}
      />
    );
  }
  return null;
};

export default ParentDashboard;
