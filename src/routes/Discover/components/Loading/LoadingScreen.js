import { createPortal } from "react-dom";
import styles from "./LoadingScreen.module.css";
import Spinner from "./Spinner";
import React from "react";

function LoadingComponent() {
  return (
    <div className={styles["loading-screen"]}>
      <Spinner />
    </div>
  );
}

function LoadingScreen() {
  return <React.Fragment>{createPortal(<LoadingComponent />, document.body)}</React.Fragment>;
}

export default LoadingScreen;
