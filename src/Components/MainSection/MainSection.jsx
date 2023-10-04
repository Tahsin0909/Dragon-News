import HomeNews from "../HomeNews/HomeNEws";
import SideBarLeft from "../SideBarLeft/SideBarLeft";
import SideBarRight from "../SideBarRight/SideBarRIght";


const MainSection = () => {
    return (
        <div className="mx-10"
        style={{
            display:'grid',
            gridTemplateColumns:'1fr 2fr 1fr',
            gap:'20px'
        }}
        >
            <SideBarLeft></SideBarLeft>
            <HomeNews></HomeNews>
            <SideBarRight></SideBarRight>
        </div>
    );
};

export default MainSection;