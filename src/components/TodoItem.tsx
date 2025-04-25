import Thumbnail from "./Thumbnail";
import Profile2 from "@/assets/images/profile2.jpg"
import RingIcon from "./Icons/Ring";

function TodoItem() {
  return <div className="grid grid-cols-12 border-[1px] border-slate-500 rounded-md p-3.5">
    <div className="col-span-1">
      <RingIcon color="#F21E1E" />
    </div>
    <div className="col-span-11">
      <div className="flex">
        <div>
          <p className="text-[16px] font-semibold">Attend Nischal’s Birthday
            Party some more words</p>
          <p className="text-[14px] font-normal text-{#747474]">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>

        </div>
        <div>
          <Thumbnail size="md" imgUrl={Profile2} alt="thumbnail" />
        </div>
      </div>
      <div className="flex justify-between mt-2">

        <span className="text-[10px] font-normal">Priority: Moderate</span>
        <span className="text-[10px] font-normal">Status: Not Started</span>
        <span className="text-[10px] font-normal">Created on: 20/06/2023</span>
      </div>
    </div>

  </div>
}

export default TodoItem;