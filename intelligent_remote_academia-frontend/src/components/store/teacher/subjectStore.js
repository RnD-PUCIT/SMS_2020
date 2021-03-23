import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';

class SubjectStore {
  classId;
  subjectId;
  sessionId;

  constructor() {
    makeAutoObservable(this);
  }

  setClasssId = (id) => {
    this.classId = id;
  };
  setSubjectId = (id) => {
    this.subjectId = id;
  };
  setSessionId = (id) => {
    this.sessionId = id;
  };
}

export default createContext(new SubjectStore());
