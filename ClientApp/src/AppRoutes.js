import { Home } from "./components/Home";
import { Category } from "./components/pages/Category";
import { SearchPage } from "./components/pages/SearchPage";
// import { Counter } from "./components/ReferenceComps/Counter";
// import { FetchData } from "./components/ReferenceComps/CounterData";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  // {
  //   path: "/counter",
  //   element: <Counter />,
  // },
  // {
  //   path: "/fetch-data",
  //   requireAuth: true,
  //   element: <FetchData />,
  // },
  // ...ApiAuthorzationRoutes,
];

export default AppRoutes;
