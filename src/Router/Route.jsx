import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainRoot></MainRoot>,
            
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/category.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            }
        ]
    }
])


export default myCreatedRoute;