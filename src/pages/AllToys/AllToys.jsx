import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div className="pt-4">
      <div className="text-center">
        <h1 className="font-bold text-2xl lg:text-4xl italic">All Toys</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full rounded-full my-5 max-w-xs"
        />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>
                  Available <br /> Quantity
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, i) => (
                <AllToysRow key={toy._id} toy={toy} i={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
