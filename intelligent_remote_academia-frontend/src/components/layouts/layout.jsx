import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./sidebar/sidebar";

import jwt_decode from "jwt-decode";
import http from "../../services/httpService";
import Content from "./mainContent/Content";
import AccountStore from "../store/account/AccountStore";

const Layout = () => {
  // State variables
  const [userInfo, setUserInfo] = useState(null);
  const [role, setRole] = useState("");

  const accountStore = useContext(AccountStore);

  // Init state data from api
  useEffect(() => {
    async function fetchData() {
      try {
        //Get token and decode it using jwt_decode library
        const token = window.localStorage.getItem("token");
        const decoded = jwt_decode(token);

        // Set the role of the user in the state
        const { role: userRole, userId } = decoded;

        setRole(userRole.trim().toLowerCase());
        window.localStorage.setItem("userId", userId);

        accountStore.setUserId(userId);
      } catch (error) {
        window.location = "/login";
      }

      // Call api to get layout data
      try {
        const { data } = await http.get("/layout");
        setUserInfo(data);

        accountStore.setFullName(data.firstName + " " + data.lastName);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          window.location = "/login";
        } else if (error.response && error.response.status === 404) {
          window.location = "/notFound";
        }
      }
    }
    fetchData();
  }, [accountStore]);

  if (userInfo) {
    return (
      <React.Fragment>
        <Sidebar userInfo={userInfo} role={role}>
          <Content role={role} />
        </Sidebar>
      </React.Fragment>
    );
  }
  return null;
};

export default Layout;

// class Layout extends Component {
//   state = {
//     dashboardInfo: null,
//     studentList: null,
//     selectedStudent: null,
//     subjects: null,
//   };

//   async componentDidMount() {
//     try {
//       // Get parent personal info from the service
//       const { data } = await http.get(`/subjects`);

//       // Get selected student's index from browsers local storage
//       let index = localStorage.getItem('selectedChildIndex');

//       if (!index) index = 0;

//       const { dashboard: dashboardInfo } = data;
//       const studentList = dashboardInfo.students;
//       const subjects = dashboardInfo.subjects[index];
//       const selectedStudent = dashboardInfo.students[index];

//       this.setState({
//         dashboardInfo,
//         studentList,
//         selectedStudent,
//         subjects,
//       });
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         window.location = '/login';
//       } else if (error.response && error.response.status === 404) {
//         window.location = '/notFound';
//       }
//     }
//   }

//   render() {
//     const { dashboardInfo } = this.state;
//     if (dashboardInfo) {
//       return (
//         <React.Fragment>
//           <Sidebar userInfo={dashboardInfo.parentInfo}>
//             <ParentDashboard />
//           </Sidebar>
//         </React.Fragment>
//       );
//     }
//     return null;
//   }

//   handleClick = (value) => {
//     if (value) {
//       const seletedID = value.id;

//       const studentsList = [...this.state.studentList];
//       const selectedStudent = studentsList.filter((s) => s.id === seletedID)[0];

//       const index = studentsList.indexOf(selectedStudent);

//       const subjects = this.state.dashboardInfo.subjects[index];

//       this.setState({ subjects, selectedStudent });

//       /*
//       Add selected index to browser's local storage
//       to maintain the selected student on page refresh.
//       */
//       localStorage.setItem('selectedChildIndex', index);
//     }
//   };
// }

// export default Layout;
