import math from "../../../assets/gallery/gallery5.jpg";
const OurBlog = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl lg:text-4xl italic">
        Our Blog
      </h1>
      <p className="text-center w-1/2 mx-auto font-medium text-gray-900 pt-3">
        Home of Learning fun for Every Age and Stage! Building someone amaxing?
        Discover even more ways togive you kids the building blocks they need to
        succeed with our free tips and tools written by exoerts, teachers, and
        parents just like you!
      </p>
      <div className="lg:flex lg:justify-between lg:gap-10 py-8">
        <div className="text-center">
          <img className="w-4/6 mx-auto lg:w-full rounded-md" src={math} alt="" />
          <p className="text-2xl pt-2 font-bold mx-auto">Math</p>
        </div>
        <div className="text-center">
          <img className="w-4/6 mx-auto lg:w-full rounded-md" src={math} alt="" />
          <p className="text-2xl pt-2 font-bold mx-auto">Math</p>
        </div>
        <div className="text-center">
          <img className="w-4/6 mx-auto lg:w-full rounded-md" src={math} alt="" />
          <p className="text-2xl pt-2 font-bold mx-auto">Math</p>
        </div>
        <div className="text-center">
          <img className="w-4/6 mx-auto lg:w-full rounded-md" src={math} alt="" />
          <p className="text-2xl pt-2 font-bold mx-auto">Math</p>
        </div>
        s
      </div>
    </div>
  );
};

export default OurBlog;
