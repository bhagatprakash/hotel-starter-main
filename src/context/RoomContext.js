import React, { createContext, useState } from "react";
import { roomData } from "../data";

// create context

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 adult");
  const [kids, setKids] = useState("0 kids ");
  const [total, setTotal] = useState(0);

  console.log(`adults ${adults} `);
  console.log(`kids ${kids}`);

  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
