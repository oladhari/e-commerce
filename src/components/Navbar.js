import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = ({ authenticated }) => (
  <Menu inverted>
    <Container>
      {authenticated ? (
        <>
          <Menu.Item header onClick={() => this.props.logout()}>
            Logout
          </Menu.Item>
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
      <Link to="/categories">
        <Menu.Item header>Categories</Menu.Item>
      </Link>
    </Container>
  </Menu>
);

export default Navbar;
