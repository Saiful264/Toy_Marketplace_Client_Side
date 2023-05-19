import bannerImg from "../../../assets/12145631_Wavy_Edu-07_Single-02.jpg"

const Banner = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="">
                <h2 className="text-5xl font-bold">Explore the World of Learning Through Play</h2>
                <p className="w-4/5 text-xl font-semibold py-5">Spark the Joy of Learning | Explore, Play, and Grow with Educational Toys | Ignite Curiosity, Imagination, and Knowledge Discover Endless Possibilities Through Engaging Play.Unlock the Path to Learning Success</p>
                <button className="btn btn-secondary">Explore More</button>
            </div>
                <img className="w-2/5" src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;
