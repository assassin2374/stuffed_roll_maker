import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stuff } from "../model/stuff";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const PreviewButton = styled(Button)<ButtonProps>(() => {
  return {
    height: 55,
    width: 150,
  };
});

const producer: Stuff = { id: 1, role: "製作者", name: "松本倖" };

const Home = () => {
  const [stuff, setStuff] = useState<Stuff>(producer);
  const [stuffRole, setStuffRole] = useState("");
  const [stuffName, setStuffName] = useState("");
  const [stuffList, setStuffList] = useState<Stuff[]>([]);

  const navigate = useNavigate();

  const addStuffRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStuffRole: string = e.target.value;
    setStuffRole(newStuffRole);
  };

  const addStuffName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStuffName: string = e.target.value;
    setStuffName(newStuffName);
  };

  const addStuff = async () => {
    const newId = stuff.id + 1;
    const newStuffList = [...stuffList];

    // Stuffを更新
    const newStuff: Stuff = {
      id: newId,
      role: stuffRole,
      name: stuffName,
    };
    setStuff(newStuff);

    // StuffListを更新
    newStuffList.push(newStuff);
    setStuffList(newStuffList);
    console.info(stuffList);
  };

  const preview = async () => {
    // ページ遷移
    navigate("/Preview", { state: { list: stuffList } });
  };

  return (
    <>
      <Typography variant="h3" gutterBottom component="div">
        スタッフロールメーカー
      </Typography>
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
        追加
      </PreviewButton>
      <PreviewButton
        variant="contained"
        color="success"
        size="large"
        onClick={preview}
      >
        プレビュー
      </PreviewButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>役職</TableCell>
              <TableCell align="justify">名前</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stuffList.map((stuff) => {
              return (
                <TableRow
                  key={stuff.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {stuff.role}
                  </TableCell>
                  <TableCell align="justify">{stuff.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
