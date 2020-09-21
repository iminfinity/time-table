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
        thursday: "Machine Learning",
        friday:
          "Design and Analysis of Algorithm & Principle of Compiler Design",
        saturday: "Data Mining And Knowledge Discovery",
      },
      {
        time: "12pm-1pm",
        monday: "Design and Analysis of Algorithm",
        thursday: "Machine Learning",
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
        thursday: "Parallel and Distributed System",
      },
      {
        time: "4pm-5pm",
        monday: "Principle of Compiler Design",
        tuesday: "Principle of Compiler Design",
        wednesday: "Internet and web Technology",
      },
      {
        time: "5pm-6pm",
        monday: "Principle of Compiler Design",
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
        accessor: "monday",
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
        Header: "thursday",
        accessor: "thursday",
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
    <table {...getTableProps()} className="time-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="7">
            My Time table for V Semester from Sep 2020 - Jan 2021
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
