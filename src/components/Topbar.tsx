import IconButton from "./IconButton";

function Topbar() {
  const text = "Dashboard";
  const midPoint = Math.floor(text.length / 2);
  const firstHalf = text.slice(0, midPoint);
  const secondHalf = text.slice(midPoint);

  return (
    <div className="h-[100px] w-full bg-[#F8F8F8] gap-x-8 md:gap-x-16 lg:gap-x-28  flex justify-between items-center px-4 md:px-20">
      <div className="text-[32px] font-semibold">
        <span style={{ color: "#FF6767" }}>{firstHalf}</span>
        <span style={{ color: "#000000" }}>{secondHalf}</span>
      </div>
      <div className="flex-grow max-w-5/12">
        <Searchbar />
      </div>
      <div className="flex items-center gap-3">
        <IconButton
          className=""
          icon="bell"
        />
        <IconButton
          className=""
          icon="calender"
        />

        <div className="text-center flex-grow">
          <p className="font-medium text-[15px] leading-4">Thursday</p>
          <a className="font-medium text-[14px] text-[#3ABEFF] leading-3.5">
            20/06/2023
          </a>
        </div>
      </div>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="relative block">
      <input
        type="text"
        className="h-9 ps-2 pe-10 rounded-lg bg-white w-full outline-[#FF6767]"
      />
      <IconButton
        className="absolute top-0 right-0"
        icon="search"
      />
    </div>
  );
}

export default Topbar;
