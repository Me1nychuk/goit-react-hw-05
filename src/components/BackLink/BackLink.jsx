import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
