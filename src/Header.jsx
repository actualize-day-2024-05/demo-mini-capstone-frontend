import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> |{" "}
        <a href="#products-index">All products</a> | <LogoutLink />
      </nav>
    </header>
  );
}
