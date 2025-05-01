type avatarProps = {
  size: "xl" | "lg" | "md" | "sm"
  imgUrl: string
  alt?: string
  rounded?: boolean
  className: string
}

const avatarSizes = {
  sm: 'h-[37px] w-[37px] rounded-lg',
  md: 'h-[45px] w-[45px]',
  lg: 'h-[86px] w-[86px] border-[1px] border-white',
  xl: 'h-[100px] w-[100px]'
};

function Avatar({ size = "sm", rounded, className = "", alt = "img", imgUrl }: avatarProps) {
  const sizeClass = avatarSizes[size];

  return (
    <div className={`${className} ${rounded ? "rounded-full" : ""} ${sizeClass} overflow-hidden`}>
      <img
        src={imgUrl}
        alt={alt}
        className={`w-full h-full object-cover ${rounded ? "rounded-full" : ""}`}
      />
    </div>
  );
}

export default Avatar;