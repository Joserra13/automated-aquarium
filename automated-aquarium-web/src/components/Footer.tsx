export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      Open-source automated aquarium -- MIT Licensed -- © {new Date().getFullYear()} José Ramón Hoz.
    </footer>
  );
}