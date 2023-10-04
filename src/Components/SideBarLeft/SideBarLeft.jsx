
import Category from "./Category";
import { useEffect, useState } from "react";
import Sports from "./Sports";


const SideBarLeft = () => {
    // console.log(Categories)
    const [Categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('./categories.json')
        .then(res => res.json())
        .then(Data => setCategories(Data))
    },[])
    return (
        <div className="">
            <div>
                <p className="font-bold text-xl">All Category</p>
            </div>
            <div className="flex flex-col gap-2" >
                {
                    Categories.map(category => <Category category={category} key={category.id}></Category>)
                }
            </div>
            <div>
                {
                    <Sports></Sports>
                }
            </div>
        </div>
    );
};

export default SideBarLeft;