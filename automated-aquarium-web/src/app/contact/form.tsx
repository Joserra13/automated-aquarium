export default function contactForm() {

  return (
    <form className="flex flex-col gap-4 w-full max-w-md" action="/automated-aquarium/api/send" method="post">
      <input
        type="text"
        placeholder="Your Name"
        name="firstName"
        className="p-2 rounded border border-gray-300"
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        className="p-2 rounded border border-gray-300"
      />
      <textarea
        placeholder="Your Message"
        name="body"
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
  );
}
