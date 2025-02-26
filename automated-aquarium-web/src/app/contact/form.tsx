"use client";

import { useState } from "react";

export default function Form({
  onMessageStatusChange
}: {
  onMessageStatusChange: (status: "success" | "error" | null) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    onMessageStatusChange(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/automated-aquarium/api/send", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        await onMessageStatusChange("success");
        event.currentTarget.reset();
      } else {
        await onMessageStatusChange("error");
        setLoading(false);
      }
    } catch (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Your Name"
        name="firstName"
        required
        className="p-2 rounded border border-gray-300 text-black"
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        required
        className="p-2 rounded border border-gray-300 text-black"
      />
      <textarea
        placeholder="Your Message"
        name="body"
        required
        className="p-2 rounded border border-gray-300 text-black"
        rows={5}
      />
      <button
        type="submit"
        id="submit"
        disabled={loading}
        className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center ${
          loading
            ? "bg-gray-400"
            : "bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc]"
        } text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
