import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyTouRow from "./MyTouRow";
import { toast } from "react-hot-toast";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);


  const handlerdelete = id =>{
    fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        }
    }).then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        const remaining = myToys.filter((myToys) => myToys._id !== id);
        setMyToys(remaining);
        toast.success("Delete successfully");
      }
    });
};

  return (
    <div>
      <h2 className="text-center underline font-bold text-2xl lg:text-4xl italic py-6">
        My Toys
      </h2>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            {
              myToys.map(myToy => <MyTouRow key={myToy._id} myToy={myToy} handlerdelete={handlerdelete}/>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
