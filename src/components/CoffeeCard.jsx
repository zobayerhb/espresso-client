import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {
    _id,
    name,
    coffeeAvailable,
    supplier,
    taste,
    category,
    details,
    photoURL,
  } = coffee || {};

  const handleCoffeeDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success",
            });
          });
        const remainingCoffee = coffees.filter((coffee) => coffee._id !== _id);
        setCoffees(remainingCoffee);
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto shadow-lg flex justify-between ">
      <div>
        <img src={photoURL} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <h3>Name: {name}</h3>
        <span>{coffeeAvailable}</span>
        <span>{supplier}</span>
        <span>{taste}</span>
        <span>{category}</span>
        <span>{details}</span>
      </div>
      <div className="join join-vertical space-y-3">
        <button className="btn join-item">show</button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn join-item">Edit</button>
        </Link>
        <button
          onClick={() => handleCoffeeDelete(_id)}
          className="btn join-item bg-orange-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
