import * as React from "react";
import { Stuff } from "../model/stuff";
import { useEffect, useState } from "react";

const sampleStuffRoll: Stuff[] = [
  {
    id: 1,
    role: "主演",
    name: "松本倖",
  },
  {
    id: 2,
    role: "脚本",
    name: "松本倖",
  },
  {
    id: 3,
    role: "演出",
    name: "松本倖",
  },
  {
    id: 4,
    role: "Special thanks to",
    name: "You",
  },
];

const Preview: React.FC = () => {
  // 初期値は開始時の高さになるので
  const [roll, setRoll] = useState<number>(-200);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoll((roll) => {
        return roll + 1;
      });
    }, 50);
    return () => {
      return clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        margin: 0,
      }}
    >
      <div style={{ position: "absolute", top: roll }}>
        {sampleStuffRoll.map((stuff) => {
          return (
            <div key={stuff.id} style={{ height: 200 }}>
              <div style={{ fontSize: 50, color: "red" }}>
                {stuff.role} {stuff.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
