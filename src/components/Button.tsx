type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  text: string,
  onClick?: () => void;
};

const btnSizes = {
  sm: 'h-[34px]',
  md: 'h-9',
  lg: 'h-16 text-[16px] px-10.5 rounded-[5px]',
};

const baseStyle = 'w-fit flex justify-center items-center leading-5 text-white text-[14px] px-6 bg-[#F24E1E] rounded-[6px] font-medium cursor-pointer';
const disabledClass = "bg-[#FF9090]"

export default function Button({ size = 'sm', isDisabled, text, onClick }: ButtonProps) {
  const sizeClass = btnSizes[size];
  return (
    <button
      disabled={isDisabled}
      className={`${baseStyle} ${sizeClass} ${isDisabled && disabledClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}