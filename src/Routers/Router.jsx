import { createBrowserRouter } from "react-router-dom";
import Home from "../Homepage/Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Allmenu from "../Allmenu/Allmenu";
import OneMenu from "../Allmenu/OneMenu";
import PrivateRoutes from "../PrivateRoutes";
import Order from "../Order/Order";
import Myorder from "../Myorder/Myorder";
import Blog from "../Blog/Blog";
import MyMenu from "../MyMenu/MyMenu";
import AddFood from "../AddFood/AddFood";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "allmenu",
                element: <Allmenu />
            },
            {
                path: "/menu/:id",
                element: <PrivateRoutes><OneMenu /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/${params.id}`),
            },

            {
                path: "/order/:id",
                element: <PrivateRoutes><Order/></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/menu/${params.id}`),
            },

            {
                path: "/myorder",
                element: <PrivateRoutes><Myorder/></PrivateRoutes>,
               
            },

            {
                path: "/mymenu",
                element: <PrivateRoutes><MyMenu/></PrivateRoutes>,
               
            },

            {
                path: "/addfood",
                element: <PrivateRoutes><AddFood/></PrivateRoutes>,
               
            },

        ]
    }
])

export default Router