import React from "react";

export default function ReservationModal({
  open,
  onClose,
  onSubmit,
  selectedRestaurant,
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center 
            z-10"
    >
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
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          >
            Close
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
