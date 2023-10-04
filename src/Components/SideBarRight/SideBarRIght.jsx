
const SideBarRight = () => {
    return (
        <div>
            <div>
                <h1 className="font-bold text-xl mb-2">Sign In With</h1>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-1 border py-2 px-14 border-blue-600">
                        <div>
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="" />
                        </div>
                        <div>
                            <p className="hover:bg-gradient-to-r from-red-600 to-green-500 bg-clip-text">Sign In With Google</p>
                        </div>
                    </div>
                    <div className="flex gap-1 py-2 px-14 border border-blue-600">
                        <div>
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                        </div>
                        <div>
                            <p className="hover:text-blue-500">Sign In With FaceBook</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="mb-2 font-semibold text-lg">FInd Us On</h1>
                    <div className="flex flex-col" >
                        <div className="flex gap-1 border py-3 px-8 border-black rounded-t-lg hover:text-blue-600">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                            <p>FaceBook</p>
                        </div>
                        <div className="flex gap-1 border-x border-black py-3 px-8 hover:text-pink-600">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />
                            <p>InstaGram</p>
                        </div>
                        <div className="flex gap-1 border border-black rounded-b-lg py-3 px-8 hover:text-yellow-600 ">
                            <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/1383/1383266.png" alt="" />
                            <p>SnapChat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBarRight;