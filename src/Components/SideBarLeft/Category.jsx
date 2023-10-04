/* eslint-disable react/prop-types */


const Category = ({ category }) => {
    // console.log(category)
    const { name } = category
    return (
        <div>
            <div className="mt-2 text-gray-400 lg:text-lg px-4">
                <button className="hover:text-black">{name}</button>
            </div>
        </div>
    );
};

export default Category;