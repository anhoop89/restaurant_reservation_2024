import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Restaurant_data from "../../mookup_data/RestaurantData.json";
import ReservationModal from "./form/ReservationModal";

const MainReservation = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);

  const selectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRestaurant(null);
  };

  const submitReservation = (reservationData) => {
    setReservations([...reservations, reservationData]);
    alert("Reservation submitted!");
    closeModal();
    // Here you would typically send the data to your backend server
    console.log("Reservations:", reservations);
  };

  return (
    <div className="min-h-screen mx-4 py-12 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg space-y-2 w-full">
        <h1 className="text-2xl font-extrabold text-center">
          LET'S{" "}
          <span className="text-red-700 hover:text-blue-800">RESERVE</span> A
          TABLE!
        </h1>
        <p className="font-mono text-wrap text-center">
          Ready to experience a delightful dining experience? Secure your spot
          now at your favorite restaurant with just a few clicks! Don’t miss out
          on enjoying the perfect meal with your loved ones. Reserve your table
          today and let us take care of the rest. Click below to get started on
          your reservation journey with QuickTable!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {Restaurant_data.map((data, index) => (
            <div key={index} data-aos="fade-up" className="flex">
              <div
                className="flex flex-col border-2 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:border-yellow-500 hover:shadow-2xl transform transition-transform duration-500 w-full"
                onClick={() => selectRestaurant(data)}
              >
                <img
                  src={data.photo}
                  alt={data.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold">{data.name}</h3>
                <p className="text-gray-700 flex-grow">{data.description}</p>
                <p className="mt-2">
                  <strong>Location:</strong> {data.location}, {data.zipcode}
                </p>
                <p className="mt-1">
                  <strong>Open:</strong> {data.open_time} -{" "}
                  <strong>Close:</strong> {data.close_time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ReservationModal
          open={modalOpen}
          onClose={closeModal}
          onSubmit={submitReservation}
          selectedRestaurant={selectedRestaurant}
        />
      </div>
    </div>
  );
};

export default MainReservation;
