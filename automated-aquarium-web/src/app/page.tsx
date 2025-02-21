import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 pt-32 mr-16 ml-16">
      <div
        className="flex flex-col gap-4 items-center justify-center text-center sm:text-left"
        style={{
          backgroundImage: "url('/automated-aquarium/welcomePicture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(17, 24, 39, 0.75)" }}
          className="p-8"
        >
          <h1 className="text-4xl font-semibold">
            Welcome to your new Automated Aquarium
          </h1>
        </div>
      </div>
      <main className="flex flex-row gap-8 row-start-2 items-stretch sm:items-stretch mt-32 font-[family-name:var(--font-geist-mono)]">
        <div className="flex flex-col gap-4 items-center bg-transparent text-sm py-4 px-4 border border-blue-500 rounded-lg common-height common-width">
          <Image
            className="dark:invert"
            src="/automated-aquarium/code.svg"
            alt="code icon"
            width={100}
            height={100}
            priority
          />
          
          This Automated Aquarium is a side project involving different technologies where the main area is<br/>Internet of Things (IoT).

          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/automated-aquarium/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-blue-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div> */}
        </div>
        <div className="flex flex-col gap-4 items-center bg-transparent text-sm py-4 px-4 border border-blue-500 rounded-lg common-height common-width">
          <Image
            className="dark:invert"
            src="/automated-aquarium/in-work.svg"
            alt="In work icon"
            width={100}
            height={100}
            priority
          />
          
          You will be able to keep track of the progress of this project and see updates as new features are added.<br />Stay tuned for more exciting developments!

          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/automated-aquarium/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-blue-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div> */}
        </div>
        <div className="flex flex-col gap-4 items-center bg-transparent text-sm py-4 px-4 border border-blue-500 rounded-lg common-height common-width">
          <Image
            className="dark:invert"
            src="/automated-aquarium/share.svg"
            alt="In work icon"
            width={100}
            height={100}
            priority
          />
          
          This website is thought to help anyone who wants to build a project like this.
          Please, feel free to share your milestones to your favourite social media and tag us.

          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/automated-aquarium/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-blue-700 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div> */}
        </div>
      </main>
    </div>
  );
}
