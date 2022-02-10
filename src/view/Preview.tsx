import * as React from "react";
import { Stuff } from "../model/stuff";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

const Preview = () => {
  const location = useLocation();
  const [allStuff, setAllStuff] = useState<{ list: Stuff[] }>(
    location.state as { list: Stuff[] }
  );
  // StuffList全体の高さ
  const height = allStuff.list.length * -200;
  // StuffListの中央値
  const width = window.innerWidth / 2;

  // 初期値は開始時の高さになる
  const [roll, setRoll] = useState<number>(height);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoll((roll) => {
        return roll + 1;
      });
    }, 25);
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
      <div style={{ position: "absolute", top: roll, left: width }}>
        {allStuff.list.map((stuff) => {
          return (
            <div key={stuff.id} style={{ height: 200 }}>
              <div
                style={{
                  fontSize: 50,
                  color: "red",
                  fontFamily: "ヒラギノ明朝 ProN",
                }}
              >
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
