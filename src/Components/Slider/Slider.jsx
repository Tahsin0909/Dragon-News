/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className="mx-2 sm:mx-10 mt-4 flex  justify-center">
            <button className=" btn-sm btn-primary">
                Latest:
            </button>
            <Marquee pauseOnHover speed={40}>
                <p className="border py-[3.5px] px-[3px] bg-slate-200">
                In an exhilarating game, [Team A] faced off against [Team B], with a nail-biting score of [Team A Score] to [Team B Score]. 
                [Highlight key player's name] shined with [player's standout performance].
                 Fans are on the edge of their seats as the match heads into overtime. Stay tuned for more thrilling action!
                </p>
            </Marquee>
        </div>
    );
};

export default Slider;