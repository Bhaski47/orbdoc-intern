import { Toaster } from "react-hot-toast";
import Home from "./page/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListData from "./page/ListData";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/fetch',
      element:<ListData/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Toaster/>
    </>
  );
}

export default App;
