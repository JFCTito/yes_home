import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import MyAdds from "../components/5pages/MyAdds.jsx";
import CreateAdd from "../components/5pages/CreateAdd.jsx";
import EditAdd from "../components/5pages/EditAdd.jsx";
import DeleteAdd from "../components/5pages/DeleteAdd.jsx";
import ShowAds from "../components/5pages/ShowAds.jsx";
import DetailAdd from "../pages/DetailAdd";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:
        [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/myads",
                element: <MyAdds />,
            },
            {
                path: "/mysearch",
                element: <ShowAds/>,
            },
            {
              path: "/detailadd",
              element: <DetailAdd />,
            },
            {
                path: "/create",
                element: <CreateAdd />,
            },
            {
                path: "/edit",
                element: <EditAdd />,
            },
            {
                path: "/delete",
                element: <DeleteAdd />,
            },
        ]
    }
]);
