import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text hover:from-blue-600 hover:to-blue-400 transition-all duration-300"
      aria-label="Sereni AI"
    >
      NEW<span className="text-blue-400">GEN</span>
    </Link>
  );
}
