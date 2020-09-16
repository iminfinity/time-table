import React, { useMemo } from "react";
import "./table.styles.scss";

import { useTable } from "react-table";

const Table = () => {
  const data = useMemo(
    () => [
      {
        time: "10am-11am",
        monday: "Parallel and Distributed Systems",
        tuesday: "Internet and Web Technology",
        friday: "Principle of Compiler Design",
      },
      {
        time: "11am-12pm",
        monday:
          "Design and Analysis of Algorithm & Parallel and Distributed Systems",
        tuesday: "Internet and Web Technology",
        thrusday: "Machine Learning",
        friday:
          "Design and Analysis of Algorithm & Principle of Compiler Design",
        saturday: "Data Mining And Knowledge Discovery",
      },
      {
        time: "12pm-1pm",
        monday: "Design and Analysis of Algorithm",
        thrusday: "Machine Learning",
        friday: "Design and Analysis of Algorithm",
        saturday: "Data Mining And Knowledge Discovery",
      },

      {
        time: "2pm-3pm",
        monday: "Machine Learning",
      },
      {
        time: "3pm-4pm",
        monday: "Machine Learning",
        tuesday: "Principle of Compiler Design",
        wednesday: "Internet and Web Technology",
        thrusday: "Parallel and Distributed System",
      },
      {
        time: "4pm-5pm",
        tuesday: "Principle of Compiler Design",
        wednesday: "Internet and Web Technology",
        thrusday: "Parallel and Distributed System",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "monday",
        accessor: "monday", // accessor is the "key" in the data
      },
      {
        Header: "tuesday",
        accessor: "tuesday",
      },
      {
        Header: "wednesday",
        accessor: "wednesday",
      },
      {
        Header: "thrusday",
        accessor: "thrusday",
      },
      {
        Header: "friday",
        accessor: "friday",
      },
      {
        Header: "saturday",
        accessor: "saturday",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    // apply the table props
    <table {...getTableProps()} className="time-table">
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
      <footer>My Time table for V Semester</footer>
    </table>
  );
};

export default Table;
