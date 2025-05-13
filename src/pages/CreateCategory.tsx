import Input from "../components/Input";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

function CreateCategory() {
  return (
    <div>
      <div className="mb-4">
        <SectionHeader text="Create Category" />
      </div>

      <div className="flex flex-col gap-4 border-[1px] border-black rounded-xl p-9">
        <div className="w-6/12">
          <Input
            label="Categoty Name"
            size="sm"
            onChange={(value: string) => console.log(value)}
          />
        </div>

        <div className="flex items-center justify-start gap-2">
          <Button
            size="sm"
            text="Create"
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

export default CreateCategory;
