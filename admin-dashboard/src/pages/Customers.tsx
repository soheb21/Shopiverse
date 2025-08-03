import { FaTrash } from "react-icons/fa";
import Siderbar from "../components/Siderbar"
import type { Column } from "react-table";
import { useCallback, useState } from "react";
import TableHoc from "../components/TableHoc";


interface CustomerDataType {
}

const columns: Column<CustomerDataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: CustomerDataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<CustomerDataType[]>(arr)
  const Table = useCallback(
    TableHoc<CustomerDataType>(columns,data,"dashboard-product-box",
    "Customers",true),[]
  )
  return (
    <div className="adminContainer">
        <Siderbar/>
        <main>{Table()}</main>
    </div>
  )
}

export default Customers