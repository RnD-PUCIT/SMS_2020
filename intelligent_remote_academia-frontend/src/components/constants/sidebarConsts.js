import {
  faBook,
  faCalendar,
  faBullhorn,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';

//Sidebar link constatnts
const sideBarLinks = {
  parent: [
    {
      text: 'Subjects',
      url: '/subjects',
      icon: faBook,
    },
    {
      text: 'Attendance',
      url: '/attendance',
      icon: faCalendar,
    },
    {
      text: 'Announcements',
      url: '/announcements',
      icon: faBullhorn,
    },
    {
      text: 'Fee Challan Form',
      url: '/challan',
      icon: faFileInvoiceDollar,
    },
    {
      text: 'Academic Calendar',
      url: '/academic-calendar',
    },
    {
      text: 'Time Table',
      url: '/timetable',
    },
    {
      text: 'Applications',
      url: '/applications',
    },
  ],
  teacher: [
    {
      text: 'Home',
      url: '/dashboard',
    },
    {
      text: 'Classes',
      url: '/classes',
    },
    {
      text: 'Attendance',
      url: '/attendance',
    },
  ],
  admin: [
    {
      text: 'Home',
      url: '/dashboard',
    },
    {
      text: 'Teachers',
      url: '/teachers',
    },
  ],
};

export { sideBarLinks };
