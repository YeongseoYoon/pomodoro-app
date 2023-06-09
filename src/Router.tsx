import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { ErrorBoundary } from "./components";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
  },
]);
export default Router;
