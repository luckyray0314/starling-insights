import { useRoutes } from "react-router-dom";
import Home from "./home";
import Chat from "./chat";
import "./App.css";

function App() {
  const mainRoutes = [
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    },
  ];
  return useRoutes(mainRoutes);
}

export default App;
