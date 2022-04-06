import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../redux/action/userAction";
import { v4 as uuid } from 'uuid';
export default function FormAdd() {
  const dispatch = useDispatch()
  const dataEdit = useSelector(state => state.User.getUser);
  useEffect(()=>{
    console.log(dataEdit);
    
    setDataAdd({
      id: dataEdit.id,
      name: dataEdit.name,
      description: dataEdit.description,
      language: dataEdit.language,
      visibility: dataEdit.visibility,
      size: dataEdit.size,
    })
  },[dataEdit])
  const [dataAdd, setDataAdd] = useState({
    id: "",
    name: "",
    description: "",
    language: "",
    visibility: "",
    size: "",
  })
  const add = () => {
    dispatch(addUser({...dataAdd, id: uuid()}))
    console.log({
      ...dataAdd, id: uuid()
    });
    setDataAdd({
      id: "",
      name: "",
      description: "",
      language: "",
      visibility: "",
      size: "",
    })
  };
  const clear = () =>{
    setDataAdd({
      id: "",
      name: "",
      description: "",
      language: "",
      visibility: "",
      size: "",
    })
  }
  const saveEdit = ()=>{
    console.log(dataAdd);
    dispatch(editUser(dataAdd))
    setDataAdd({
      id: "",
      name: "",
      description: "",
      language: "",
      visibility: "",
      size: "",
    })
  }
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        variant="filled"
        color="primary"
        value={dataAdd.name}
        onChange={(e)=>{setDataAdd({
          ...dataAdd,
          name: e.target.value
        })}}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        name="description"
        variant="filled"
        color="primary"
        value={dataAdd.description}
        onChange={(e)=>{setDataAdd({
          ...dataAdd,
          description: e.target.value
        })}}
      />
      <TextField
        id="outlined-basic"
        label="Language"
        variant="filled"
        color="primary"
        value={dataAdd.language}
        onChange={(e)=>{setDataAdd({
          ...dataAdd,
          language: e.target.value
        })}}
      />
      <TextField
        id="outlined-basic"
        label="Visibility"
        variant="filled"
        color="primary"
        value={dataAdd.visibility}
        onChange={(e)=>{setDataAdd({
          ...dataAdd,
          visibility: e.target.value
        })}}
      />
      <TextField
        id="outlined-basic"
        label="Size"
        variant="filled"
        color="primary"
        value={dataAdd.size}
        onChange={(e)=>{setDataAdd({
          ...dataAdd,
          size: e.target.value
        })}}
      />
      <Button onClick={add} variant="contained" color="success">
        ADD
      </Button>
      <Button onClick={clear} variant="contained" color="warning">
        Clear
      </Button>
      <Button onClick={saveEdit} variant="contained" color="primary">
        Save
      </Button>
    </>
  );
}
