import React, { useState, useEffect } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Login from "./components/Login";
import Home from "./components/Home";
import Subscription from "./components/Subscription";
import Kids from "./components/Kids";

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    background-color:#012055;
    width:100%;
    height:100vh;
  `;

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader
          Loading={loading}
          css={override}
          color={"#f5f5f5"}
          size={50}
        />
      ) : (
        <>
        
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/subs" component={Subscription} />
            <Route exact path="/kids" component={Kids}/>
            <Redirect exact to = "/" />
          </Switch>
        </>
      )}
    </>
  );
};

export default App;
