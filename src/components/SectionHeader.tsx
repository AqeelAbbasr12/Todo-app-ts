interface sectionHeaderProps {
  text: string
}

function SectionHeader({ text }: sectionHeaderProps) {
  return <span className="font-semibold text-[24px] border-b-[#F24E1E] border-b-2">
    {text}
  </span>
}

export default SectionHeader;