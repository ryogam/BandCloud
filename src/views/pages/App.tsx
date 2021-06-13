import React, { useEffect, useState } from "react";
import Header from "views/components/block/Header";
import Footer from "views/components/block/Footer";
import Top from "views/pages/Top/Top";
import Contact from "views/pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LibraryMusicTwoTone } from "@material-ui/icons";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Top />
        </Route>
        <Route path="/contact" component={Contact} />
      </Switch>
      <div className="clear-both"></div>
      <Footer />
    </Router>
  );
}

export default App;
