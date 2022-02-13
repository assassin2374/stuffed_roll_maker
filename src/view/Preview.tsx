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

const sampleStuff: Stuff = {
  id: 1,
  role: "主演",
  name: "松本倖",
};

const Preview = () => {
  const location = useLocation();
  const [allStuff, setAllStuff] = useState<{ list: Stuff[] }>(
    location.state as { list: Stuff[] }
  );
  // StuffList全体の高さ
  const height = allStuff.list.length * -200;
  // StuffListの中央値
  const width = 0;

  // 文字列バイト
  const byte = encodeURI(sampleStuff.name).replace(/%../g, "*").length;
  // 文字数
  const byteNum = sampleStuff.name.length;

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

  const widthAdjustment = (stuff: Stuff) => {
    const nameCount = stuff.name.length;
    let roleCount = 0;
    if (stuff.role) {
      roleCount = stuff.role.length;
    }

    console.warn(width, nameCount, roleCount);
    const wordCount = (nameCount + roleCount) * 50;
    return wordCount;
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
      <div
        style={{
          position: "absolute",
          top: roll,
          left: width,
          width: window.innerWidth,
          textAlign: "center",
        }}
      >
        {allStuff.list.map((stuff) => {
          return (
            <div
              key={stuff.id}
              style={{
                right: widthAdjustment(stuff), //max427
                height: 200,
              }}
            >
              <div
                style={{
                  fontSize: 50,
                  color: "white",
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
