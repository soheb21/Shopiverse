import {  type Column, useTable, type TableOptions } from "react-table"

function TableHoc<T extends {}>(columns:Column<T>[],data:T[],heading:string,containerClassName:string){
    return function Hoc(){
        const option:TableOptions<T>={
            columns,
            data 
        }
        const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable(option)
        
        return (
            <div className={ containerClassName}>
                <h2>{heading}</h2>
                <table className="table" {...getTableProps}>
                    <thead>
                        {
                            headerGroups.map((headerGroup)=>(
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column)=>(
                                            <th {...column.getHeaderProps()}>
                                                {
                                                    column.render("Header")
                                                }
                                            </th>
                                        ))}
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {
                            rows.map((row)=>{
                                prepareRow(row);
                                return <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=>(
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        ))
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default TableHoc