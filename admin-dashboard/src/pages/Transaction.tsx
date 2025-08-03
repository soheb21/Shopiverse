import type { Column } from "react-table"
import Siderbar from "../components/Siderbar"
import { useState, type ReactElement, useCallback } from "react"
import { Link } from "react-router-dom"
import TableHoc from "../components/TableHoc"


interface TrandactionDataType{
  user:string,
  amount:number,
  discount:number,
  quantity:number,
  status:ReactElement,
  action:ReactElement
}
const column:Column<TrandactionDataType>[]=[
  {
    Header:"User",
    accessor:"user"

  },
  {
    Header:"Amount",
    accessor:"amount"
  },
  {
    Header:"Discount",
    accessor:"discount"
  },
  {
    Header:"Quantity",
    accessor:"quantity"
  },
  {
    Header:"Status",
    accessor:"status"
  },
  {
    Header:"Action",
    accessor:"action"
  }
]
const arr: TrandactionDataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const Transaction = () => {
const [data] = useState<TrandactionDataType[]>(arr)
  const Table = useCallback(
    TableHoc<TrandactionDataType>(
      column,
      data,
      "dashboard-product-box",
  "Transactions"
  ,true)
  ,[])

  return (
    <div className="adminContainer">
        <Siderbar/>
        <main>{Table()}</main>
    </div>
  )
}

export default Transaction