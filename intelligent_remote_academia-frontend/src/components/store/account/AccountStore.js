import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class AccountStore {
  role = "";
  fullName = "";
  userId = "";

  constructor() {
    makeAutoObservable(this);
  }

  setRole = (role) => {
    this.role = role;
  };

  setFullName = (name) => {
    this.fullName = name;
  };

  setUserId = (id) => {
    this.userId = id;
  };
}

export default createContext(new AccountStore());
