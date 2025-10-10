import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, taste, price, photo } = coffee;

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((cf) => cf._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] rounded-xl max-w-xl p-7 flex items-center gap-4">
      <div className="w-4/12">
        <img src={photo} alt="image of coffe" />
      </div>
      <div className="w-6/12 flex flex-col gap-3 font-raleway text-[#5C5B5B]">
        <p>
          <span className="text-[#1B1A1A]">Name: </span>
          {name}
        </p>
        <p>
          <span className="text-[#1B1A1A]">Taste: </span>
          {taste}
        </p>
        <p>
          <span className="text-[#1B1A1A]">Price: </span>
          {price}
        </p>
      </div>
      <div className="w-2/12 flex flex-col gap-3 text-white">
        <Link to={`coffeDetails/${_id}`}>
          <button className="rounded font-rancho w-12 text-center py-1 bg-[#D2B48C] cursor-pointer">
            View
          </button>
        </Link>
        <Link to={`updateCoffe/${_id}`}>
          <button className="rounded font-rancho w-12 text-center py-1 bg-[#3C393B] cursor-pointer">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="rounded w-12 text-center font-rancho py-1 bg-[#EA4744] cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
