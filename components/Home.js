import React from "react";


const Home = () => {
  return (
    <div className="about-section-container">
      <div className="items-center justify-center">
        <img className="absolute w-full h-[600px]" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-black-meat-western-food-banner-background-image_194600.jpg"/>
        <div className="absolute left-96 items-center mx-auto">
        <h1 className="text-8xl mx-auto ml-[320px] text-yellow-500 ">
          Food
        </h1> 
        <p className="text-4xl text-white mt-4 ">
          Food is essential for our body for a number of reasons.
          It gives us the energy needed for working, playing, and doing day-to-day activities.
        </p>
        <p className="text-4xl text-white">
          Being healthy does take discipline when you have fast foods and different types of restaurants at every corner, but the outcome may shock you.
        </p>
        <div className="about-buttons-container">
          <button className=" bg-orange-400 text-white p-2 px-4 rounded-md items-center  ml-[320px]  gap-2 hidden md:flex">Learn More</button>
        </div>
        </div>
      </div>
    </div>
    
  );
};
export default Home;