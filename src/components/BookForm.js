import React from "react";
import CheckIn from "./CheckIn";
import KidsDropdown from "./KidsDropdown";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";

const BookForm = () => {
  return (
    <form className="h-[300px] bg-pink-200 w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
