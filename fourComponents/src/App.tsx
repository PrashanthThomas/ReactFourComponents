import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ButtonLayout, { ButtonConfig } from "./Components/ButtonLayout";
import Alert from "./Components/Alert";
import { useState } from "react";
import Afterlogin from "./AfterLogin";

function App() {
  let [alertMsg, setAlertMsg] = useState("");
  // let cities = ["Bangalore", "Mangalore", "Delhi"];
  // let fruits = ["Apple", "Grapes"];

  const handleAlert = (btnName: string) => {
    console.log("You Clicked on", btnName);
    setAlertMsg("You Clicked on " + btnName);
  };

  const buttonConfigList: ButtonConfig[] = [
    {
      class: "btn btn-primary",
      displayName: "Primary",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-secondary",
      displayName: "Secondary",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-success",
      displayName: "Success",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-danger",
      displayName: "Danger",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-warning",
      displayName: "Warning",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-info",
      displayName: "Info",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-light",
      displayName: "Light",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-dark",
      displayName: "Dark",
      handleAlert: handleAlert,
    },
    {
      class: "btn btn-link",
      displayName: "Link",
      handleAlert: handleAlert,
    },
  ];

  return (
    <div className="outer-layer">
      {/* {alertMsg && (
        <Alert>
          <h1>{alertMsg}</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertMsg("")}
          ></button>
        </Alert>
      )}
      <ButtonLayout
        buttonConfigList={buttonConfigList}
        title="List of Buttons"
      ></ButtonLayout> */}
      {/* <ClickCounter></ClickCounter>
      <CustomHeader></CustomHeader>
      <MenuSideBar title="Fruit list" fruits={fruits}></MenuSideBar>
      <DynamicBody title="City list" cities={cities}></DynamicBody>
      <CustomFooter></CustomFooter>
      <Message message="Hi"></Message> */}
      <Afterlogin></Afterlogin>
    </div>
  );
}

export default App;
