import React from "react";
import icons from "../assets/icons.json";
import cups from "../assets/cups.json";
import { Link } from "react-router-dom";
import CoffeeCard from "../miniComponents/CoffeeCard";

const HomeComponents = () => {
  const [coffees, setCoffees] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:5000/coffees')
      .then(res => res.json())
      .then(data => setCoffees(data))
      .catch(error => console.error('Error fetching coffees:', error));
  }, []);

  return (
    <>
      {/* banner part */}
      <section className="banner-bg h-[80vh] relative">
        <div className="md:w-2/5 w-9/12 absolute top-1/2 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white font-rancho lg:text-5xl md:text-3xl text-2xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white font-raleway text-sm md:text-base mt-4">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-[#242222] font-rancho lg:text-2xl text-xl px-4 mt-8 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white py-2 bg-[#E3B577]">
            Learn More
          </button>
        </div>
      </section>

      {/* festure promotion */}
      <section className="bg-[url('images/more/10.png')] bg-cover bg-center py-8 bg-no-repeat">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 justify-items-center lg:w-4/6 md:w-3/4 w-10/12 mx-auto">
          <div>
            <img
              className="lg:w-16 md:w-14 w-10"
              src={icons.icon1}
              alt="feature icon 1"
            />
            <h2 className="mt-4 text-[#331A15] font-rancho lg:text-4xl md:text-3xl text-2xl">
              Awesome Aroma
            </h2>
            <p className="text-[#1B1A1A] mt-2 font-raleway md:text-sm lg:text-base text-xs">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img
              className="lg:w-16 md:w-14 w-10"
              src={icons.icon2}
              alt="feature icon 2"
            />
            <h2 className="text-[#331A15] mt-4 font-rancho lg:text-4xl md:text-3xl text-2xl">
              High Quality
            </h2>
            <p className="text-[#1B1A1A] mt-2 font-raleway md:text-sm lg:text-base text-xs">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img
              className="lg:w-16 md:w-14 w-10"
              src={icons.icon3}
              alt="feature icon 3"
            />
            <h2 className="text-[#331A15] mt-4 font-rancho lg:text-4xl md:text-3xl text-2xl">
              Pure Grade
            </h2>
            <p className="text-[#1B1A1A] mt-2 font-raleway md:text-sm lg:text-base text-xs">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img
              className="lg:w-16 md:w-14 w-10"
              src={icons.icon4}
              alt="feature icon 4"
            />
            <h2 className="text-[#331A15] mt-4 font-rancho lg:text-4xl md:text-3xl text-2xl">
              Proper Roasting
            </h2>
            <p className="text-[#1B1A1A] mt-2 font-raleway md:text-sm lg:text-base text-xs">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>

      {/* products section */}
      <section className="text-center bg-[url('images/more/1.png')] bg-cover bg-center py-16 bg-white bg-no-repeat">
        <p className="text-[#1B1A1A] lg:text-xl font-raleway">
          --- Sip & Savor ---
        </p>
        <h1 className="text-[#331A15] font-rancho lg:text-5xl md:text-3xl text-2xl mt-2">
          Our Popular Products
        </h1>
        <Link to="/addCoffe">
          <button className="rounded cursor-pointer font-rancho lg:text-2xl text-xl px-4 mt-8 border-2 border-transparent hover:bg-[#F5F4F1] text-white hover:border-[#331A15] py-2 bg-[#E3B577]">
            Add Coffe
          </button>
        </Link>

        <div className="mt-12 w-fit mx-auto text-start grid lg:grid-cols-2 grid-cols-1 gap-5">
          {coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)}
        </div>
      </section>

      {/* gallery section */}
      <section className="bg-white text-center py-16 lg:py-20">
        <p className="text-[#1B1A1A] lg:text-xl font-raleway">Follow Us Now</p>
        <h1 className="text-[#331A15] font-rancho lg:text-5xl md:text-3xl text-2xl mt-2">
          Folow on Instagram
        </h1>
        <div className="mt-12 grid lg:grid-cols-4 grid-cols-2 gap-4 lg:w-4/6 md:w-3/4 w-10/12 mx-auto">
          <img src={cups.reactangle9} alt="gallery image 1" />
          <img src={cups.reactangle10} alt="gallery image 2" />
          <img src={cups.reactangle11} alt="gallery image 3" />
          <img src={cups.reactangle12} alt="gallery image 4" />
          <img src={cups.reactangle13} alt="gallery image 5" />
          <img src={cups.reactangle14} alt="gallery image 6" />
          <img src={cups.reactangle15} alt="gallery image 7" />
          <img src={cups.reactangle16} alt="gallery image 8" />
        </div>
      </section>
    </>
  );
};

export default HomeComponents;
