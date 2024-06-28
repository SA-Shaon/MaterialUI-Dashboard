import { GridColDef } from "@mui/x-data-grid";
import "./Users.scss";
import { useState } from "react";
import { userRows } from "../../data";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", minWidth: 30, flex: 1 },
  {
    field: "img",
    headerName: "Avatar",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    minWidth: 100,
    flex: 1,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    minWidth: 100,
    flex: 1,
    type: "boolean",
  },
];
const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      <DataTable slug="users" columns={columns} rows={userRows} />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
