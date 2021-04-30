//Rourter의 거점

import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import BottomBar from "./components/Footer/BottomBar";
import FooterBar from "./components/Footer/FooterBar";
import NavBar from "./components/Nav/NavBar";
import UploadPage from "./components/UploadPage/UploadPage";

import LandingPage from "./components/LandingPage/category/LandingPage";
import BookPage from "./components/LandingPage/category/BookPage";
import PersonalPage from "./components/LandingPage/category/PersonalPage";
import SomethingPage from "./components/LandingPage/category/SomethingPage";
import JavascriptPage from "./components/LandingPage/category/JavascriptPage";
import ReactPage from "./components/LandingPage/category/ReactPage";
import GitPage from "./components/LandingPage/category/ReactPage";
import AlgorithmPage from "./components/LandingPage/category/AlgorithmPage";
import OrderBar from "./components/LandingPage/detail/section/OrderBar";

import PersonalDetailPage from "./components/LandingPage/detail/PersonalDetailPage";
import SomethingDetailPage from "./components/LandingPage/detail/SomethingDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div
          style={{
            paddingTop: "5px",
            minHeight: "calc(100vh - 340px)",
          }}
        >
          {console.log("App.js")}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/post/personal" component={PersonalPage} />
            <Route exact path="/post/something" component={SomethingPage} />
            <Route exact path="/post/javascript" component={JavascriptPage} />
            <Route exact path="/post/react" component={ReactPage} />
            <Route exact path="/post/git" component={GitPage} />
            <Route exact path="/post/algorithm" component={AlgorithmPage} />
            <Route exact path="/post/book" component={BookPage} />
            <Route exact path="/post/upload" component={UploadPage} />

            {/* /////////// */}

            <Route
              exact
              path="/post/personal/:postId"
              component={PersonalDetailPage}
            />
            <Route
              exact
              path="/post/something/:postId"
              component={SomethingDetailPage}
            />
            {/*
              <Route
              exact
              path="/post/javascript/:postId"
              component={PersonalDetailPage}
            />
              <Route
              exact
              path="/post/react/:postId"
              component={PersonalDetailPage}
            />
              <Route
              exact
              path="/post/git/:postId"
              component={PersonalDetailPage}
            />
              <Route
              exact
              path="/post/algorithm/:postId"
              component={PersonalDetailPage}
            /> */}
            <OrderBar />
          </Switch>
        </div>

        <BottomBar />
        <FooterBar />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
