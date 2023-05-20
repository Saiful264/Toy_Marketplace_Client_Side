const AllToys = () => {
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
        <th>Available <br /> Quantity</th> 
        <th></th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>$<span>30</span></td> 
        <td>120</td> 
        <td><button className="btn btn-secondary">View Details</button></td>
      </tr>
    </tbody> 
  </table>
</div>
      </div>
    </div>
  );
};

export default AllToys;