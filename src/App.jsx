import { RouterProvider } from "react-router";
import { router } from "./constants/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
