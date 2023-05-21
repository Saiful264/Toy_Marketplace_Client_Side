import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";

const SingleToyPage = () => {
  const singleToy = useLoaderData();

  return (
    <div>
      <div className="hero-content flex-col lg:flex-row">
        {singleToy.map((toy) => (
          <SingleToy key={toy._id} singleToy={toy} />
        ))}
      </div>
    </div>
  );
};

export default SingleToyPage;
