const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        ${className}
      `}
    >
      {/* Shine Effect */}
      <span
        className="
          pointer-events-none
          absolute
          top-0
          left-[-120%]
          h-full
          w-16
          rotate-12
          bg-white/30
          blur-md
          transition-all
          duration-700
          group-hover:left-[120%]
        "
      />

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;
