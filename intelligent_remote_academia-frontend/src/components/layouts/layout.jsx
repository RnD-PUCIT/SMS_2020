import React, { Component } from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

import http from "../../services/httpService";

class Layout extends Component {
  state = {
    dashboardInfo: null,
    studentList: null,
    selectedStudent: null,
    subjects: null,
    showDropdown: false,
  };

  async componentDidMount() {
    try {
      // Get parent personal info from the service
      const { data } = await http.get(`/subjects`);

      const { dashboard: dashboardInfo } = data;
      const studentList = dashboardInfo.students;
      const subjects = dashboardInfo.subjects[0];
      const selectedStudent = dashboardInfo.students[0];

      this.setState({
        dashboardInfo,
        studentList,
        selectedStudent,
        subjects,
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
              selectedStudent={this.state.selectedStudent}
              studentId={this.state.selectedStudent.id}
              classId={this.state.selectedStudent.classId}
              showDropdown={this.state.showDropdown}
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

    this.setState({ subjects, selectedStudent });
  };
}

export default Layout;
