import Hoc from "./hoc/hoc";
import React from "react";
import { Route } from "react-router-dom";
import indexRoutes from './constants/indexRoutes'


const BaseRouter = () => (
  <Hoc>
    {indexRoutes.map((route, key)=>(
      <Route path={route.path} key={key} component={route.component} exact />
    ))}
  </Hoc>
);

export default BaseRouter;
