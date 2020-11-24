import React, { Component } from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

import http from "../../services/httpService";

class Layout extends Component {
  state = {
    dashboardInfo: null,
    studentList: null,
    subjects: null,
    studentId: null,
    classId: null,
  };

  async componentDidMount() {
    try {
      // Get parent personal info from the service
      const { data } = await http.get(`/subjects`);

      const { dashboard: dashboardInfo } = data;
      const studentList = dashboardInfo.students;
      const subjects = dashboardInfo.subjects[0];
      const studentId = dashboardInfo.students[0].id;
      const classId = dashboardInfo.students[0].classId;

      this.setState({
        dashboardInfo,
        studentList,
        subjects,
        studentId,
        classId,
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.location = "/login";
      } else if (error.response && error.response.status === 404) {
        window.location = "/notFound";
      }
    }
  }

  render() {
    const { dashboardInfo } = this.state;
    if (dashboardInfo) {
      return (
        <React.Fragment>
          <Sidebar userInfo={dashboardInfo.parentInfo}>
            <MainContent
              studentList={this.state.studentList}
              subjects={this.state.subjects}
              studentId={this.state.studentId}
              classId={this.state.classId}
              onChange={this.handleChange}
            />
          </Sidebar>
        </React.Fragment>
      );
    }
    return null;
  }

  handleChange = (event) => {
    const seletedID = event.target.value;

    const studentsList = [...this.state.studentList];
    const selectedStudent = studentsList.filter((s) => s.id == seletedID)[0];

    const index = studentsList.indexOf(selectedStudent);

    const subjects = this.state.dashboardInfo.subjects[index];

    const studentId = selectedStudent.id;
    const classId = selectedStudent.classId;

    this.setState({ subjects, studentId, classId });
  };
}

export default Layout;
