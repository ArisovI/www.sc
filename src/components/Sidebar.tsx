import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="positions">Positions</Link>
      <Link to="news">News</Link>
    </div>
  );
};

export default Sidebar;
