import * as React from "react";
import { useState } from "react";
import { Stuff } from "../model/stuff";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const producer: Stuff = { role: "Producer", name: "松本倖" };

const Home: React.FC = () => {
  const [stuff, setStuff] = useState<Stuff>(producer);

  return (
    <>
      <div>stuffed_roll_maker</div>
      <div>
        {stuff.role}:{stuff.name}
      </div>
    </>
  );
};

export default Home;
