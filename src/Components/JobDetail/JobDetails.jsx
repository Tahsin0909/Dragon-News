import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const JobDetails = () => {
    const [DetailsData, setDetailsData] = useState([])

    useEffect(() => {
        fetch('../../../public/news.json')
            .then(res => res.json())
            .then(data => setDetailsData(data))
    }, [])
    // console.log(DetailsData)

    const _id = useParams()
    // console.log(_id)

    const Details = DetailsData.find((Detail) => Detail._id === _id._id)
    console.log(Details)
    return (
        <div>
            <img src={Details?.image_url} alt="" />
            <p>{Details?.title}</p>
            <p>{Details?.details}</p>
        </div>
    );
};

export default JobDetails;