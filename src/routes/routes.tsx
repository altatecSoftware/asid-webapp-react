import { useRoutes } from "react-router-dom";
import { Layout } from "../layouts/Layout";

const Router = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout/>, 
    }
  ]);
  return element;
}

export default Router
