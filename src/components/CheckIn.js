import React, { useState } from "react";

import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

// icons

import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartData] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      {/* icon  */}

      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DataPicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="check in"
        onChange={(date) => setStartData(date)}
      />
    </div>
  );
};

export default CheckIn;
