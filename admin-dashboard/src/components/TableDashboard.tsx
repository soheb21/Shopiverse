import TableHoc from './TableHoc'
import type { Column } from 'react-table'


interface columnDataType{
    id:string,
    amount:number,
    quantity:number,
    discount?:number,
    status:string
 }
 const column:Column<columnDataType>[]=[
    {
        Header:"ID",
        accessor:"id"
    },
    {
        Header:"Amount",
        accessor:"amount"
    },
    {
        Header:"Quantity",
        accessor:"quantity"
    },
    {
        Header:"Discount",
        accessor:"discount"
    },
    {
        Header:"Status",
        accessor:"status"
    },
 ]
const TableDashboard = ({data=[]}:{data:columnDataType[]}) => {

  return TableHoc<columnDataType>(column,data,"Top Transaction","transactionBox")();
}

export default TableDashboard