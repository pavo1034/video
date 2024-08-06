import React from "react";
import VideoContainer from "./VideoContainer";
import ScrollPage from "./ScrollPage";
import VideoApp from "./VideoContainer";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] mt-10 flex justify-between items-center mx-auto">
        <h1 className="font-bold text-6xl">iPhone</h1>
        <span className="font-bold text-2xl">Designed to be loved</span>
      </div>
      <div>
     <VideoApp/>
      </div>
      <div className="w-[85%] mx-auto mt-40 h-[30%] relative ">
        <h1 className=" text-5xl font-bold mb-10"> See what the advance cameras can do.</h1>
        <img src="imgPoster.jpg" className="rounded-2xl hover:scale-[1.02] ease-in duration-300"/>
      </div>
      <div>
        <ScrollPage/>
      </div>
    </div>
  );
};

export default LandingPage;
