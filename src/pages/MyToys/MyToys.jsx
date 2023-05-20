const MyToys = () => {
  return (
    <div>
      <h2 className="text-center underline font-bold text-2xl lg:text-4xl italic py-6">
        My Toys
      </h2>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
              <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">Price</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">Available quantity</div>
                    <div className="text-sm opacity-50">Rating</div>
                  </div>
                </div>
              </td>
              <td>
              Detail description
              </td>
              <td className="text-center">
              <button className="btn bg-pink-600">Update</button>
              </td>
              <th className="text-center">
                <button className="btn bg-pink-600">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
