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

              {/* Calendar */}
              <div className="calendar">
                <div className="calendar-content">
                  <button id="prev-btn">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <div className="month-year" id="month-year"></div>
                  <button id="next-btn">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
                <div className="days">
                  <div className="day">Sun</div>
                  <div className="day">Mon</div>
                  <div className="day">Tue</div>
                  <div className="day">Wed</div>
                  <div className="day">Thu</div>
                  <div className="day">Fri</div>
                  <div className="day">Sat</div>
                </div>
                <div className="dates" id="dates"></div>
              </div>

              {/* Time Reservation */}
              <div className="time-reservation-dropdown">
                <button>Time</button>
                <select className="TimeAvailableList">
                  <option value="7:00PM">7:00PM</option>
                  <option value="11:00PM">11:00PM</option>
                  <option value="8:00AM">8:00AM</option>
                </select>
              </div>

              {/* Number of People */}
              <div className="num-of-people-dropdown">
                <button>Number of Guests</button>
                <select className="Num-of-people">
                  <option value="2 people">2 people</option>
                  <option value="3 people">3 people</option>
                  <option value="4 people">4 people</option>
                  <option value="5 people">5 people</option>
                  <option value="6 people">6 people</option>
                  <option value="7 people">7 people</option>
                  <option value="8 people">8 people</option>
                  <option value="9 people">9 people</option>
                  <option value="10 people">10 people</option>
                  <option value="11 people">11 people</option>
                  <option value="12 people">12 people</option>
                </select>
              </div>

              {/* Submit Button */}
              <button>Ready to Find</button>
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
