import { RouterProvider } from "react-router";
import { UserContext } from "./contexts";
import { router } from "./routers/MainRouter";

function App() {
  return (
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  );
}

export default App;
