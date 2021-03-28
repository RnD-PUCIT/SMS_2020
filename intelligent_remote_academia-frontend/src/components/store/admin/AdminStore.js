import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import http from '../../../services/httpService';

class AdminStore {
  teachersList = [];
  parentsList = [];
  studentsList = [];
  classesList = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadTeachers = async () => {
    if (this.teachersList.length === 0) {
      try {
        const { data } = await http.get('/teachers/getTeachersList');
        data.forEach((teacher) => {
          this.teachersList.push(teacher);
        });
      } catch (error) {
        alert('Something went wrong');
        console.log(error);
      }
    }
  };
  loadParents = async () => {
    if (this.parentsList.length === 0) {
      try {
        const { data } = await http.get('/parents/getParentsList');
        data.forEach((parent) => {
          this.parentsList.push(parent);
        });
      } catch (error) {
        alert('Something went wrong');
        console.log(error);
      }
    }
  };
  loadStudents = async () => {
    if (this.studentsList.length === 0) {
      try {
        const { data } = await http.get('/students/getStudentsList');
        data.forEach((student) => {
          this.studentsList.push(student);
        });
      } catch (error) {
        alert('Something went wrong');
        console.log(error);
      }
    }
  };
  loadClasses = async () => {
    if (this.classesList.length === 0) {
      try {
        const { data } = await http.get('/classes/getClassesList');
        data.forEach((c) => {
          this.classesList.push(c);
        });
      } catch (error) {
        alert('Something went wrong');
        console.log(error);
      }
    }
  };
}

export default createContext(new AdminStore());
