import Avatar from "./Avatar";
import Profile3 from "@/assets/images/profile3.jpg";
import Input from "./Input";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

function AccountInformation() {
  return (
    <div>
      <div className="mb-4">
        <SectionHeader text="Account Information" />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <Avatar
          size="xl"
          imgUrl={Profile3}
          className=""
          rounded
        />
        <div>
          <div className="text-[20px] font-semibold">Sundar Gurung</div>
          <div className="text-[15px] font-normal">
            sundargurung360@gmail.com
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-[1px] border-black rounded-xl p-9">
        <Input
          label="First Name"
          size="sm"
          onChange={(value) => console.log(value)}
        />
        <Input
          label="Last Name"
          size="sm"
          onChange={(value) => console.log(value)}
        />
        <Input
          label="Email Address"
          size="sm"
          onChange={(value) => console.log(value)}
        />
        <Input
          label="Contact Number"
          size="sm"
          onChange={(value) => console.log(value)}
        />
        <Input
          label="Position"
          size="sm"
          onChange={(value) => console.log(value)}
        />

        <div className="flex items-center justify-start gap-2">
          <Button
            size="sm"
            text="Save Changes"
          />
          <Button
            size="sm"
            text="Cancel"
          />
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
