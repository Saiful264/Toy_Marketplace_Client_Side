import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import img from "../../assets/banner/12145631_Wavy_Edu-07_Single-02.jpg"

const SingleToy = ({singleToy}) => {
      const {
      name,
      pictureUrl,
      price,
      rating,
      sellerEmail,
      sellerName,
      subCategory,
      detailDescription,
      availableQuantity,
    } = singleToy;

    return (
        <>
            <div>
            <img src={pictureUrl} className=" lg:max-w-xl rounded-lg" />
            </div>
        <div>
          <h1 className="text-2xl font-bold capitalize ">
            <span className="font-extrabold">Toy Name : </span>{name}
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">seller name : </span><span>{sellerName}</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">seller email :</span><span>{sellerEmail}</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">price :</span><span>{price}</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
            <span className="font-extrabold">vailable quantity :</span><span>{availableQuantity}</span>
          </h1>
          <h1 className="text-2xl font-bold capitalize py-2">
          <span className="font-extrabold">rating :</span>
            <Rating
              placeholderRating={rating}
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
            {detailDescription}
          </p>
        </div>
        </>
    );
};

export default SingleToy;