import * as React from "react";
import { Stuff } from "../model/stuff";

const sampleStuffRoll: Stuff[] = [
  {
    role: "主演",
    name: "松本倖",
  },
  {
    role: "脚本",
    name: "松本倖",
  },
  {
    role: "演出",
    name: "松本倖",
  },
  {
    role: "Special thanks to",
    name: "You",
  },
];

const Preview: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        margin: 0,
      }}
    >
      {sampleStuffRoll.map((stuff) => {
        return (
          <div key={stuff.name} style={{ fontSize: 100, color: "white" }}>
            {stuff.role}:{stuff.name}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
