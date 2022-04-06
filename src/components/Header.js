import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchUser, sortUser } from "../redux/action/userAction";

export default function Header() {
  const [nameS, setNames] = useState("");
  const [sort, setSort] = useState("name");
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();

  const handleChange = (e) => {
    setSort(e.target.value);
  }
  const handleSearch = (e) => {
    setNames(e.target.value);
  };
  const search = () => {
    dispatch(searchUser(nameS));
    setNames("");
  };
  const sortData = () => {
    dispatch2(sortUser(sort))
    setNames("");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            USER LIST
          </Typography>
        <Toolbar>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="filled"
            color="primary"
            value={nameS}
            onChange={handleSearch}
          />
          <Button onClick={search} variant="contained" color="warning">
            Search
          </Button>
          <FormControl style={{}}>
          <InputLabel id="demo-simple-select-label">Sorrt By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"description"}>Description</MenuItem>
            <MenuItem value={"language"}>Language</MenuItem>
            <MenuItem value={"visibility"}>Visibility</MenuItem>
            <MenuItem value={"size"}>Size</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={sortData} variant="contained" color="primary">
          Sort
        </Button>
        </Toolbar>
    </Box>
  );
}
