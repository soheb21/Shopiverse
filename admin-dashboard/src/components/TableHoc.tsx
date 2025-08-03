import {  type Column, useTable, type TableOptions, useSortBy, usePagination } from "react-table"

function TableHoc<T extends {}>(columns:Column<T>[],data:T[],heading:string,containerClassName:string,showPagination:Boolean = false){
    return function Hoc(){
        const option:TableOptions<T>={
            columns,
            data ,
            initialState:{
           pageSize:4
            }
        }
        const {getTableProps,getTableBodyProps,headerGroups,prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        pageCount,
        nextPage,
        previousPage,
        state: {  pageIndex},} = useTable(option,useSortBy,usePagination)
        
        return (
            <div className={ containerClassName}>
                <h2>{heading}</h2>
                <table className="table" {...getTableProps}>
                    <thead>
                        {
                            headerGroups.map((headerGroup)=>(
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column)=>(
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                {column.render("Header")}
                                                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                            </th>
                                        ))}
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {
                            page.map((row)=>{
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
                {
                    showPagination &&  <div className="tablePagination">
                       <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
                        <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                        <button disabled={!canNextPage} onClick={nextPage}>
                             Next
                         </button>
                    </div>
                }

            </div>
        )
    }
}
export default TableHoc