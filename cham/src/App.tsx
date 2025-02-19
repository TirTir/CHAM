import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/index";
import { Login } from "./pages/Login/Login";
import { Join } from "./pages/Join/Join";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/join",
      element: <Join />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
