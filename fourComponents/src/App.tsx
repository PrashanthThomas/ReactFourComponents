import "./App.css";
import CustomFooter from "./Components/CustomFooter/CustomFooter";
import CustomHeader from "./Components/CustomHeader/CustomHeader";
import DynamicBody from "./Components/DynamicBody/DynamicBody";
import MenuSideBar from "./Components/MenuSideBar/MenuSideBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <CustomHeader></CustomHeader>
      <MenuSideBar></MenuSideBar>
      <DynamicBody></DynamicBody>
      <CustomFooter></CustomFooter>
    </div>
  );
}

export default App;
