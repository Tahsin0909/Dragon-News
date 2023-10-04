import { useLoaderData } from "react-router-dom";
import News from "./New";



const HomeNews = () => {
    const AllNews = useLoaderData()
    // console.log(News)
    return (
        <div className="flex flex-col gap-4">
            {
                AllNews.map(news => <News key={news.category_id} news={news}></News>)
            }
        </div>
    );
};

export default HomeNews;