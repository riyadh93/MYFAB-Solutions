export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 mt-auto">
      <div className="max-w-360 mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-lg font-black text-zinc-100 font-space-grotesk uppercase tracking-tighter">
            MYFAB SOLUTIONS
          </span>
          <p className="text-zinc-500 font-space-grotesk text-[10px] tracking-[0.2em] font-medium">
            &copy; 2025 MyFab Solutions
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-space-grotesk text-[10px] uppercase tracking-[0.2em] font-medium">
          <a
            href="#"
            className="text-zinc-500 hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-zinc-100 transition-colors opacity-80 hover:opacity-100"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
