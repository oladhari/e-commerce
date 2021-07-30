import React from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ authenticated, title, description, children }) => {
  return (
    <div>
      {/* <Helmet>
        <title>
          {title ? title + " - E-Commerce Boilerplate" : "React.js Boilerplate"}
        </title>
        <meta
          name="description"
          content={description || "React.js Boilerplate"}
        />
      </Helmet> */}
      <Navbar authenticated={authenticated} />

      {children}

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
