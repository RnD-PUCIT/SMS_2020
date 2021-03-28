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
}

export default createContext(new AdminStore());
