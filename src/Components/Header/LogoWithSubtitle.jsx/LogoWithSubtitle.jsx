
const LogoWithSubTitle = () => {
    return (
        <div className="flex flex-col justify-center gap-1 items-center mt-4">
            <div className="">
                <img className="w-52 md:w-72 lg:w-auto mx-4" src="https://i.ibb.co/tZj8LRg/logo.png" alt="" />
            </div>
            <div>
                <p className="text-gray-400 text-xs md:text-base">Journalism Without Fear or Favour</p>
            </div>
        </div>
    );
};

export default LogoWithSubTitle;