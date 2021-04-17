//Rourter의 거점

import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import AsideBar from "./components/Footer/AsideBar";
import FooterBar from "./components/Footer/FooterBar";
import NavBar from "./components/Nav/NavBar";
import UploadPage from "./components/UploadPage/UploadPage";
import PersonalDetailPage from "./components/LandingPage/detail/PersonalDetailPage";

import LandingPage from "./components/LandingPage/category/LandingPage";
import BookPage from "./components/LandingPage/category/BookPage";
import PersonalPage from "./components/LandingPage/category/PersonalPage";
import SomethingPage from "./components/LandingPage/category/SomethingPage";
import JavascriptPage from "./components/LandingPage/category/JavascriptPage";
import ReactPage from "./components/LandingPage/category/ReactPage";
import GitPage from "./components/LandingPage/category/ReactPage";
import AlgorithmPage from "./components/LandingPage/category/AlgorithmPage";
import OrderBar from "./components/LandingPage/detail/section/OrderBar";

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
          {console.log("듣고있냐?")}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/personal" component={PersonalPage} />
            <Route exact path="/something" component={SomethingPage} />
            <Route exact path="/javascript" component={JavascriptPage} />
            <Route exact path="/react" component={ReactPage} />
            <Route exact path="/git" component={GitPage} />
            <Route exact path="/algorithm" component={AlgorithmPage} />
            <Route exact path="/book" component={BookPage} />
            <Route exact path="/post/upload" component={UploadPage} />
            <Route
              exact
              path="/post/personal/:postId"
              component={PersonalDetailPage}
            />
            <OrderBar />
          </Switch>
        </div>

        <AsideBar />
        <FooterBar />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
