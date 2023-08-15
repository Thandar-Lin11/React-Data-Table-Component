import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

function App() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Thandar",
      email: "thandar@gmail.com",
      age: 22,
    },
    {
      id: 2,
      name: "Lin",
      email: "lin@gmail.com",
      age: 23,
    },
    {
      id: 3,
      name: "Aye",
      email: "aye@gmail.com",
      age: 28,
    },
    {
      id: 4,
      name: "Thaung",
      email: "thaung@gmail.com",
      age: 30,
    },
    {
      id: 5,
      name: "Ngwe",
      email: "ngwe@gmail.com",
      age: 35,
    },
    {
      id: 6,
      name: "Thandar",
      email: "thandar@gmail.com",
      age: 22,
    },
    {
      id: 7,
      name: "Lin",
      email: "lin@gmail.com",
      age: 23,
    },
    {
      id: 8,
      name: "Aye",
      email: "aye@gmail.com",
      age: 28,
    },
    {
      id: 9,
      name: "Thaung",
      email: "thaung@gmail.com",
      age: 30,
    },
    {
      id: 10,
      name: "Ngwe",
      email: "ngwe@gmail.com",
      age: 35,
    },
    {
      id: 11,
      name: "Thandar",
      email: "thandar@gmail.com",
      age: 22,
    },
    {
      id: 12,
      name: "Lin",
      email: "lin@gmail.com",
      age: 23,
    },
    {
      id: 13,
      name: "Aye",
      email: "aye@gmail.com",
      age: 28,
    },
    {
      id: 14,
      name: "Thaung",
      email: "thaung@gmail.com",
      age: 30,
    },
    {
      id: 15,
      name: "Ngwe",
      email: "ngwe@gmail.com",
      age: 35,
    },
  ];

  const [filterValue, setFilterValue] = useState(""); // Store filter value
  const [filteredRecords, setFilteredRecords] = useState(data); // Store filtered data

  function handleFilter(event) {
    const value = event.target.value;
    setFilterValue(value);

    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredRecords(newData); // Update filtered data
  }

  return (
    <div className="container mt-5">
      <div className="text-end">
        <input type="text" value={filterValue} onChange={handleFilter} />
      </div>
      <DataTable
        columns={columns}
        data={filteredRecords} // Use filtered data
        selectableRows
        fixedHeader
        pagination
        className="data-table"
      ></DataTable>
    </div>
  );
}

export default App;
