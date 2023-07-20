import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import MyAdds from "../components/pages/MyAdds";
import CreateAdd from "../components/pages/CreateAdd";
import EditAdd from "../components/pages/EditAdd";
import DeleteAdd from "../components/pages/DeleteAdd";
import ShowAds from "src\pages\ShowAds.jsx";


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
                path: "/create",
                element: <CreateAdd />,
            },
            {
                path: "/edit",
                element: <EditAdd />,
            }, {
                path: "/delete",
                element: <DeleteAdd />,
            },
        ]
    }
]);
