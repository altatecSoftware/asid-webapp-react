import loadable from '@loadable/component'
import { Navigate, useRoutes } from "react-router-dom";

const AdminLayout = loadable(() => import('../layouts/admin/AdminLayout'))

const Router = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/admin-panel' />,
    },
    {
      path: '/admin-panel',
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
