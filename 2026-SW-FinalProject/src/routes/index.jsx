import { createHashRouter } from "react-router";
import FrontendLayout from "../layout/FrontendLayout.jsx";
import Home from "../pages/Home.jsx";

export const routes = createHashRouter([
    {
        path: "/",
        element: <FrontendLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])