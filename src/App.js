import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
import Layout from "./components/Layout";
import { CartContext } from "./contexts/CartContext";

const App = ({ onTryAutoSignup, ...props }) => {
  useEffect(() => {
    onTryAutoSignup();
  }, []);

  return (
    <Router>
      <CartContext.Provider value={[]}>
        <Layout {...props}>
          <BaseRouter />
        </Layout>
      </CartContext.Provider>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
