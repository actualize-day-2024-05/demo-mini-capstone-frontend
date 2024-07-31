import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;
