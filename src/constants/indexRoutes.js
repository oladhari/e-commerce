import ProductList from "../containers/ProductList"
import Login from "../containers/Login"
import Signup from "../containers/Signup"
import HomepageLayout from "../containers/Home"

const indexRoutes = [
  { path: "/products", component:ProductList },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/", component: HomepageLayout }
]

export default indexRoutes
