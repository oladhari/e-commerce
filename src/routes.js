import Hoc from "./hoc/hoc";
import HomepageLayout from "./containers/Home";
import Login from "./containers/Login";
import ProductList from "./containers/ProductList";
import React from "react";
import { Route } from "react-router-dom";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;
