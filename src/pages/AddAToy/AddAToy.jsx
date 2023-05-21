import { toast } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  console.log("object", user);

  const handlerToyData = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    const photoUrl = form.photoUrl.value;

    const toyInfo = {
      pictureUrl: photoUrl,
      name: toyName,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      subCategory: subCategory,
      price: price,
      rating:rating,
      availableQuantity:availableQuantity,
      detailDescription:description,
    };

    console.log(toyInfo);

    fetch(`https://toy-marketplace-client-side.vercel.app/insert`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Add Toy successfully");
          form.reset();
        }
      });
  };

  return (
    <div className="pt-6 mb-12 card w-full bg-base-100 shadow-xl px-5">
      <h2 className="text-center underline font-bold text-2xl lg:text-4xl italic pb-4">
        Add A Toy
      </h2>
      <form onSubmit={handlerToyData}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              placeholder="Toy Name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              className="input input-bordered"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input
              type="text"
              name="subCategory"
              className="input input-bordered"
              placeholder="Sub-category"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered"
              placeholder="Price"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              className="input input-bordered"
              placeholder="Rating"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              className="input input-bordered"
              placeholder="Photo Url"
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
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
