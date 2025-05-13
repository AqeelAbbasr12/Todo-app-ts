type dashboardIconProps = {
  color?: string;
  className?: string;
};

function DashboardIcon({ color = "#FF6767", className }: dashboardIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M13.3333 8V0H24V8H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM13.3333 24V10.6667H24V24H13.3333ZM0 24V16H10.6667V24H0Z"
        fill={color}
      />
    </svg>
  );
}

export default DashboardIcon;
