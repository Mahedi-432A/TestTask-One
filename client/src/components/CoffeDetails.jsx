import React from "react";
import { Link, useParams } from "react-router-dom";

const CoffeDetails = () => {
  const {id} = useParams();
  const [coffee, setCoffee] = React.useState(null);
  React.useEffect(() => {
    fetch(`http://localhost:5000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data))
      .catch((error) => console.error("Error fetching coffee details:", error));
  }, [id]);

  return (
    <section className="bg-[url('images/more/11.png')] bg-no-repeat bg-cover bg-center">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-[#374151] font-rancho text-3xl">Back To Home</p>
          </div>
        </Link>

        <div className="flex flex-col mt-9 md:flex-row items-center justify-center rounded-md p-6 bg-[#F4F3F0] lg:w-4xl md:w-xl mx-auto shadow-md">
          {/* Left Side - Coffee Cup */}
          <div className="flex justify-center md:w-1/2">
            <img
              src={coffee?.photo}
              alt="Coffee Cup"
              className="w-48 h-auto"
            />
          </div>

          {/* Right Side - Info */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-10">
            <h2 className="text-2xl text-[#331A15] mb-4 font-rancho">
              Niceties
            </h2>
            <ul className="space-y-1 text-gray-800">
              <li>
                <span className="font-semibold">Name:</span> {coffee?.name}
              </li>
              <li>
                <span className="font-semibold">Price:</span> ${coffee?.price}
              </li>
              <li>
                <span className="font-semibold">Supplier:</span> {coffee?.supplier}
              </li>
              <li>
                <span className="font-semibold">Taste:</span> {coffee?.taste}
              </li>
              <li>
                <span className="font-semibold">Category:</span> {coffee?.category}
              </li>
              <li>
                <span className="font-semibold">Details:</span> {coffee?.details}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeDetails;
