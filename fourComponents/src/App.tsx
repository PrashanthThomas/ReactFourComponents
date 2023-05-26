import "./App.css";
import CustomFooter from "./Components/CustomFooter/CustomFooter";
import CustomHeader from "./Components/CustomHeader/CustomHeader";
import DynamicBody from "./Components/DynamicBody/DynamicBody";
import ClickCounter from "./Components/ClickCounter";
import MenuSideBar from "./Components/MenuSideBar/MenuSideBar";
import "bootstrap/dist/css/bootstrap.css";
import Message from "./Components/Message";
import Alert from "./Components/Alert";

function App() {
  let cities = ["Bangalore", "Mangalore", "Delhi"];
  let fruits = ["Apple", "Grapes"];
  return (
    <div className="outer-layer">
      <Alert>
        <h1>Custom Message</h1>
      </Alert>
      <ClickCounter></ClickCounter>
      <CustomHeader></CustomHeader>
      <MenuSideBar title="Fruit list" fruits={fruits}></MenuSideBar>
      <DynamicBody title="City list" cities={cities}></DynamicBody>
      <CustomFooter></CustomFooter>
      <Message message="Hi"></Message>
    </div>
  );
}

export default App;
