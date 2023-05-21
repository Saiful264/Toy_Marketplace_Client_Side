import bannerImg from "../../../assets/banner/12145631_Wavy_Edu-07_Single-02.jpg";

const Banner = () => {
  return (
    <div className="lg:flex justify-between items-center">
      <div className="px-4  lg:ml-3">
        <h2 className="text-2xl pt-4 lg:pt-0 lg:text-5xl font-bold">
          Explore the World of Learning Through Play
        </h2>
        <p className="lg:w-4/5 lg:text-xl font-semibold py-5 ">
          Spark the Joy of Learning | Explore, Play, and Grow with Educational
          Toys | Ignite Curiosity, Imagination, and Knowledge Discover Endless
          Possibilities Through Engaging Play.Unlock the Path to Learning
          Success
        </p>
        <button className="btns-primary ml-2">Explore More</button>
      </div>
      <img className="lg:w-2/5" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
