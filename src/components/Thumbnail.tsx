
type thumbnailProps = {
  size: "lg" | "md"
  imgUrl: string
  alt?: string
  className?: string
}

const avatarSizes = {
  md: 'h-[88px] w-[88px]',
  lg: 'h-[158px] w-[158px] border-[1px] border-white',
  xl: 'h-[100px] w-[100px]'
};


function Thumbnail({ size = "md", className, alt = "img", imgUrl }: thumbnailProps) {
  const sizeClass = avatarSizes[size];

  return <div className={`${className} rounded-xl ${sizeClass}`}>
    <img src={imgUrl} alt={alt} className={`w-full h-full object-cover rounded-xl `} />
  </div>
}

export default Thumbnail;