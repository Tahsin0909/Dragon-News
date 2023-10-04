import HomeNews from "../HomeNews/HomeNEws";
import SideBarRIght from "../SideBarRight/SideBarRIght";


const MainSection = () => {
    return (
        <div className="grid grid-cols-3">
            <SideBarRIght></SideBarRIght>
            <HomeNews></HomeNews>
        </div>
    );
};

export default MainSection;