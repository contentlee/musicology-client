import { useContext } from "react";
import { RouterProvider } from "react-router";
import { Sign } from "./contexts/UserContext";
import { router } from "./routers/MainRouter";

function App() {
  const { isSignedIn } = useContext(Sign);
  return <RouterProvider router={router(isSignedIn)} />;
}

export default App;
