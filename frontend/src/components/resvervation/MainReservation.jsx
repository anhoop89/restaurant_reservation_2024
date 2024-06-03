import React from "react";
import Restaurant_data from "../../mookup_data/RestaurantData.json";

const MainReservation = () => {
    return (
      <div className="min-h-screen mx-4 py-12 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-2">
          <h1 className="text-2xl font-extrabold ">
            {" "}
            LET'S{" "}
            <span className="text-red-700 hover:text-blue-800"> RESERVE</span> A
            TABLE!{" "}
          </h1>
          <p className="font-mono text-wrap">
            Ready to experience a delightful dining experience? Secure your spot
            now at your favorite restaurant with just a few clicks! Don’t miss
            out on enjoying the perfect meal with your loved ones. Reserve your
            table today and let us take care of the rest. Click below to get
            started on your reservation journey with QuickTable!
          </p>
          {Restaurant_data.map((data, index) => (
            <div key={index} className="border-2 p-4 rounded-lg shadow-lg">
              <img
                src={data.photo}
                alt={data.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold">{data.name}</h3>
              <p className="text-gray-700">{data.description}</p>
              <p className="mt-2">
                <strong>Location:</strong> {data.location}, {data.zipcode}
              </p>
              <p className="mt-1">
                <strong>Open:</strong> {data.open_time} -{" "}
                <strong>Close:</strong> {data.close_time}
              </p>
            </div>
          ))}

          <button className="border-2 p-2 bg-orange-200">
            this button is used for selecting a restaurant
          </button>
        </div>
      </div>
    );
};

export default MainReservation;