export const BorderBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative z-0 rounded-xl p-[1px] ${className}`}>
      {/* Gradient border layer */}
      <div className="absolute inset-0 z-[-1] rounded-[inherit] bg-[conic-gradient(from_0deg,_#a78bfa,_#ec4899,_#f59e0b,_#6366f1,_#a78bfa)] animate-spin-slower blur-sm opacity-40" />
      
      {/* Card content wrapper */}
      <div className="rounded-[inherit] bg-white dark:bg-neutral-950 p-3 z-10 relative">
        {children}
      </div>
    </div>
  );
};
