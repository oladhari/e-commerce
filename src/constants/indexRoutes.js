import HomepageLayout from "../views/Home";
import Signup from "../views/Signup";
import Login from "../views/Login";
import Cart from "../views/Cart";
import ProductsGrid from "../components/ProductsGrid";

const indexRoutes = [
  // dev
  { path: "/products", component: ProductsGrid },
  { path: "/cart", component: Cart },
  // prod
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/", component: HomepageLayout },
];

export default indexRoutes;
