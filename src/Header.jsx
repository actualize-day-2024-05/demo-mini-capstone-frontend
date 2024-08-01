import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#signup">Signup</a> | <a href="#login">Login</a> |{" "}
        <a href="#products-index">All products</a> | <LogoutLink />
      </nav>
    </header>
  );
}
