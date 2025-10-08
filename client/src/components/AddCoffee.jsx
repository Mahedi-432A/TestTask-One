import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    console.log(coffeeData);

    // send data to the server
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Coffee added successfully!",
          icon: "success",
          draggable: true,
        });
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add coffee. Please try again.");
      });
  };

  return (
    <section className="bg-[url(images/more/11.png)] bg-no-repeat bg-cover bg-center">
      <div className="w-fit mx-auto py-12">
        <Link to="/">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
                stroke="#331A15"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#374151] font-rancho text-3xl">Back To Home</p>
          </div>
        </Link>

        <div className="bg-[#f4f3f0] mt-5 border border-gray-300 shadow-md p-8 rounded-md max-w-4xl w-full">
          {/* Title */}
          <h1 className="text-3xl text-center text-gray-800 mb-4 font-rancho">
            Add New Coffee
          </h1>

          {/* Subtitle */}
          <p className="text-center font-raleway text-gray-600 mb-8 text-sm max-w-2xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* Form */}
          <form
            onSubmit={handleAddCoffee}
            className="grid text-black grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter coffee name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                name="price"
                type="number"
                placeholder="Enter coffee Price"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Supplier
              </label>
              <input
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Taste
              </label>
              <input
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                name="category"
                type="text"
                placeholder="Enter coffee category"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Details
              </label>
              <input
                name="details"
                type="text"
                placeholder="Enter coffee details"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Photo URL (Full width) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-amber-200"
              />
            </div>

            {/* Submit Button (Full width) */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full bg-[#d2b48c] hover:bg-[#c4a676] text-gray-800 font-semibold py-2 rounded-md border border-gray-500 transition-colors"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCoffee;
