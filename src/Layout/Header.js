import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>Elearning</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink>
            <Link to="/courses-list">Danh Sách Khoá Học</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/courses-list-hoc">DSKH HOC</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/courses-list-render-props">DSKH Render Props</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/game-bau-cua">Game Bầu Cua</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/demo-hooks">Demo Hooks</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
