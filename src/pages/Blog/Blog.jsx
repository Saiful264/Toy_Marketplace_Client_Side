const Blog = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <h1 className="text-2xl font-semibold">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h1>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="active">
              <td><samp className="text-xl text-black font-extrabold">Ans:</samp> Hart Hagerty</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
              <h1 className="text-xl font-semibold">Compare SQL and NoSQL databases?</h1>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="active">
            <td><samp className="text-xl text-black font-extrabold">Ans:</samp> Hart Hagerty</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
              <h1 className="text-xl font-semibold">What is express js? What is Nest JS (google it)?</h1>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="active">
            <td><samp className="text-xl text-black font-extrabold">Ans:</samp> Hart Hagerty</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
              <h1 className="text-xl font-semibold">
                  What is MongoDB aggregate and how does it work (google it)?
                </h1>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="active">
            <td><samp className="text-xl text-black font-extrabold">Ans:</samp> Hart Hagerty</td>
            </tr>
          </tbody>
        </table>
        <button className="card card-compact btn hover:bg-sky-500 transition-all duration-200 hover:-translate-y-1">me</button>
      </div>
    </div>
  );
};

export default Blog;
