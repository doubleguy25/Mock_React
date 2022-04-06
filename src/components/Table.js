import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAUser, getUserThunk } from "../redux/action/userAction";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.User.userList);
  console.log(userList);
  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (id) => {
    dispatch(getAUser(id));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Language</TableCell>
            <TableCell align="center">visibility</TableCell>
            <TableCell align="center">size</TableCell>
            <TableCell align="center">Action</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.language}</TableCell>
              <TableCell align="center">{row.visibility}</TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">
                <Button onClick={() => handleEdit(row.id)} variant="contained" color="success">
                  Edit
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => handleDelete(row.id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
