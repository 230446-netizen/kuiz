function BookingForm({
  selectedTable,
  handleBooking,
}) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Booking Form
      </h2>

      <p className="mb-3">
        Selected Table: {selectedTable || "None"}
      </p>

      <input
        type="text"
        placeholder="Customer Name"
        className="input input-bordered w-full mb-2"
      />

      <input
        type="date"
        className="input input-bordered w-full mb-2"
      />

      <input
        type="time"
        className="input input-bordered w-full mb-2"
      />

     <button
  className="btn btn-primary w-full"
  onClick={handleBooking}
  disabled={!selectedTable}
>
  Book Now
</button>

    </div>
  );
}

export default BookingForm;
