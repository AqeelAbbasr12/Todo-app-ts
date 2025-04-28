import Avatar from "./Avatar";
import Profile2 from "@/assets/images/profile2.jpg"
import Input from "./Input";
import Button from "./Button";

function ChangePassword() {
  return <div>
    <div className="mb-4">
      <SectionHeader />
    </div>
    <div className="flex items-center gap-4 mb-6">
      <Avatar size="xl" imgUrl={Profile2} className="" rounded />
      <div>
        <div className="text-[20px] font-semibold">Sundar Gurung</div>
        <div className="text-[15px] font-normal">sundargurung360@gmail.com</div>
      </div>
    </div>
    <div className="flex flex-col gap-4 border-[1px] border-black rounded-xl p-9">
      <Input label="Current Passowrd" size="sm" onChange={(value) => console.log(value)} />
      <Input label="New Passowrd" size="sm" onChange={(value) => console.log(value)} />
      <Input label="Confirm Passowrd" size="sm" onChange={(value) => console.log(value)} />

      <div className="flex items-center justify-start gap-2">
        <Button size="sm" text="Update Password" />
        <Button size="sm" text="Cancel" />
      </div>
    </div>
  </div>
}

function SectionHeader() {
  return <span className="font-semibold text-[24px] border-b-[#F24E1E] border-b-2">
    Change Password
  </span>
}

export default ChangePassword;
