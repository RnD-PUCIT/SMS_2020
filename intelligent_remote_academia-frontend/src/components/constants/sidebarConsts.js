import {
  faBook,
  faCalendar,
  faBullhorn,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

//Sidebar link constatnts
const sideBarLinks = [
  {
    text: "Subjects",
    url: "/subjects",
    icon: faBook,
  },
  {
    text: "Attendance",
    url: "/attendance",
    icon: faCalendar,
  },
  {
    text: "Announcements",
    url: "/announcements",
    icon: faBullhorn,
  },
  {
    text: "Fee Challan Form",
    url: "/challan",
    icon: faFileInvoiceDollar,
  },
];

export { sideBarLinks };
