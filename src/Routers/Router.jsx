import { createBrowserRouter } from "react-router-dom";
import Home from "../Homepage/Home/Home";
import Main from "../Layout/Main";



const Router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
           
        ]
    }
])

export default Router