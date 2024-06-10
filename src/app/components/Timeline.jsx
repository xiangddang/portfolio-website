"use client";
import React, { useState } from "react";

const Timeline = () => {
  const events = [
    {
      date: "2019.06",
      title: "Bachelor in Lanzhou University",
      location: "Lanzhou University",
      description:
        "Completed a Bachelor's degree in Environmental Engineering. Graduated with national scholarship, honor of excellent graduate, and excellent thesis.",
    },
    {
      date: "2020.09",
      title: "Master in Imperial College London",
      location: "Tech Company",
      description:
        "Developed and maintained web applications using React and Node.js.",
    },
    {
      date: "2020.09",
      title: "As Environmental Engineer",
    },
    {
      date: "2023.01",
      title: "Begins at Northeastern University",
    },
    {
      date: "2023.08",
      title: "First Web Project",
    },
    {
      date: "2024.01",
      title: "First Software Engineering Internship",
    },
    {
      date: "2024.04",
      title: "Software Engineer Internship in EuroStay",
    }
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Journey
      </h2>
      <div className="relative mx-auto p-4 flex overflow-x-auto h-80">
        <div className="relative w-full flex items-center space-x-8" style={{ width: `${(events.length + 1)* 10}rem`}}>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-300"></div>
          {events.map((event, index) => (
            <div
              className="flex-shrink-0 w-40 p-4 relative cursor-pointer"
              key={index}
              onClick={() => handleEventClick(event)}
            >
              <div className="w-6 h-6 rounded-full bg-blue-500 absolute top-1/2 transform -translate-y-1/2 z-10"></div>
              <div
                className={`absolute ${
                  index % 2 === 0 ? "bottom-10" : "top-10"
                } `}
              >
                <p
                  className="mb-0.5 text-base text-gray-500"
                  style={{ fontSize: "16px" }}
                >
                  {event.date}
                </p>
                <h4
                  className="mb-0.5 text-lg font-bold text-gray-800 w-60"
                  style={{ fontSize: "16px" }}
                >
                  {event.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        {selectedEvent && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16 p-4 bg-black rounded-lg shadow-lg z-10">
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
            <h4 className="text-lg mb-2">{selectedEvent.location}</h4>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <button
              className="mt-4 text-blue-500"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
