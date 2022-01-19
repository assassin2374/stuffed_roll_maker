import * as React from "react";
import { Stuff } from "../model/stuff";
import { useEffect, useState } from "react";

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
  const [roll, setRoll] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoll((roll) => {
        return roll + 1;
      });
    }, 100);
    return () => {
      return clearInterval(interval);
    };
  }, []);

  const countUp = () => {
    setCount(count + 1);
    return count;
  };

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
            <div key={countUp()}>
              <div style={{ fontSize: 50, color: "red" }}>
                {stuff.role} {stuff.name}
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
