/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useCallback } from "react";
import Form from "./form";

export default function Contact() {
  const [messageStatus, setMessageStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleMessageStatusChange = useCallback((status: "success" | "error" | null) => {
    setMessageStatus(status);
  }, []);

  return (
    <div className="flex grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 pt-32 ml-16 mr-16">
      <main className="flex-1 flex items-center justify-center relative h-[400px] sm:h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded"
          style={{ backgroundImage: "url('/automated-aquarium/contact.png')" }}
        />

        {/* Content Centered */}
        <div
          className="relative z-10 text-white text-center p-8 rounded"
          style={{ backgroundColor: "rgba(17, 24, 39, 0.75)" }}
        >
          <h1 className="text-4xl font-semibold">Contact Us</h1>
        </div>
      </main>
      <main className="flex-1 flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl font-semibold">We'd love to hear from you!</h2>
          {/* Show message based on state */}
          <h3
            className={`text-green-600 ${
              messageStatus === "success" ? "block" : "hidden"
            }`}
          >
            Message sent!
          </h3>
          <h3
            className={`text-red-600 ${
              messageStatus === "error" ? "block" : "hidden"
            }`}
          >
            Error sending message!
          </h3>
          <Form onMessageStatusChange={handleMessageStatusChange} />
        </div>
      </main>
    </div>
  );
}
