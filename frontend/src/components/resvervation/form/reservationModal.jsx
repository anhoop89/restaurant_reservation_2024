import React, { useState } from "react";
import CalendarComponent from "../CalendarComponent";

export default function ReservationModal({
  open,
  onClose,
  onSubmit,
  selectedRestaurant,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  if (!open) return null;

  const handleSubmit = () => {
    const reservationData = {
      restaurant: selectedRestaurant.name,
      date: selectedDate,
      time: selectedTime,
      guests: numberOfGuests,
    };
    onSubmit(reservationData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-1/2">
        <div>
          <h2 className="text-2xl font-bold mb-4">{selectedRestaurant.name}</h2>
          <p className="mb-2">
            <strong>Location:</strong> {selectedRestaurant.location},{" "}
            {selectedRestaurant.zipcode}
          </p>
          <p className="mb-2">
            <strong>Open:</strong> {selectedRestaurant.open_time} -{" "}
            <strong>Close:</strong> {selectedRestaurant.close_time}
          </p>
          <p>{selectedRestaurant.description}</p>
        </div>
        <CalendarComponent
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Select Time:
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="block w-full px-4 py-2 mb-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>
              Select a time
            </option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:15 AM">11:15 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            {/* Add more time options as needed */}
          </select>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Number of Guests:
          </label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            min="1"
            className="block w-full px-4 py-2 mb-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
