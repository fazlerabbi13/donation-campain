import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainRoot = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;