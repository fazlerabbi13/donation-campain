import { createBrowserRouter, useFetcher } from "react-router-dom";
import MainRoot from "../Root/MainRoot";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
import Card from "../Pages/Card/Card";


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
            },
            {
                path:'/cards/:id',
                element:<Card></Card>,
                loader: () => fetch('/category.json')
            }
            
        ]
    }
])


export default myCreatedRoute;