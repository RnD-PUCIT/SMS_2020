import axios from "axios";
import React, { Component } from "react";

class TempForm extends Component {
  state = {};
  render() {
    const handleClick = async () => {
      const cnic = "123213";
      const password = "13123";
      await axios.post("https://localhost:44334/account/login", {
        cnic,
        password,
      });
    };

    return (
      <form>
        <input type="text" name="cnic" id="" />
        <input type="password" name="password" id="" />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    );
  }
}

export default TempForm;
