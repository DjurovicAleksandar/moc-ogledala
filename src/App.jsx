import { RouterProvider } from "react-router-dom";
import router from "../src/components/router/Router.jsx";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
