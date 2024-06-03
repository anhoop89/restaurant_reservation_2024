// src/pages/Home.jsx
import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="Intro">
          <h2 className="content">Reserve A Table</h2>
          <h3 className="sologan">
            Your go-to solution for quick and easy restaurant reservations.
          </h3>
          <p className="promotion">
            This online reservation app will help you make reservations for your
            favorite restaurant in Portland area.
          </p>
          <div className="SpecificRestaurant">
            <h3 className="restaurantName">
              Please select your favorite restaurant to find a table!
            </h3>
            <form className="RestaurantForm">
            <div className="dropdown">
              <button>Select a restaurant</button>
              <select className="RestaurantList">
                <option value="Restaurant 1">Restaurant 1</option>
                <option value="Restaurant 2">Restaurant 2</option>
                <option value="Restaurant 3">Restaurant 3</option>
              </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


//  <div>
//           <h1 className="text-4xl font-extrabold text-gray-900 text-center">
//             Welcome to QuickTable
//           </h1>
//           <p className="mt-4 text-gray-600 text-center">
//             Your go-to solution for quick and easy restaurant reservations.
//           </p>
//         </div>
//         <div className="space-y-6">
//           <h2 className="text-2xl font-bold text-gray-800">
//             About Our Project
//           </h2>
//           <p className="text-gray-700">
//             QuickTable is designed to streamline the process of booking a table
//             at your favorite restaurant. With just a few clicks, you can reserve
//             a table and receive a confirmation from the restaurant.
//           </p>
//           <p className="text-gray-700">
//             Our easy-to-use platform allows you to select your preferred date
//             and time, provide your contact details, and submit your reservation
//             request. The restaurant will then get in touch with you to confirm
//             your booking and ensure that everything is set for your visit.
//           </p>
//         </div>
//         <div className="space-y-6">
//           <h2 className="text-2xl font-bold text-gray-800">How It Works</h2>
//           <p className="text-gray-700">
//             1. Select your desired date and time for your reservation.
//           </p>
//           <p className="text-gray-700">
//             2. Provide your contact information so the restaurant can reach you.
//           </p>
//           <p className="text-gray-700">3. Submit your reservation request.</p>
//           <p className="text-gray-700">
//             4. The restaurant will contact you to confirm your reservation.
//           </p>
//         </div>
//         <div className="text-center">
//           <a
//             href="/reservations/new"
//             className="inline-block bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Make a Reservation
//           </a>
//         </div>