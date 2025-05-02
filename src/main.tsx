import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import User from "./components/User";
import Utils from "./components/Utils";
import "./index.css";

// Create the browser router instance
const router = createHashRouter([
    {
        // Route for the root path "/"
        path: "/",
        Component: Home,
    },
    {
        // This route acts as a parent for paths starting with "/polystats".
        // We will use an index route within its children to handle the
        // base "/polystats" and "/polystats/" paths.
        path: "/polystats",
        children: [
           
            {
                // This route matches "/polystats/leaderboard"
                path: "leaderboard",
                Component: Leaderboard
            },
            {
                // This route matches "/polystats/user"
                path: "user",
                Component: User
            },
            {
                // This route matches "/polystats/utils"
                path: "utils",
                Component: Utils
            },
        ]
    }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  // Render the application
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}