export default function Footer() {
  return (
    <footer className="bg-black/50 text-white text-center py-6 mt-16 font-body text-sm md:text-base">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-white/70">
          © {new Date().getFullYear()} Oraelya AI Oracle — A whisper between worlds.
        </p>
        <p className="text-goldLight mt-2 italic text-glow">
          Guided by mystic code, illuminated by digital stars.
        </p>
      </div>
    </footer>
  );
}
