import Icon, { IconName } from "./Icon"

type IconButtonProps = {
  icon: IconName
  className?: string
}
function IconButton({ icon, className }: IconButtonProps) {
  return <button className={`${className} h-9 w-9 flex justify-center items-center rounded-lg bg-[#FF6767]`}>
    <Icon name={icon} />
  </button>
}

export default IconButton;