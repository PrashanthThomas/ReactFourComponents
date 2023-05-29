import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>BLOG PAGE</h1>
      <button onClick={navToHome}>HOME</button>
    </>
  );
}

export default Blogs;
