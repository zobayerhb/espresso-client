import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleCoffeeAdd = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const coffeeAvailable = form.coffeeAvailable.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const coffeeData = {
      name,
      coffeeAvailable,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    // console.log(coffeeData);

    // send data on server
    fetch("https://espresso-server-eight.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee successfully add",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] w-11/12 mx-auto px-10">
      <form onSubmit={handleCoffeeAdd}>
        {/* form name and chef row */}
        <div className="flex gap-3 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Available</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Available"
              name="coffeeAvailable"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="flex gap-3 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* form category and details row */}
        <div className="flex gap-3 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* form row */}
        <div className="flex gap-3 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoURL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-neutral text-white mt-6"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
