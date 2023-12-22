import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Player from "../components/Player";
import useAuth from "../../hooks/useAuth";
import LoadingScreen from "../../routes/Discover/components/Loading/LoadingScreen";

function CoreLayout({ children, history }) {
  const { data: authData, isLoading: authLoading } = useAuth();

  return (
    <div className="main">
      {authLoading && <LoadingScreen />}
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
