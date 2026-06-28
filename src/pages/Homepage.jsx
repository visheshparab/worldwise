import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>World wise</h1>
      <p className="test">global class</p>

      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
