import Rating from "react-rating";
import img from "../../assets/banner/12145631_Wavy_Edu-07_Single-02.jpg";
import { FaRegStar, FaStar } from "react-icons/fa";

const SingleToyPage = () => {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className=" lg:max-w-xl rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold capitalize ">
            <span className="font-extrabold">Toy Name : </span>Learn and Play Math
            Set
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">seller name : </span><span>toyworld</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">seller email :</span><span>toyworld@example.com</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">price :</span><span>$29.99</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">vailable quantity :</span><span>10</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
          <span className="font-extrabold">rating :</span>
            <Rating
              placeholderRating={3.5}
              readonly
              emptySymbol={
                <FaRegStar/>
              }
              placeholderSymbol={
                <FaStar className="text-orange-400"/>
              }
              fullSymbol={
                <FaStar/>
              }
            />
          </h1>
          <p className="text-xl font-bold">
            <span className="underline font-extrabold italic">Detail Description</span>:
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToyPage;
