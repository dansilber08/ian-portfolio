interface DecorativeLineProps {
  className?: string;
  variant?: "wavy" | "zigzag" | "curved";
}

const DecorativeLine = ({ className = "", variant = "wavy" }: DecorativeLineProps) => {
  const paths = {
    wavy: "M0,50 Q100,0 200,50 T400,50 T600,50 T800,50",
    zigzag: "M0,25 L50,75 L100,25 L150,75 L200,25 L250,75 L300,25 L350,75 L400,25",
    curved: "M0,100 C100,0 200,100 300,50 S500,0 600,100",
  };

  return (
    <svg
      className={`w-full h-24 ${className}`}
      viewBox="0 0 800 100"
      preserveAspectRatio="none"
    >
      <path
        d={paths[variant]}
        className="decorative-line"
        strokeLinecap="round"
        style={{
          strokeDasharray: 2000,
          strokeDashoffset: 2000,
          animation: "draw-line 2s ease-out forwards",
        }}
      />
    </svg>
  );
};

export default DecorativeLine;
