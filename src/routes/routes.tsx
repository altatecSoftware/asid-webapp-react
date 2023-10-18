import { Navigate, useRoutes } from "react-router-dom";
import { AdminLayout } from "../layouts/admin/AdminLayout";

const Router = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/asid-admin' />,
    },
    {
      path: '/asid-admin',
      element: <AdminLayout />,
      children: [
        {
          path: '',
          element: 'Home Content'
        },
        {
          path: 'about-us',
          element: 'About us Content'
        },
        {
          path: 'help',
          element: 'Help Content'
        }
      ]
    }
  ]);
  return element;
}

export default Router
