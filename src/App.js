//Rourter의 거점

import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AsideBar from "./components/Footer/AsideBar";
import FooterBar from "./components/Footer/FooterBar";
import NavBar from "./components/Nav/NavBar";

import LandingPage from "./components/LandingPage/LandingPage";
import BookPage from "./components/LandingPage/section/BookPage";
import GitPage from "./components/LandingPage/section/GitPage";
import ReactPage from "./components/LandingPage/section/ReactPage";
import SomethingPage from "./components/LandingPage/section/SomethingPage";
import PersonalPage from "./components/LandingPage/section/PersonalPage";
import JavascriptPage from "./components/LandingPage/section/JavascriptPage";
import AlgorithmPage from "./components/LandingPage/section/AlgorithmPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div
          style={{
            paddingTop: "69px",
            minHeight: "calc(100vh - 340px)",
          }}
        >
          <hr />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/personal" component={PersonalPage} />
            <Route exact path="/something" component={SomethingPage} />
            <Route exact path="/javascript" component={JavascriptPage} />
            <Route exact path="/react" component={ReactPage} />
            <Route exact path="/git" component={GitPage} />
            <Route exact path="/algorithm" component={AlgorithmPage} />
            <Route exact path="/book" component={BookPage} />
          </Switch>
        </div>
        <AsideBar />
        <FooterBar />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
