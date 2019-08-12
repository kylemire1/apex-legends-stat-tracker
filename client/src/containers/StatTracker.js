import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Character from "../components/Character/Character";

import characterImg from "../assets/wattson.png";
import Profile from "../components/Profile/Profile";

const StatTracker = props => {
  const [platforms] = useState(["psn", "xbl", "origin"]);
  const [selectedPlatform, setSelectedPlatform] = useState("origin");
  const [search, setSearch] = useState("");

  const onChangeHandler = e => {
    const { id } = e.target;

    if (id === "username") {
      setSearch(e.target.value);
    } else {
      setSelectedPlatform(e.target.value);
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!search) {
      ToastsStore.warning("Please enter a username");
    } else {
      props.history.push(`/profile/${selectedPlatform}/${search}`);
    }
  };

  return (
    <React.Fragment>
      <header className="container">
        <Header />
      </header>
      <ToastsContainer
        position={ToastsContainerPosition.BOTTOM_LEFT}
        store={ToastsStore}
      />
      <main className="container">
        <Switch>
          <Route path="/profile/:platform/:username" component={Profile} />
          <Route
            path="/"
            render={props => (
              <Search
                {...props}
                options={platforms}
                selectedPlatform={selectedPlatform}
                searchValue={search}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
              />
            )}
          />
        </Switch>

        <Character img={characterImg} />
      </main>
    </React.Fragment>
  );
};

export default withRouter(StatTracker);
