import { useParams } from "react-router-dom";

function Contact() {
  let { id } = useParams();
  return <h1>CONTACT PAGE {id}</h1>;
}

export default Contact;
