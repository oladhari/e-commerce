import ProductList from "../views/ProductList";
import CategoriesList from "../views/CategoriesList";
import Login from "../views/Login";
import Signup from "../views/Signup";
import HomepageLayout from "../views/Home";

const indexRoutes = [
  { path: "/categories", component: CategoriesList },
  { path: "/products", component: ProductList },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/", component: HomepageLayout },
];

export default indexRoutes;
