type statusDotIconProps = {
  color?: string;
  className?: string;
};

function StatusDotIcon({ color = "#FF6767", className }: statusDotIconProps) {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="3.5"
        cy="3.5"
        r="3.5"
        fill={color}
      />
    </svg>
  );
}

export default StatusDotIcon;
