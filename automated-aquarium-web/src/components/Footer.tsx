import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-center">
      <div>
        Open-source automated aquarium -- MIT Licensed -- ©{" "}
        {new Date().getFullYear()} José Ramón Hoz.<br></br>
        Version: {process.env.APP_VERSION} | commitHash:{" "}
        <Link
          href={`https://github.com/Joserra13/automated-aquarium/tree/${process.env.COMMIT_HASH}`}
          className="underline text-blue-400"
          target="_blank"
        >
          {process.env.COMMIT_HASH}
        </Link>
      </div>
    </footer>
  );
}
