import Thumbnail from "./Thumbnail";
import Profile3 from "@/assets/images/profile3.jpg"
import RingIcon from "./Icons/Ring";
import Icon from "./Icon";

function TodoItem() {
  return <div className="relative grid grid-cols-12 border-[1px] border-slate-500 rounded-xl p-3.5">
    <div className="col-span-1">
      <RingIcon color="#F21E1E" />
    </div>
    <div className="col-span-11">
      <div className="flex items-center">
        <div className="pe-2 w-full max-w-full overflow-hidden">
          <p className="text-[16px] font-semibold leading-[18px]  line-clamp-2">
            Attend Nischal’s Birthday Party some more words
          </p>
          <p className=" text-[14px] font-normal text-[#747474] line-clamp-2">
            Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)
          </p>
        </div>
        <div>
          <Thumbnail size="md" imgUrl={Profile3} alt="thumbnail" />
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] font-normal">Priority: <span className="text-[#42ADE2]">Moderate </span></span>
        <span className="text-[10px] font-normal">Status: <span className="text-[#F21E1E]">Not Started</span></span>
        <span className="text-[10px] font-normal text-[#A1A3AB]">Created on: 20/06/2023</span>
      </div>
    </div>

    <Icon name="menu" className="absolute right-[10px] top-[6px] cursor-pointer" />
  </div>
}

export default TodoItem;