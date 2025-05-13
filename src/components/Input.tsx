import Icon from "./Icon";
import type { IconName } from "./Icon";

// type InputProps = {
//   placeholder?: string,
//   label?: string
//   size?: "sm" | "lg"
//   icon?: IconName
//   type?: string
//   value?: string
//   onChange: (e: string) => void
// }

interface InputProps {
  placeholder: string;
  label?: string;
  type: string;
  icon?: IconName;
  size?: "sm" | "lg";
  value: string;
  onChange: (e: string) => void;
  hasError?: boolean;
}

const inputSizes = {
  sm: "h-[37px]",
  lg: "h-15",
};

function Input({
  size = "sm",
  type = "text",
  value = "",
  icon,
  placeholder,
  label,
  hasError,
  onChange,
}: InputProps) {
  const sizeClass = inputSizes[size];
  return (
    <div className="">
      {label && (
        <label
          htmlFor=""
          className="block font-semibold text-[14px] text-black mb-1"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <Icon
            name={icon}
            className="absolute mt-4 px-5"
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className={`${hasError ? "!text-red-500" : "text-black"} w-full h-9 font-normal text-3 leading-5 px-3.5 border-[1px] rounded-md  ${sizeClass} ${icon && "ps-16"}`}
        />
      </div>
    </div>
  );
}

export default Input;
