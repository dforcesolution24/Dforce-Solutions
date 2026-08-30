
import logo from "../assets/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div
        className="
          flex
          items-center
          justify-between
          px-6
          lg:px-8
          py-3
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <img
          src={logo}
          alt="DForce Solutions"
          className="h-10 md:h-12 w-auto"
        />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            Home
          </a>

          <a
            href="#about"
            className="
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            About Us
          </a>

          <a
            href="#services"
            className="
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            Services
          </a>

          <a
            href="#contact"
            className="
              text-white
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <Button
          className="
            px-4
            py-2
            md:px-6
            md:py-3
            rounded-full
            bg-cyan-500
            text-white
            text-sm
            md:text-base
            font-medium
            hover:bg-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
          "
        >
          Start Project
        </Button>
      </div>
    </header>
  );
};

export default Header;
