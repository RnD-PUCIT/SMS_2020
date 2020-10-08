import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const ProfileLink = (props) => {
  return (
    <React.Fragment>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <NavDropdown
            title={props.username}
            id="collasible-nav-dropdown"
            className="no-arrow"
          >
            {props.dropdown.map((item) => (
              <NavDropdown.Item key={item.text}>
                <i className={item.icon} />
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  {item.text}
                </span>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </React.Fragment>
  );
};

export default ProfileLink;
