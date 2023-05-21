import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MyTouRow = ({ myToy,handlerdelete }) => {
  // eslint-disable-next-line react/prop-types
  const { name, pictureUrl, price, _id, detailDescription, rating,availableQuantity } = myToy;


  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold"><span>Toy Name:</span> {name}</div>
            <div className="font-bold"><span>Price:</span> {price}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold"><span>Available Quantity:</span> {availableQuantity}</div>
            <div className="font-bold"><span>Rating</span>{rating}</div>
          </div>
        </div>
      </td>
      <td className="font-bold"><p className="limited-length">{detailDescription}</p></td>
      <td className="text-center">
        <Link to={`/updateMyToy/${_id}`} className="btn bg-pink-600">Update</Link>
      </td>
      <th className="text-center">
        <button onClick={()=> handlerdelete(_id)} className="btn bg-pink-600">delete</button>
      </th>
    </tr>
  );
};

export default MyTouRow;
