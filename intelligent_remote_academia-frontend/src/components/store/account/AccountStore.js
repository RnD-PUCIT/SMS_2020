import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class AccountStore {
  role = '';

  constructor() {
    makeAutoObservable(this);
  }

  setRole = (role) => {
    this.role = role;
  };
}

export default createContext(new AccountStore());
