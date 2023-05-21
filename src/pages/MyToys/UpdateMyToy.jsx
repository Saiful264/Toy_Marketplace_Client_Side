import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateMyToy = () => {
  const id = useLoaderData();

  const handlerUpdateToyData = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const description = form.description.value;
    const availableQuantity = form.availableQuantity.value;

    fetch(`http://localhost:5000/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        price: price,
        availableQuantity: availableQuantity,
        detailDescription: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.error("Update unsuccessfully");
        } else {
          toast.success("Update successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="pt-6 mb-12 card w-full bg-base-100 shadow-xl px-5">
        <h2 className="text-center underline font-bold text-2xl lg:text-4xl italic pb-4">
          Update Your Toy
        </h2>
        <form onSubmit={handlerUpdateToyData}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                className="input input-bordered"
                placeholder="Price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="text"
                name="availableQuantity"
                placeholder="Available quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <textarea
              type="text"
              name="description"
              className="input input-bordered"
              placeholder="Detail description"
            />
          </div>
          <div className="form-control pb-5 mt-6">
            <input
              className="btn btn-secondary btn-block"
              type="submit"
              value="Updata Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyToy;
