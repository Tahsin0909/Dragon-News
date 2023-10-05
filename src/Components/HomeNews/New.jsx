/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const News = ({ news }) => {
    // console.log(news)
    const { title, details, author,rating, total_view    } = news
    return (
        <div className="shadow-lg p-2  lg:w-[800px]">
            <div className="flex items-center gap-1  p-2 bg-slate-400">
                <img className="w-10 rounded-full" src={author.img} alt="" />
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <p className="font-bold lg:text-lg my-2">{title}</p>
                <img className="w-full" src={news.image_url} alt="" />
            </div>
            <div className="my-2">
                <p>
                    {
                        details.length > 200 ? details.slice(0, 200) : ''
                    }
                    <Link>
                        <span className="text-red-500">
                            {
                                details.length > 200 ? '  Read More' : ' '
                            }....
                        </span></Link>
                </p>


            </div>
            <hr />
            <div className="flex justify-between">
                <p className="justify-start">Rating: {rating.number}</p>
                <p className="justify-end">Views: {total_view }</p>
            </div>
        </div>
    );
};

export default News;