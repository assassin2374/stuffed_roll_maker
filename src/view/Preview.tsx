import * as React from "react";
import { Stuff } from "../model/stuff";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Preview = () => {
  const location = useLocation();
  const [allStuff] = useState<{ list: Stuff[] }>(
    location.state as { list: Stuff[] }
  );
  // StuffList全体の高さ
  const height = allStuff.list.length * -200;
  // StuffListの中央値
  const width = 0;

  const vhheight = window.parent.screen.height;

  // 初期値は開始時の高さになる
  const [roll, setRoll] = useState<number>(height);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoll((roll) => {
        if (roll >= vhheight) {
          // ページ遷移
          navigate("/");
        }
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
