import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/**
 * {     mytheme: {
          "primary": "#FF4900",
          "secondary": "#FFB822",
          "accent": "#37cdbe",
          "neutral": "#3C3C3C",
          "base-100": "#242424",
        },
}
 */
