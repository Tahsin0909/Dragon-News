import moment from "moment/moment";


const TimeZone = () => {
    return (
        <div className="text-center">
            <p className="text-base md:text-lg">{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default TimeZone;