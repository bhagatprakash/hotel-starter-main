import React, { useContext } from "react";
import CheckIn from "./CheckIn";
import KidsDropdown from "./KidsDropdown";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form className="h-[300px]  w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>

        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>

        {/* button  */}
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Check now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
