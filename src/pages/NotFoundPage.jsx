import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <NavLink to="/">Go to Home</NavLink>
      <p>We`re sorry, but your URL is not correct</p>
    </div>
  );
};

export default NotFoundPage;
