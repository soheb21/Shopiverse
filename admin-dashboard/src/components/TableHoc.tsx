import {
    type Column,
    useTable,
    type TableOptions,
    useSortBy,
    usePagination
  } from "react-table";
  
  function TableHoc<T extends {}>(
    columns: Column<T>[],
    data: T[],
    heading: string,
    containerClassName: string,
    showPagination: Boolean = false
  ) {
    return function Hoc() {
      const option: TableOptions<T> = {
        columns,
        data,
        initialState: {
          pageSize: 4
        }
      };
  
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        nextPage,
        previousPage,
        state: { pageIndex }
      } = useTable(option, useSortBy, usePagination);
  
      return (
        <div className={containerClassName}>
          <h2>{heading}</h2>
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => {
                const { key, ...restGroupProps } = headerGroup.getHeaderGroupProps(); // ✅ Fixed: extract `key` prop
                return (
                  <tr key={key} {...restGroupProps}>
                    {headerGroup.headers.map((column) => {
                      const headerProps = column.getHeaderProps(column.getSortByToggleProps());
                      const { key: colKey, ...restColProps } = headerProps; // ✅ Fixed: extract `key` prop
                      return (
                        <th key={colKey} {...restColProps}>
                          {column.render("Header")}
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                const { key, ...restRowProps } = row.getRowProps(); // ✅ Fixed: extract `key` prop
                return (
                  <tr key={key} {...restRowProps}>
                    {row.cells.map((cell) => {
                      const cellProps = cell.getCellProps();
                      const { key: cellKey, ...restCellProps } = cellProps; // ✅ Fixed: extract `key` prop
                      return (
                        <td key={cellKey} {...restCellProps}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showPagination && (
            <div className="tablePagination">
              <button disabled={!canPreviousPage} onClick={previousPage}>
                Prev
              </button>
              <span>{`${pageIndex + 1} of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>
                Next
              </button>
            </div>
          )}
        </div>
      );
    };
  }
  
  export default TableHoc;
  