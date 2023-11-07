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
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
            },

            {
                path: "/order/:id",
                element: <PrivateRoutes><Order/></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
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