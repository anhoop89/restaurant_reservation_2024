// src/pages/Home.jsx
import React from "react";
import { useState } from "react";


function Home() {
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const toggleRestaurantDropdown = (e) => {
    e.preventDefault();
    setIsRestaurantOpen(!isRestaurantOpen);
  };

  const toggleTimeDropdown = (e) => {
    e.preventDefault();
    setIsTimeOpen(!isTimeOpen);
  };

  const toggleGuestDropdown = (e) => {
    e.preventDefault();
    setIsGuestOpen(!isGuestOpen);
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="Intro">
          <h2 className="text-black-500 text-5xl font-bold">
            RESERVE A <span className="text-orange-600">TABLE</span>
          </h2>
          <h3 className="text-gray-500 text-xl font-semibold">
            YOUR GO-TO SOLUTION FOR QUICK AND EASY{" "}
            <span className="text-orange-400 font-bold text-decoration-line: underline">
              RESTAURANT RESERVATIONS.
            </span>
          </h3>
          <p className="text-gray-600 text-bold">
            This online reservation app will help you make reservations for your
            favorite restaurant in Portland area.
          </p>

          <div className="SpecificRestaurant">
            <h3 className="text-lg font-bold text-center text-black-300">
              Please select your favorite restaurant to{" "}
              <span className="text-orange-600">find a table!</span>
            </h3>

            <form className="RestaurantForm">
              <div className="relative flex flex-col items-center border-solid border-[5px] border-orange-600 cursor-pointer">
                <button
                  className="hover:bg-orange-300 text-black-300 font-bold py-5 px-5 w-full h-full flex items-center justify-between"
                  onClick={toggleRestaurantDropdown}
                >
                  <span className="flex-grow text-center">
                    Select A Restaurant
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isRestaurantOpen && (
                  <div className="absolute top-full mt-1 w-full border-solid border-[1px] border-black-300 bg-white rounded z-10">
                    <ul>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 1
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 2
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 3
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 4
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 5
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 6
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        Restaurant 7
                      </li>
                    </ul>
                  </div>
                )}
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
              <div className="relative flex flex-col items-center border-solid border-[1px] border-black cursor-pointer">
                <button
                  className="hover:bg-orange-300 text-black-300 font-bold py-5 px-5 w-full h-full flex items-center justify-between"
                  onClick={toggleTimeDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="flex-grow text-center">7:00 PM</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isTimeOpen && (
                  <div className="absolute top-full mt-1 w-full border-solid border-[2px] border-black-300 bg-white rounded z-10">
                    <ul>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        2:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        2:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        3:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        3:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        4:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        4:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        5:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        5:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        6:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        6:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        7:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        7:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        8:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        8:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        9:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        9:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        10:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        10:30PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        11:00PM
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        11:30PM
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Number of People */}{" "}
              <div className="relative flex flex-col items-center border-solid border-[1px] border-black cursor-pointer">
                <button
                  className="hover:bg-orange-300 text-black-300 font-bold py-5 px-5 w-full h-full flex items-center justify-between"
                  onClick={toggleGuestDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span className="flex-grow text-center">4 people</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {isGuestOpen && (
                  <div className="absolute top-full mt-1 w-full border-solid border-[2px] border-black-300 bg-white rounded z-10">
                    <ul>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        2 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        3 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        4 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        5 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        6 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        7 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        8 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        9 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        10 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        11 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        12 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        13 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        14 people
                      </li>
                      <li className="hover:bg-blue-500 cursor-pointer p-2 rounded">
                        15 people
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Submit Button */}
              <div className="relative flex flex-col items-center border-solid border-[2px] border-black-800 cursor-pointer bg-orange-600">
                <button className="hover:bg-orange-600 text-white font-bold py-5 px-5 w-full h-full">
                  READY TO FIND!
                </button>
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
