import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=8d0cec72";

function App() {
  const [columns, setColumns] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetchColumns();
    fetchRecords();
  }, []);

  const fetchColumns = async () => {
    try {
      const response = await fetch(`${API_URL}&s=`); // Modify the API URL according to your API's requirements
      const data = await response.json();
      if (data.Search) {
        const sampleRecord = data.Search[0];
        const fetchedColumns = Object.keys(sampleRecord).map((key) => ({
          title: key,
          selector: (row) => row[key],
          sortable: true,
        }));
        setColumns(fetchedColumns);
      }
    } catch (error) {
      console.error("Error fetching columns:", error);
    }
  };

  const fetchRecords = async () => {
    try {
      const response = await fetch(`${API_URL}&s=`); // Modify the API URL according to your API's requirements
      const data = await response.json();
      if (data.Search) {
        setFilteredRecords(data.Search);
      }
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  function handleFilter(event) {
    const value = event.target.value;
    setFilterValue(value);

    const newData = filteredRecords.filter((row) => {
      return row.title.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredRecords(newData);
  }

  return (
    <div className="container mt-5">
      <div className="text-end">
        <input type="text" value={filterValue} onChange={handleFilter} />
      </div>
      <DataTable
        columns={columns}
        data={filteredRecords}
        selectableRows
        fixedHeader
        pagination
        className="data-table"
      ></DataTable>
    </div>
  );
}

export default App;
