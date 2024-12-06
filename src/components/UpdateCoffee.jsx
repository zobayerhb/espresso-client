import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  //   console.log(loadedCoffee);
  const {
    _id,
    name,
    coffeeAvailable,
    supplier,
    taste,
    category,
    details,
    photoURL,
  } = loadedCoffee || {};

  const handleUpdataCoffeeAdd = (e) => {
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

    fetch(`http://localhost:8000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        if(data.modifiedCount){
            Swal.fire({
                title: "success!",
                text: "Coffee successfully Update",
                icon: "success",
                confirmButtonText: "OK",
              });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] w-11/12 mx-auto px-10">
      <h3 className="text-center font-bold text-3xl">Update Your Coffee</h3>
      <form onSubmit={handleUpdataCoffeeAdd}>
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
              defaultValue={name}
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
              defaultValue={coffeeAvailable}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={category}
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
              defaultValue={details}
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
              defaultValue={photoURL}
              name="photoURL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-neutral text-white mt-6"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
