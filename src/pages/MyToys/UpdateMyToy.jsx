
const UpdateMyToy = () => {
    const handlerUpdateToyData = event =>{
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
    }

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
              <span className="label-text">Toy Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" placeholder="Toy Name"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input type="text" name="sellerName" className="input input-bordered" placeholder="Seller Name"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="sellerEmail"
              placeholder="Seller Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <input type="text" name="subCategory" className="input input-bordered" placeholder="Sub-category"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" name="price" className="input input-bordered" placeholder="Price"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" className="input input-bordered" placeholder="Rating"/>
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
              <span className="label-text">Detail description</span>
            </label>
            <textarea type="text" name="description" className="input input-bordered" placeholder="Detail description"/>
          </div>
        </div>
        <div className="form-control pb-5 mt-6">
          <input
            className="btn btn-secondary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateMyToy;