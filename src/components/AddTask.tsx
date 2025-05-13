import Button from "./Button";
import FileUpload from "./FileUpload";
import StatusDotIcon from "./Icons/StatusDot";
import Input from "./Input";

function AddTask() {
  return (
    <div className="lg:p-8">
      <div className="flex justify-between items-center mb-3">
        <div className="heading font-semibold text-[15px]">Add New Task</div>
        <div className="text-normal text-[12px] text-[#A1A3AB] underline">
          Go back
        </div>
      </div>
      <div className="h-full py-3.5 px-4 border-[1px] border-[#A1A3AB] rounded-lg mb-4">
        <div className="flex flex-col gap-2 md:w-7/12 mb-2">
          <Input
            label="Title"
            type="text"
            size="sm"
            onChange={(value) => console.log(value)}
          />
          <Input
            label="Date"
            type="Date"
            size="sm"
            onChange={(value) => console.log(value)}
          />
        </div>

        <div className="font-semibold text-[14px]">Priority</div>
        <div className="flex flex-col md:flex-row justify-start md:items-center md:gap-5 mb-2">
          <div className="flex items-center gap-2">
            <StatusDotIcon color={"#F21E1E"} />
            <label
              className="text-[13px] text-[#A1A3AB] font-normal"
              htmlFor=""
            >
              Extreme
            </label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center gap-2">
            <StatusDotIcon color={"#3ABEFF"} />
            <label
              className="text-[13px] text-[#A1A3AB] font-normal"
              htmlFor=""
            >
              Modrate
            </label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center gap-2">
            <StatusDotIcon color={"#05A301"} />
            <label
              className="text-[13px] text-[#A1A3AB] font-normal"
              htmlFor=""
            >
              Low
            </label>
            <input type="checkbox" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 items-stretch">
          <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col">
            <div className="font-semibold text-[14px] mb-1">
              Task Description
            </div>
            <textarea
              rows={9}
              placeholder="Start working here..."
              className="w-full p-2 border border-[#A1A3AB] rounded-lg flex-1 resize-none"
            ></textarea>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col">
            <div className="font-semibold text-[14px] mb-1">Upload Image</div>
            <div className="flex-1">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
      <Button text="Done" />
    </div>
  );
}

export default AddTask;
