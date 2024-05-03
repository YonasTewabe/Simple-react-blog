import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="content">
      {" "}
      <h1>The Daily Blog</h1>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
  );
};

export default Navbar;
