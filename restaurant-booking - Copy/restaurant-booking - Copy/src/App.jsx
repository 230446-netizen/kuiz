import { useState } from "react";
import Restaurant3D from "./components/Restaurant3D";
import BookingForm from "./components/BookingForm";

function App() {
  const [tables, setTables] = useState([
    { id: 1, booked: false },
    { id: 2, booked: false },
    { id: 3, booked: false },
    { id: 4, booked: false },
    { id: 5, booked: false },
  ]);

  const [selectedTable, setSelectedTable] = useState(null);

  const handleBooking = () => {
    if (!selectedTable) {
      alert("Please select a table first!");
      return;
    }

    setTables(
      tables.map((table) =>
        table.id === selectedTable
          ? { ...table, booked: true }
          : table
      )
    );

    alert(`Table ${selectedTable} booked successfully!`);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Restaurant Table Booking
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        <Restaurant3D
          tables={tables}
          setSelectedTable={setSelectedTable}
        />

        <BookingForm
          selectedTable={selectedTable}
          handleBooking={handleBooking}
        />
      </div>
    </div>
  );
}

export default App;
