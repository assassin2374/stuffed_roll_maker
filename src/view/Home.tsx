import * as React from "react";
import { useState } from "react";
import { Stuff } from "../model/stuff";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const PreviewButton = styled(Button)<ButtonProps>(() => {
  return {
    height: 55,
    width: 150,
  };
});

const producer: Stuff = { role: "製作者", name: "松本倖" };

const Home: React.FC = () => {
  const [stuff, setStuff] = useState<Stuff>(producer);
  const [stuffRole, setStuffRole] = useState("");
  const [stuffName, setStuffName] = useState("");
  const [stuffList, setStuffList] = useState<Stuff[]>([producer]);

  const addStuffRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStuffRole: string = e.target.value;
    setStuffRole(newStuffRole);
  };

  const addStuffName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStuffName: string = e.target.value;
    setStuffName(newStuffName);
  };

  const addStuff = async () => {
    const newStuffList = { ...stuffList };
    const newStuff: Stuff = {
      role: stuffRole,
      name: stuffName,
    };
    setStuff(newStuff);
    setStuffList(newStuffList);
  };

  return (
    <>
      <div>stuffed_roll_maker</div>
      <TextField
        label="役職"
        id="outlined-size-small"
        defaultValue=""
        variant="outlined"
        type="string"
        value={stuffRole}
        onChange={addStuffRole}
      />
      <TextField
        label="名前"
        id="outlined-size-small"
        defaultValue=""
        variant="outlined"
        type="string"
        value={stuffName}
        onChange={addStuffName}
      />
      <PreviewButton
        variant="contained"
        color="primary"
        size="large"
        onClick={addStuff}
      >
        プレビュー
      </PreviewButton>
      <div>
        {stuff.role}:{stuff.name}
      </div>
      <div>
        stuffList
        {stuffList.map((stuff) => {
          return (
            <div key={stuff.name}>
              {stuff.role}:{stuff.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
