import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { api } from "../../network/api";

function Index() {
  const [groups, setgroups] = useState([]);

  useEffect(() => {
    api.getAll("/groups").then((res) => {
      setgroups(
        res.map((group) => {
          return {
            ...group,
            createDate: group.createDate.substring(0, 10),
          };
        })
      );
    });
  }, []);

  console.log(groups);
  const columns = [
    { field: "id", headerName: "Group ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "createDate",
      headerName: "Create Date",
      width: 150,
    },
  ];

  return (
    <>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={groups} columns={columns} />
      </div>
    </>
  );
}

export default Index;
