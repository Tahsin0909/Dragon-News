/* eslint-disable react/prop-types */


const News = ({ news }) => {
    console.log(news)
    const { title, details, author } = news
    return (
        <div className="">
            <div className="flex items-center gap-1">
                <img className="w-10 rounded-full" src={author.img} alt="" />
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <img className="w-96" src={news.image_url} alt="" />
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p>
                    {
                        details.slice(0, 200)
                    }
                </p>

            </div>
        </div>
    );
};

export default News;