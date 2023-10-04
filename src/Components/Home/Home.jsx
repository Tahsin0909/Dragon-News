

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBAr";
import SharedPage from "../SharedPAge/SharedPage";



const Home = () => {
    return (
        <div>
            <SharedPage></SharedPage>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;