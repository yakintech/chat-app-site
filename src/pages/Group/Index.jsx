import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { api } from "../../network/api";
import { Button, Stack } from "@mui/material";
import ButtonK from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function Index() {
  const [groups, setgroups] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    api.getAll("/groups").then((res) => {
      setgroups(res);
    });
  }, []);

  const handleDelete = () => {
    api.remove("/groups", id).then((res) => {
      setOpen(false);
    });
  };

  const columns = [
    { field: "id", headerName: "Group ID", width: 250 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "createDate", headerName: "Create Date", width: 150 },
    { field: "members", headerName: "Members", width: 500 },

    {
      field: "deleteButton",
      headerName: " ",
      width: 150,

      renderCell: (params) => {
        return (
          <Stack>
            <Button
              onClick={() => {
                handleClickOpen();
                setId(params.id);
              }}
              style={{
                backgroundColor: "#ef233c",
                color: "white",
              }}
            >
              Delete
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={groups} columns={columns} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"ARE YOU SURE YOU WANT TO DELETE THIS GROUP?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will have consequences.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonK onClick={handleClose}>No</ButtonK>
          <ButtonK onClick={handleDelete} autoFocus>
            Yes
          </ButtonK>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Index;
