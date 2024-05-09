import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";

// Components

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

// scroll top components

import ScrollToTop from "../components/ScrollToTop";

// context
import { RoomContext } from "../context/RoomContext";

// icon
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  console.log(room);
  // destruture room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      {/* banner  */}
      <div className="bg-room bg-cover bg-center h-[600px] relative flex justify-center items-center">
        {/* overlay  */}
        <div className="absolute h-full w-full bg-black/70"></div>
        {/* title  */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name}Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left  */}
          <div className="w-full h-full lg:w-[60%] px-6 ">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />

            {/* facilites  */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                cum incidunt perferendis cupiditate quibusdam consectetur
                ratione rem autem quo aperiam, temporibus alias voluptate sunt,
                atque veritatis asperiores culpa? Aliquam, quia.
              </p>

              {/* grid  */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  // desture
                  const { name, icon } = item;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-x-3 flex-1"
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right  */}
          <div className="w-full h-full lg:w-[40%] ">
            {/* reservation  */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>your Reservation</h3>
                <div className="h-[55px]">
                  <CheckIn />
                </div>
                <div className="h-[55px]">
                  <CheckOut />
                </div>
                <div className="h-[55px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[55px]">
                  <KidsDropdown />
                </div>
                <div className="h-[55px]">
                  <button className="btn btn-lg btn-primary w-full  ">
                    Book now for ${price}
                  </button>
                </div>
              </div>
            </div>

            {/* rule  */}

            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                Accusantium veniam, magni consectetur dolore vel, in soluta
                voluptate quas, amet adipisci porro!
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" /> Check-in 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" /> Check-out 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" /> No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
