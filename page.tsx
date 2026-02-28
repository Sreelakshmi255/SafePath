"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [trip, setTrip] = useState<any>(null);

  // Restore trip on load
  useEffect(() => {
    const saved = localStorage.getItem("trip");

    if (saved) {
      setTrip(JSON.parse(saved));
    }
  }, []);

  const startTrip = (tripData: any) => {
    setTrip(tripData);
    localStorage.setItem("trip", JSON.stringify(tripData));
  };

  return (
    <div className="p-6">
      {trip ? (
        <p className="text-lg font-semibold">
          Trip active to {trip.destination}
        </p>
      ) : (
        <button
          onClick={() => startTrip({ destination: "Airport" })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Trip
        </button>
      )}
    </div>
  );
}