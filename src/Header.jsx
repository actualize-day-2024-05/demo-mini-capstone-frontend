import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <a href="/products">All products</a> | <Link to="/products/new">New product</Link> |{" "}
        <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <LogoutLink />
      </nav>
    </header>
  );
}
