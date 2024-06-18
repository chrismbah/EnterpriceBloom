export const ArrowDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`w-4 h-4 cursor-pointer ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};
