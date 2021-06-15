import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import Search from './src/components/pages/Search';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component = {App} exact/>
      <Route path="/search" component = {Search} />
      <Route component = {() => <div>Page 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
