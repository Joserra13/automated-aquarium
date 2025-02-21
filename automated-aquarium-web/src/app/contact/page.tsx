/* eslint-disable react/no-unescaped-entities */


export default function Contact() {
  return (
    <div className="flex grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 pt-32 ml-16 mr-16">
      <main className="flex-1 flex items-center justify-center relative h-[400px] sm:h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded"
          style={{ backgroundImage: "url('/contact.png')" }}
        />

        {/* Content Centered */}
        <div className="relative z-10 text-white text-center p-8 rounded" style={{ backgroundColor: "rgba(17, 24, 39, 0.75)" }}>
          <h1 className="text-4xl font-semibold">Contact Us</h1>
        </div>
      </main>
      <main className="flex-1 flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl font-semibold">We'd love to hear from you!</h2>
          <form className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 rounded border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 rounded border border-gray-300"
              rows={5}
            />
            <button
              type="submit"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
