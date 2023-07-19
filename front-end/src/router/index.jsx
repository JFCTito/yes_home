import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import MyAdds from "../components/MyAdds";
import CreateAdd from "../components/CreateAdd";
import EditAdd from "../components/EditAdd";
import DeleteAdd from "../components/DeleteAdd";
import ShowAds from "../components/ShowAds";


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
