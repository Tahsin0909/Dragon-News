
import Category from "./Category";
import { useEffect, useState } from "react";


const SideBarRIght = () => {
    // console.log(Categories)
    const [Categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('./categories.json')
        .then(res => res.json())
        .then(Data => setCategories(Data))
    },[])
    return (
        <div>
            <div>
                <p className="font-bold">All Category</p>
            </div>
            <div className="flex flex-col gap-2" >
                {
                    Categories.map(category => <Category category={category} key={category.id}></Category>)
                }
            </div>
        </div>
    );
};

export default SideBarRIght;