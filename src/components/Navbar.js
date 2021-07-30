import React from "react";
import { Container, Menu, Icon, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/auth";

const Navbar = ({ authenticated }) => (
  <Menu inverted>
    <Container>
      {authenticated ? (
        <>
          <Menu.Item header onClick={() => logout()}>
            Logout
          </Menu.Item>
          <Link to="/cart">
            <Menu.Item header>
              <Icon name="shop" />
              Cart
            </Menu.Item>
          </Link>
          <Link to="/">
            <Menu.Item header>Home</Menu.Item>
          </Link>
        </>
      ) : (
        <React.Fragment>
          <Link to="/">
            <Menu.Item header>Home</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item header>Login</Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item header>Signup</Menu.Item>
          </Link>
        </React.Fragment>
      )}
      <Link to="/products">
        <Menu.Item header>Products</Menu.Item>
      </Link>
      <Dropdown text="Categories" pointing className="link item">
        <Dropdown.Menu>
          <Link to="/clothes">
            <Dropdown.Item style={{ color: "rgba(0,0,0,.87)" }}>
              Clothes
            </Dropdown.Item>
          </Link>
          <Dropdown.Item>Cosmetics</Dropdown.Item>
          <Dropdown.Item>Shoes</Dropdown.Item>
          <Dropdown.Item>Men</Dropdown.Item>
          <Dropdown.Item>Women</Dropdown.Item>
          <Dropdown.Item>Kids</Dropdown.Item>
          <Dropdown.Item>Food</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default Navbar;
