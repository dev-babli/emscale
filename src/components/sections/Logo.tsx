import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="home" className="flex items-center gap-3">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 100 100"
        className="drop-shadow-lg hover:rotate-6 hover:scale-110 transition-transform duration-300"
      >
        <defs>
          <linearGradient id="hexGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#86efac" /> {/* light green */}
            <stop offset="50%" stopColor="#93c5fd" /> {/* light blue */}
            <stop offset="100%" stopColor="#c4b5fd" /> {/* light purple */}
          </linearGradient>
        </defs>
        <polygon
          points="50,5 95,27 95,73 50,95 5,73 5,27"
          fill="url(#hexGradient)"
        />
        <text
          x="50%"
          y="57%"
          textAnchor="middle"
          fontSize="34"
          fontWeight="700"
          fontFamily="Poppins, sans-serif"
          fill="white"
        >
          E
        </text>
      </svg>

      {/* Text */}
      <span className="text-3xl font-extrabold bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-tight">
        EMSCALE
      </span>
    </Link>
  );
}
