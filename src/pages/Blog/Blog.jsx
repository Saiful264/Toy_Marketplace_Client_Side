const Blog = () => {
  return (
    <div>
      <div className="">
        <table className="table-normal w-full">
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
              <td>
                <samp className="text-xl text-black font-extrabold">Ans:</samp>{" "}
                An access token is a security credential that is used to
                authenticate and authorize requests to access protected
                resources in a system. It is typically issued by an
                authentication server after a user successfully authenticates.
                The access token is then included in subsequent API requests as
                proof of the authenticated user's identity and permissions. You
                can store the tokens as HTTP-only cookies, which can only be
                accessed by the server and are not exposed to client-side
                JavaScript or browser local store where it can be exposed to
                client-side JavaScript. HTTP-only cookies is more secure then
                browser local store
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <h1 className="text-xl font-semibold">
                  Compare SQL and NoSQL databases?
                </h1>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="active">
              <td>
                <samp className="text-xl text-black font-extrabold">Ans:</samp>{" "}
                <span className="text-black font-bold">SQL:</span>SQL databases
                are primarily called Relational Databases (RDBMS); whereas NoSQL
                databases are primarily called non-relational or distributed
                databases.SQL databases define and manipulate data-based
                structured query language (SQL). Seeing from a side this
                language is extremely powerful. SQL is one of the most versatile
                and widely-used options available which makes it a safe choice,
                especially for great complex queries. But from another side, it
                can be restrictive. SQL requires you to use predefined schemas
                to determine the structure of your data before you work with it.
                Also, all of your data must follow the same structure. This can
                require significant up-front preparation which means that a
                change in the structure would be both difficult and disruptive
                to your whole system. <br />
                <span className="text-black font-bold">NoSQL:</span>NoSQL, short
                for "not only SQL," is a broad category of database management
                systems that provide alternatives to traditional relational
                databases (SQL databases). Unlike SQL databases, NoSQL databases
                are designed to handle unstructured, semi-structured, and
                rapidly changing data types at scale.Flexibility: NoSQL
                databases generally provide flexible schemas that enable faster
                and more iterative development. The flexible data model makes
                NoSQL databases ideal for semi-structured and unstructured data.
                Scalability: NoSQL databases are generally designed to scale out
                by using distributed clusters of hardware instead of scaling up
                by adding expensive and robust servers. Some cloud providers
                handle these operations behind-the-scenes as a fully managed
                service. High-performance: NoSQL database are optimized for
                specific data models and access patterns that enable higher
                performance than trying to accomplish similar functionality with
                relational databases. Highly functional: NoSQL databases provide
                highly functional APIs and data types that are purpose built for
                each of their respective data models.
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <h1 className="text-xl font-semibold">
                  What is express js? What is Nest JS (google it)?
                </h1>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="active">
              <td>
                <samp className="text-xl text-black font-extrabold">Ans:</samp>{" "}
                <span className="text-black font-bold">Express.js</span>
                Express is a minimalist and flexible framework that is easy to
                use and has a large community of developers. NestJS, on the
                other hand, is a newer framework that provides additional
                features such as dependency injection, a modular architecture,
                and an intuitive CLI. With Express.js, you can define routes to
                handle different HTTP methods (such as GET, POST, PUT, DELETE)
                and URL patterns. It allows you to extract data from request
                parameters, query strings, headers, and bodies. You can also use
                middleware functions to perform operations before or after
                handling requests, such as authentication, logging, error
                handling, and more.
                <span className="text-black font-bold">NestJS: </span>NestJS and
                Express are built on top of the Node.js runtime and use the same
                HTTP server framework. However, they have different
                architectural approaches. Express follows a traditional
                request-response model, where each incoming request is processed
                by a route handler that sends a response back to the client. The
                route handler can perform some actions, such as querying a
                database or calling an external API, before sending the
                response. Express does not provide any opinionated architecture
                and leaves the application structure up to the developer.
              </td>
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
              <td>
                <samp className="text-xl text-black font-extrabold">Ans:</samp>{" "}
                <p className="">
                  {" "}
                  MongoDB's aggregate is a powerful framework for performing
                  data processing and analysis operations on MongoDB
                  collections. It allows you to perform complex data
                  transformations, aggregations, and computations within the
                  database. In programming, we often run a series of operations
                  on a collection of items. Aggregation operations process data
                  records and return computed results. Not only do we have the
                  ability to aggregate data on the client side with JavaScript,
                  but we can use MongoDB to run operations on the server against
                  our collections stored in the database before the result is
                  returned to the client. In the aggregation pipeline, you list
                  out a series of instructions in a "stage." For each stage
                  that's defined, MongoDB executes them one after another in
                  order to give a finalized output you're able to use.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="card card-compact btn hover:bg-sky-500 transition-all duration-200 hover:-translate-y-1">
          me
        </button>
      </div>
    </div>
  );
};

export default Blog;
