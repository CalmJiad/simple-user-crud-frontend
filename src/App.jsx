import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import ErrorLayout from "./layout/ErrorLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorLayout />,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
  {
    path: "/users",
    element: <UsersList />,
  },
]);

const App = (props) => {
  return <RouterProvider router={router} />;
};

export default App;
