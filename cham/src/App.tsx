import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Chat, Layout } from "./pages/index";
import { Dialog } from "./pages/Chat/Dialog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/layout",
      element: <Layout />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/dialog",
      element: <Dialog />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
