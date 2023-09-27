import { createBrowserRouter, useFetcher } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";


const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainRoot></MainRoot>,
         errorElement: <Error></Error> ,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('/category.json')
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